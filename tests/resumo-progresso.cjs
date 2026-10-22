const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const { test } = require('node:test');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (!path.extname(file)) file += '.ts';
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  cache.set(file, module);
  const resolve = request => request.startsWith('@/') ? load(path.join(root, 'src', request.slice(2)))
    : request.startsWith('.') ? load(path.resolve(path.dirname(file), request)) : require(request);
  new vm.Script('(function(require,module,exports){' + output + '\n})', { filename: file })
    .runInThisContext()(resolve, module, module.exports);
  return module.exports;
}
const { generateSchedule } = load(path.join(root, 'src/features/schedule/generateSchedule.ts'));
function overview() { return load(path.join(root, 'src/features/progress/overview.ts')); }
const plan = {
  olympiadId: 'obmep', grade: '6ano', phases: [{ id: 'p', areas: [{ id: 'a', name: 'Matemática',
    contents: [60, 120].map((minutes, index) => ({ id: `c${index}`, title: `Conteúdo ${index}`,
      estimatedHours: minutes / 60, suggestedOrder: index, priority: 1, activityType: 'Estudo teórico' })),
  }] }],
};
const keys = [...new Set(generateSchedule(plan, 7, '3 horas').flatMap(d => d.sessions).map(s => s.contentKey))];
const at = day => new Date(2026, 9, day, 12).toISOString();
const interval = (startMinute, endMinute, day = 22) => ({ startMinute, endMinute, completedAt: at(day) });
test('resumo usa minutos únicos e limita conclusões ao conteúdo real', () => {
  const record = { [keys[0]]: [interval(0, 40), interval(20, 90)], [keys[1]]: [interval(0, 30)] };
  const before = JSON.stringify(record);
  const summary = overview().summarizeProgress(plan, record, '2026-10-22');
  assert.equal(summary.totalMinutes, 180);
  assert.equal(summary.completedMinutes, 90);
  assert.equal(summary.percentage, 50);
  assert.equal(summary.completedContents, 1);
  assert.deepEqual(summary.contents.map(c => c.status), ['Concluído', 'Em andamento']);
  assert.equal(JSON.stringify(record), before);
});
test('trocar olimpíada ou ano não mistura os registros dos planos', () => {
  const otherPlan = { ...plan, olympiadId: 'oba' };
  const summary = overview().summarizeProgress(otherPlan, { [keys[0]]: [interval(0, 60)] }, '2026-10-22');
  assert.equal(summary.completedMinutes, 0);
  assert.equal(summary.percentage, 0);
  assert.deepEqual(summary.contents.map(c => c.status), ['Não iniciado', 'Não iniciado']);
});
test('semana começa na segunda e não conta datas futuras ou inválidas', () => {
  const record = { [keys[1]]: [interval(0, 20, 18), interval(20, 40, 19), interval(40, 60, 22), interval(60, 80, 23),
    { startMinute: 80, endMinute: 100, completedAt: 'inválido' }] };
  const summary = overview().summarizeProgress(plan, record, '2026-10-22');
  assert.equal(summary.weekStart, '2026-10-19');
  assert.equal(summary.weekMinutes, 40);
  assert.equal(summary.todayMinutes, 20);
});
test('resumo permanece idêntico ao mudar a duração das sessões', () => {
  const record = { [keys[1]]: [interval(30, 90)] };
  const summary = overview().summarizeProgress(plan, record, '2026-10-22');
  assert.equal(summary.completedMinutes, 60);
  assert.equal(summary.percentage, 33);
  assert.equal(summary.completedContents, 0);
  assert.equal(summary.contents.length, 2);
});
test('conclusão completa e desfazer usam o registro atual, sem XP inventado', () => {
  const summary = overview().summarizeProgress(plan, { [keys[0]]: [interval(0, 60)], [keys[1]]: [interval(0, 120)] }, '2026-10-22');
  assert.equal(summary.percentage, 100);
  assert.equal(summary.completedContents, 2);
  const undone = overview().summarizeProgress(plan, {}, '2026-10-22');
  assert.equal(undone.completedMinutes, 0);
  assert.equal(undone.completedContents, 0);
});
test('resumo vazio não produz NaN nem afirma que há conteúdos concluídos', () => {
  const summary = overview().summarizeProgress({ ...plan, phases: [] }, {}, '2026-10-22');
  assert.equal(summary.percentage, 0);
  assert.equal(summary.contents.length, 0);
});
test('sessões de hoje compartilham o mesmo orçamento diário do cronograma', () => {
  const { buildDatedSchedule } = load(path.join(root, 'src/features/schedule/buildDatedSchedule.ts'));
  const result = buildDatedSchedule(plan, { weeklyDays: 3, dailyTime: '1h30', examDate: '2026-10-23', planStartDate: '2026-10-22' },
    { [keys[0]]: [interval(0, 60)] }, '2026-10-22');
  assert.equal(result.days[0].date, '2026-10-22');
  assert.equal(result.days[0].plannedMinutes, 30);
  assert.equal(result.availableMinutes, 30);
  assert.equal(result.remainingMinutes, 120);
});
test('os 28 planos das quatro olimpíadas somam a base real e preservam conclusão parcial', () => {
  const { OLYMPIAD_CONTENTS } = load(path.join(root, 'src/data/olimpiadas.ts'));
  for (const realPlan of OLYMPIAD_CONTENTS) {
    const original = generateSchedule(realPlan, 3, '30 min');
    const first = original[0].sessions[0];
    const summary = overview().summarizeProgress(realPlan, { [first.contentKey]: [interval(first.startMinute, first.endMinute)] }, '2026-10-22');
    assert.equal(summary.totalMinutes, original.reduce((sum, day) => sum + day.plannedMinutes, 0));
    assert.equal(summary.completedMinutes, first.sessionMinutes);
    assert.equal(summary.contents.length, new Set(original.flatMap(d => d.sessions).map(s => s.contentKey)).size);
  }
});
