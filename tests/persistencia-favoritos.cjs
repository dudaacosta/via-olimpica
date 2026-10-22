/* Testes locais: node tests/persistencia-favoritos.cjs
 * Testa os modulos reais usados pela aplicacao. Nao usa rede nem altera a base educacional.
 */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const { createRequire } = require('node:module');
const root = path.resolve(__dirname, '..');
const projectRequire = createRequire(path.join(root, 'package.json'));
const ts = projectRequire('typescript');

function createLoader() {
  const cache = new Map();
  function sourceModule(file) {
    file = path.resolve(file);
    if (!path.extname(file)) file += '.ts';
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} };
    cache.set(file, module);
    const result = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      fileName: file,
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
    });
    const resolve = (request) => request.startsWith('@/')
      ? sourceModule(path.join(root, 'src', request.slice(2)))
      : request.startsWith('.')
        ? sourceModule(path.resolve(path.dirname(file), request))
        : projectRequire(request);
    const wrapper = new vm.Script('(function(require,module,exports){\n' + result.outputText + '\n})', { filename: file });
    wrapper.runInThisContext()(resolve, module, module.exports);
    return module.exports;
  }
  return sourceModule;
}

class MemoryStorage {
  constructor() { this.data = new Map(); }
  getItem(key) { return this.data.has(key) ? this.data.get(key) : null; }
  setItem(key, value) { this.data.set(key, String(value)); }
  removeItem(key) { this.data.delete(key); }
  clear() { this.data.clear(); }
}

let pass = 0;
let fail = 0;
async function test(name, fn) {
  try { await fn(); pass++; }
  catch (error) { fail++; console.error('\nFALHOU: ' + name + '\n' + error.stack); }
}

function plan(minutes) {
  return {
    olympiadId: 'obmep', grade: '6ano', phases: [{ id: 'p', name: 'Fase', areas: [{
      id: 'area', name: 'Area', contents: minutes.map((m, i) => ({
        id: String.fromCharCode(65 + i), title: String.fromCharCode(65 + i),
        description: 'Teste', estimatedHours: m / 60, priority: 1,
        suggestedOrder: i + 1, activityType: 'Estudo teórico', difficulty: 'fácil',
      })),
    }] }],
  };
}

