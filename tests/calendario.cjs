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
  cache.set(file, module);
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const resolve = (request) => request.startsWith('@/')
    ? load(path.join(root, 'src', request.slice(2)))
    : request.startsWith('.') ? load(path.resolve(path.dirname(file), request)) : require(request);
  new vm.Script('(function(require,module,exports){' + output + '\n})', { filename: file })
    .runInThisContext()(resolve, module, module.exports);
  return module.exports;
}
const { generateSchedule } = load(path.join(root, 'src/features/schedule/generateSchedule.ts'));
const plan = {
  olympiadId: 'obmep', grade: '6ano', phases: [{ id: 'p', areas: [{
    id: 'a', name: 'Matemática', contents: [{ id: 'c', title: 'Conteúdo',
      estimatedHours: 3, suggestedOrder: 1, priority: 1, activityType: 'Estudo teórico' }],
  }] }],
};
test('replaneja somente trechos pendentes, mantendo a identidade e o histórico', () => {
  const key = generateSchedule(plan, 2, '1 hora')[0].sessions[0].contentKey;
  const completed = { [key]: [
    { startMinute: 0, endMinute: 30, completedAt: '2026-10-20' },
    { startMinute: 60, endMinute: 90, completedAt: '2026-10-21' },
  ] };
  const snapshot = JSON.stringify(completed);
  const sessions = generateSchedule(plan, 2, '1 hora', completed).flatMap(d => d.sessions);
  assert.deepEqual(sessions.map(s => [s.startMinute, s.endMinute]), [[30, 60], [90, 120], [120, 180]]);
  assert.ok(sessions.every(s => s.contentKey === key));
  assert.equal(JSON.stringify(completed), snapshot);
});
test('conteúdo totalmente concluído não ocupa disponibilidade futura', () => {
  const key = generateSchedule(plan, 2, '1 hora')[0].sessions[0].contentKey;
  assert.deepEqual(generateSchedule(plan, 2, '1 hora', {
    [key]: [{ startMinute: 0, endMinute: 180, completedAt: '2026-10-21' }],
  }), []);
});
// Loaded inside each test so missing calendar functionality is an explicit test failure.
function calendar() { return load(path.join(root, 'src/features/schedule/calendar.ts')); }
test('usa datas locais, pausas e não inclui o dia da prova na disponibilidade', () => {
  const result = calendar().dateSchedule(generateSchedule(plan, 2, '1 hora'), '2026-10-21', '2026-10-28', 2, '1 hora');
  assert.deepEqual(result.days.map(d => d.date), [
    '2026-10-21', '2026-10-22', '2026-10-23', '2026-10-24',
    '2026-10-25', '2026-10-26', '2026-10-27', '2026-10-28',
  ]);
  assert.equal(result.availableMinutes, 120);
  assert.equal(result.overflowMinutes, 60);
  assert.equal(result.days.at(-1).afterDeadline, true);
});
test('prazo suficiente, virada do ano e ano bissexto', () => {
  const days = generateSchedule(plan, 7, '1 hora');
  const result = calendar().dateSchedule(days, '2027-12-30', '2028-01-02', 7, '1 hora');
  assert.deepEqual(result.days.map(d => d.date), ['2027-12-30', '2027-12-31', '2028-01-01']);
  assert.equal(result.overflowMinutes, 0);
  assert.equal(result.availableMinutes, 180);
  assert.deepEqual(calendar().dateSchedule(days, '2028-02-28', '2028-03-02', 7, '1 hora').days.map(d => d.date),
    ['2028-02-28', '2028-02-29', '2028-03-01']);
});
test('valida datas reais e prazo futuro sem inventar uma data de prova', () => {
  assert.equal(calendar().isFutureExamDate('2026-02-30', '2026-01-01'), false);
  assert.equal(calendar().isFutureExamDate('2026-10-21', '2026-10-21'), false);
  assert.equal(calendar().isFutureExamDate('2026-10-22', '2026-10-21'), true);
  assert.throws(() => calendar().dateSchedule([], '2026-10-21', '2026-02-30', 7, '1 hora'), /data/i);
  assert.equal(calendar().localDate(new Date(2026, 9, 21, 23, 30)), '2026-10-21');
});
test('prazo vencido informa todo saldo como excedente e mantém os conteúdos', () => {
  const result = calendar().dateSchedule(generateSchedule(plan, 7, '1 hora'), '2026-10-21', '2026-10-20', 7, '1 hora');
  assert.equal(result.availableMinutes, 0);
  assert.equal(result.overflowMinutes, 180);
  assert.equal(result.days.flatMap(d => d.sessions).length, 3);
});
test('perfil antigo hidrata sem inventar data; data salva sobrevive à reidratação', async () => {
  const data = new Map();
  const previousWindow = global.window;
  global.window = { localStorage: {
    getItem: key => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value),
    removeItem: key => data.delete(key),
  } };
  try {
    data.set('via-olimpica-quiz', JSON.stringify({ state: {
      name: 'Estudante', grade: '6ano', olympiad: 'oba', completed: true,
      dailyTime: '1 hora', weeklyDays: 3,
    }, version: 0 }));
    const { useQuizStore } = load(path.join(root, 'src/features/quiz/store.ts'));
    await useQuizStore.persist.rehydrate();
    assert.equal(useQuizStore.getState().examDate, null);
    assert.equal(useQuizStore.getState().olympiad, 'oba');
    assert.equal(useQuizStore.getState().completed, true);
    useQuizStore.getState().setExamDate('2027-06-10');
    const saved = data.get('via-olimpica-quiz');
    useQuizStore.setState({ examDate: null });
    data.set('via-olimpica-quiz', saved);
    await useQuizStore.persist.rehydrate();
    assert.equal(useQuizStore.getState().examDate, '2027-06-10');
    assert.equal(useQuizStore.getState().grade, '6ano');
    for (const invalid of ['2027-02-30', 123, {}]) {
      data.set('via-olimpica-quiz', JSON.stringify({ state: { examDate: invalid }, version: 0 }));
      await useQuizStore.persist.rehydrate();
      assert.equal(useQuizStore.getState().examDate, null);
    }
  } finally { global.window = previousWindow; }
});
test('replanejamento conserva minutos nas quatro olimpíadas sem exceder o dia', () => {
  const { OLYMPIAD_CONTENTS } = load(path.join(root, 'src/data/olimpiadas.ts'));
  for (const realPlan of OLYMPIAD_CONTENTS) {
    const original = generateSchedule(realPlan, 3, '1 hora');
    const first = original[0].sessions[0];
    const completed = { [first.contentKey]: [{
      startMinute: first.startMinute, endMinute: first.endMinute, completedAt: '2026-10-21',
    }] };
    const next = generateSchedule(realPlan, 2, '30 min', completed);
    const originalMinutes = original.reduce((n, d) => n + d.plannedMinutes, 0);
    assert.equal(next.reduce((n, d) => n + d.plannedMinutes, 0), originalMinutes - first.sessionMinutes);
    assert.ok(next.every(d => d.plannedMinutes <= (d.isPause ? 0 : 30)));
    assert.ok(next.flatMap(d => d.sessions).every(s => s.contentKey !== first.contentKey
      || s.endMinute <= first.startMinute || s.startMinute >= first.endMinute));
  }
});
test('concluir hoje não devolve disponibilidade diária nem faz o saldo caber artificialmente', () => {
  const first = generateSchedule(plan, 7, '1 hora')[0].sessions[0];
  const completed = { [first.contentKey]: [{ startMinute: 0, endMinute: 60, completedAt: '2026-10-21T12:00:00-03:00' }] };
  const availability = { dayOffset: 0, studiedTodayMinutes: 60 };
  const pending = generateSchedule(plan, 7, '1 hora', completed, availability);
  assert.equal(pending[0].plannedMinutes, 0);
  assert.equal(pending[0].capacityMinutes, 0);
  const result = calendar().dateSchedule(pending, '2026-10-21', '2026-10-22', 7, '1 hora', availability);
  assert.equal(result.availableMinutes, 0);
  assert.equal(result.overflowMinutes, 120);
  assert.equal(calendar().studiedMinutesOnDate(completed, '2026-10-21'), 60);
  assert.equal(calendar().studiedMinutesOnDate(completed, '2026-10-22'), 0);
  const undone = generateSchedule(plan, 7, '1 hora', {}, { dayOffset: 0, studiedTodayMinutes: 0 });
  assert.equal(undone[0].plannedMinutes, 60);
});
test('ao reabrir no dia de pausa mantém o ciclo original e o saldo parcial de hoje', () => {
  assert.equal(calendar().scheduleDayOffset('2026-10-19', '2026-10-21'), 2);
  const availability = { dayOffset: 2, studiedTodayMinutes: 0 };
  const pending = generateSchedule(plan, 2, '1 hora', {}, availability);
  assert.deepEqual(pending.slice(0, 6).map(d => d.isPause), [true, true, true, true, true, false]);
  const result = calendar().dateSchedule(pending, '2026-10-21', '2026-10-26', 2, '1 hora', availability);
  assert.equal(result.availableMinutes, 0);
  assert.equal(result.overflowMinutes, 180);
  const partial = generateSchedule(plan, 7, '1 hora', {}, { dayOffset: 0, studiedTodayMinutes: 45 });
  assert.equal(partial[0].plannedMinutes, 15);
  assert.equal(partial[1].plannedMinutes, 60);
});
