'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createRequire } = require('node:module');
const root = path.resolve(__dirname, '..');
const projectRequire = createRequire(path.join(root, 'package.json'));
let ts;
try { ts = projectRequire('typescript'); } catch { ts = require('typescript'); }

function createLoader() {
  const cache = new Map();
  function resolveSource(request, parentFile) {
    let candidate;
    if (request.startsWith('@/')) candidate = path.join(root, 'src', request.slice(2));
    else if (request.startsWith('.')) candidate = path.resolve(path.dirname(parentFile), request);
    else return null;
    const attempts = [candidate, `${candidate}.ts`, `${candidate}.tsx`, path.join(candidate, 'index.ts'), path.join(candidate, 'index.tsx')];
    return attempts.find((file) => fs.existsSync(file)) ?? candidate;
  }
  function load(file) {
    file = path.resolve(file);
    if (cache.has(file)) return cache.get(file).exports;
    if (!fs.existsSync(file)) throw new Error(`Arquivo TypeScript ausente: ${path.relative(root, file)}`);
    const module = { exports: {} };
    cache.set(file, module);
    const result = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      fileName: file,
      compilerOptions: {
        target: ts.ScriptTarget.ES2022,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
      },
    });
    const localRequire = (request) => {
      const source = resolveSource(request, file);
      return source ? load(source) : projectRequire(request);
    };
    new vm.Script(`(function(require,module,exports){${result.outputText}\n})`, { filename: file })
      .runInThisContext()(localRequire, module, module.exports);
    return module.exports;
  }
  return load;
}

function originalContents(plan) {
  return plan.phases.flatMap((phase) => phase.areas.flatMap((area) => area.contents));
}

let passed = 0;
let failed = 0;
function test(name, fn) {
  try { fn(); passed += 1; }
  catch (error) { failed += 1; console.error(`\nFALHOU: ${name}\n${error.stack}`); }
}

const load = createLoader();
const registry = load(path.join(root, 'src/data/curriculum/registry.ts'));
const quizData = load(path.join(root, 'src/features/quiz/data.ts'));
const olympiadData = load(path.join(root, 'src/data/olimpiadas.ts'));
const schedule = load(path.join(root, 'src/features/schedule/generateSchedule.ts'));
const time = load(path.join(root, 'src/features/schedule/time.ts'));

const olitef = registry.getCurriculumByOlympiadId('olitef');

test('currículo OLITEF existe e passa na validação estrutural', () => {
  assert.ok(olitef);
  assert.deepEqual(registry.validateRegisteredCurricula().filter((item) => item.olympiadId === 'olitef'), [
    { olympiadId: 'olitef', errors: [] },
  ]);
});

test('26 tópicos oficiais e didáticos declarados estão mapeados sem lacunas', () => {
  assert.equal(olitef.officialTopicIds.length, 26);
  const mapped = new Set(olitef.contents.flatMap((item) => item.sourceTopicIds));
  assert.equal(mapped.size, 26);
  assert.deepEqual([...mapped].sort(), [...olitef.officialTopicIds].sort());
});

test('níveis OLITEF correspondem aos sete anos atendidos', () => {
  const expected = {
    '6ano': 'olitef_n1', '7ano': 'olitef_n1',
    '8ano': 'olitef_n2', '9ano': 'olitef_n2',
    '1em': 'olitef_n3', '2em': 'olitef_n3', '3em': 'olitef_n3',
  };
  for (const [grade, levelId] of Object.entries(expected)) {
    assert.equal(registry.getCurriculumLevelForOlympiadGrade('olitef', grade)?.id, levelId);
  }
});

test('OLITEF gera sete planos e está disponível no catálogo', () => {
  const plans = olympiadData.OLYMPIAD_CONTENTS.filter((plan) => plan.olympiadId === 'olitef');
  assert.equal(plans.length, 7);
  assert.equal(quizData.isOlympiadAvailableId('olitef'), true);
  assert.equal(quizData.findOlympiad('olitef').availability, 'available');
});

test('núcleo comum está associado aos três níveis sem duplicar registros', () => {
  assert.equal(new Set(olitef.contents.map((item) => item.id)).size, olitef.contents.length);
  const common = olitef.contents.filter((item) => item.adaptations.length === 3);
  assert.ok(common.length >= 20, `Esperava núcleo comum amplo; encontrado ${common.length}`);
  for (const record of common) {
    assert.deepEqual(new Set(record.adaptations.map((item) => item.levelId)), new Set(['olitef_n1','olitef_n2','olitef_n3']));
  }
});

test('todos os registros têm fonte, tempo, dificuldade, ordem e critério de domínio', () => {
  for (const item of olitef.contents) {
    assert.ok(item.sources.length > 0, item.id);
    assert.ok(item.adaptations.length > 0, item.id);
    for (const adaptation of item.adaptations) {
      assert.ok(adaptation.theoryMinutes >= 0, item.id);
      assert.ok(adaptation.exerciseMinutes > 0, item.id);
      assert.ok(adaptation.order > 0, item.id);
      assert.ok(adaptation.difficulty >= 1 && adaptation.difficulty <= 5, item.id);
      assert.ok(adaptation.masteryCriteria.length > 10, item.id);
    }
  }
});

test('252 combinações OLITEF conservam minutos, ordem e capacidade diária', () => {
  const plans = olympiadData.OLYMPIAD_CONTENTS.filter((plan) => plan.olympiadId === 'olitef');
  let combinations = 0;
  for (const plan of plans) {
    const originals = originalContents(plan).slice().sort((a, b) => a.suggestedOrder - b.suggestedOrder || b.priority - a.priority);
    for (const daily of time.DAILY_TIME) {
      for (let weekly = 1; weekly <= 6; weekly += 1) {
        combinations += 1;
        const days = schedule.generateSchedule(plan, weekly, daily);
        const sessions = days.flatMap((day) => day.sessions);
        const byId = new Map();
        for (const session of sessions) {
          const list = byId.get(session.contentId) ?? [];
          list.push(session);
          byId.set(session.contentId, list);
        }
        assert.deepEqual([...byId.keys()], originals.map((item) => item.id));
        for (const item of originals) {
          const parts = byId.get(item.id);
          assert.ok(parts?.length, item.id);
          assert.equal(parts.reduce((sum, part) => sum + part.sessionMinutes, 0), Math.round(item.estimatedHours * 60));
        }
        for (const day of days) {
          assert.ok(day.plannedMinutes <= day.capacityMinutes);
          if (day.isPause) assert.equal(day.sessions.length, 0);
        }
      }
    }
  }
  assert.equal(combinations, 252);
});

test('OLITEF possui detalhes oficiais e áreas MA01, MA02, MA03 e formação', () => {
  assert.deepEqual(olitef.areas.map((area) => area.id), ['olitef-ma01','olitef-ma02','olitef-ma03','olitef-formacao']);
  assert.match(olitef.details.officialUrl, /^https:\/\//);
  assert.match(olitef.details.audience, /6º ano/i);
});

console.log(`\nOLITEF: ${passed} aprovados; ${failed} falhas.`);
process.exitCode = failed ? 1 : 0;