(async () => {
  const load = createLoader();
  const ranges = load(path.join(root, 'src/features/progress/ranges.ts'));
  const { generateSchedule } = load(path.join(root, 'src/features/schedule/generateSchedule.ts'));
  const { applyProgressToSchedule } = load(path.join(root, 'src/features/progress/applyProgressToSchedule.ts'));

  await test('adiciona intervalo e reconhece cobertura completa', () => {
    const result = ranges.addCompletedRange([], 0, 60, '2026-10-20T10:00:00.000Z');
    assert.equal(ranges.isRangeCompleted(result, 0, 60), true);
    assert.equal(ranges.isRangeCompleted(result, 0, 90), false);
  });

  await test('intervalos adjacentes cobrem o conteudo sem duplicar minutos', () => {
    let result = ranges.addCompletedRange([], 0, 60, '2026-10-20T10:00:00.000Z');
    result = ranges.addCompletedRange(result, 60, 90, '2026-10-20T11:00:00.000Z');
    assert.equal(ranges.completedMinutes(result, 0, 90), 90);
    assert.equal(ranges.isRangeCompleted(result, 0, 90), true);
  });

  await test('remover um trecho divide a conclusao sem apagar o restante', () => {
    let result = ranges.addCompletedRange([], 0, 90, '2026-10-20T10:00:00.000Z');
    result = ranges.removeCompletedRange(result, 30, 60);
    assert.equal(ranges.isRangeCompleted(result, 0, 30), true);
    assert.equal(ranges.isRangeCompleted(result, 30, 60), false);
    assert.equal(ranges.isRangeCompleted(result, 60, 90), true);
  });

  await test('troca de horario preserva 60 minutos concluidos e deixa 30 pendentes', () => {
    const scheduleOneHour = generateSchedule(plan([60, 90]), 3, '1 hora');
    const contentB = scheduleOneHour.flatMap((day) => day.sessions).find((session) => session.contentId === 'B');
    assert.ok(contentB);
    const completed = {
      [contentB.contentKey]: ranges.addCompletedRange([], 0, 60, '2026-10-20T10:00:00.000Z'),
    };
    const scheduleThreeHours = generateSchedule(plan([60, 90]), 3, '3 horas');
    const projected = applyProgressToSchedule(scheduleThreeHours, completed);
    const parts = projected.flatMap((day) => day.sessions).filter((session) => session.contentId === 'B');
    assert.deepEqual(parts.map((session) => [session.startMinute, session.endMinute, session.completed]), [
      [0, 60, true],
      [60, 90, false],
    ]);
  });

  await test('troca de dias por semana preserva a mesma conclusao', () => {
    const schedule = generateSchedule(plan([90]), 3, '1 hora');
    const first = schedule[0].sessions[0];
    const completed = { [first.contentKey]: ranges.addCompletedRange([], 0, 60, '2026-10-20T10:00:00.000Z') };
    const changed = applyProgressToSchedule(generateSchedule(plan([90]), 6, '1 hora'), completed);
    assert.equal(changed[0].sessions[0].completed, true);
  });

  await test('store de progresso grava e recupera do localStorage', async () => {
    const storage = new MemoryStorage();
    global.window = { localStorage: storage };
    let loadStore = createLoader();
    let progress = loadStore(path.join(root, 'src/features/progress/store.ts'));
    await progress.useProgressStore.persist.rehydrate();
    progress.useProgressStore.getState().completeRange('conteudo-a', 0, 45, '2026-10-20T10:00:00.000Z');
    await new Promise((resolve) => setTimeout(resolve, 0));
    assert.ok(storage.getItem(progress.PROGRESS_STORAGE_KEY));

    loadStore = createLoader();
    progress = loadStore(path.join(root, 'src/features/progress/store.ts'));
    await progress.useProgressStore.persist.rehydrate();
    assert.equal(progress.isRangeCompleted(progress.useProgressStore.getState().completedByContent['conteudo-a'], 0, 45), true);
    delete global.window;
  });

  await test('store de favoritos alterna e recupera OBMEP do localStorage', async () => {
    const storage = new MemoryStorage();
    global.window = { localStorage: storage };
    let loadStore = createLoader();
    let favorites = loadStore(path.join(root, 'src/features/favorites/store.ts'));
    await favorites.useFavoritesStore.persist.rehydrate();
    favorites.useFavoritesStore.getState().toggleFavorite('obmep');
    await new Promise((resolve) => setTimeout(resolve, 0));
    assert.deepEqual(favorites.useFavoritesStore.getState().favoriteOlympiadIds, ['obmep']);
    assert.ok(storage.getItem(favorites.FAVORITES_STORAGE_KEY));

    loadStore = createLoader();
    favorites = loadStore(path.join(root, 'src/features/favorites/store.ts'));
    await favorites.useFavoritesStore.persist.rehydrate();
    assert.deepEqual(favorites.useFavoritesStore.getState().favoriteOlympiadIds, ['obmep']);
    favorites.useFavoritesStore.getState().toggleFavorite('obmep');
    assert.deepEqual(favorites.useFavoritesStore.getState().favoriteOlympiadIds, []);
    delete global.window;
  });

  const rootSource = fs.readFileSync(path.join(root, 'src/routes/__root.tsx'), 'utf8');
  await test('raiz reidrata progresso e favoritos no navegador', () => {
    assert.match(rootSource, /useProgressStore\.persist\.rehydrate\(\)/);
    assert.match(rootSource, /useFavoritesStore\.persist\.rehydrate\(\)/);
  });

  const detailsSource = fs.readFileSync(path.join(root, 'src/routes/obmep-detalhes.tsx'), 'utf8');
  await test('botao de favoritos usa store persistente e estado acessivel', () => {
    assert.match(detailsSource, /toggleFavorite\(olympiad\.id\)/);
    assert.match(detailsSource, /aria-pressed=\{isFavorite\}/);
    assert.match(detailsSource, /Salvo nos favoritos/);
  });

  console.log('\nPersistencia/favoritos: ' + pass + ' aprovados; ' + fail + ' falhas.');
  process.exitCode = fail ? 1 : 0;
})();
