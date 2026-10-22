const test = require('node:test');
const assert = require('node:assert/strict');
const { load } = require('./helpers/load-source.cjs');

test('configuração aceita somente o projeto Via Olímpica e chave pública', () => {
  const { validateAuthConfig } = load('src/features/auth/config.ts');
  const url = 'https://uprbptqpgrhunbaaowib.supabase.co';
  assert.equal(validateAuthConfig(url, 'sb_publishable_test').valid, true);
  assert.equal(validateAuthConfig('https://outro.supabase.co', 'sb_publishable_test').valid, false);
  assert.equal(validateAuthConfig(url, 'sb_secret_test').valid, false);
  assert.equal(validateAuthConfig(url, undefined).valid, false);
  const jwt = role => `eyJhbGciOiJIUzI1NiJ9.${Buffer.from(JSON.stringify({role})).toString('base64url')}.signature`;
  assert.equal(validateAuthConfig(url, jwt('service_role')).valid, false);
  assert.equal(validateAuthConfig(url, jwt('anon')).valid, true);
});

test('visitante e duas contas mantêm planos, favoritos e progresso separados', async () => {
  const entries = new Map();
  global.window = { localStorage: {
    getItem: key => entries.get(key) ?? null,
    setItem: (key, value) => entries.set(key, value),
    removeItem: key => entries.delete(key),
  }};
  try {
    const { switchStudyAccount } = load('src/features/auth/studyAccount.ts');
    const { useQuizStore: quiz } = load('src/features/quiz/store.ts');
    const { useProgressStore: progress } = load('src/features/progress/store.ts');
    const { useFavoritesStore: favorites } = load('src/features/favorites/store.ts');
    await switchStudyAccount(null);
    quiz.getState().setName('Visitante');
    quiz.getState().setGrade('6ano');
    progress.getState().completeRange('conteudo', 0, 30);
    favorites.getState().toggleFavorite('oba');
    const original = entries.get('via-olimpica-progress-v1');
    await switchStudyAccount('crianca-a');
    assert.equal(quiz.getState().name, '');
    assert.deepEqual(progress.getState().completedByContent, {});
    assert.deepEqual(favorites.getState().favoriteOlympiadIds, []);
    quiz.getState().setName('Ana');
    progress.getState().completeRange('conteudo', 0, 60);
    favorites.getState().toggleFavorite('obmep');
    await switchStudyAccount('crianca-b');
    assert.equal(quiz.getState().name, '');
    assert.deepEqual(progress.getState().completedByContent, {});
    quiz.getState().setName('Bia');
    await switchStudyAccount('crianca-a');
    assert.equal(quiz.getState().name, 'Ana');
    assert.equal(progress.getState().completedByContent.conteudo[0].endMinute, 60);
    assert.deepEqual(favorites.getState().favoriteOlympiadIds, ['obmep']);
    await switchStudyAccount(null);
    assert.equal(quiz.getState().name, 'Visitante');
    assert.equal(entries.get('via-olimpica-progress-v1'), original);
    assert.deepEqual(favorites.getState().favoriteOlympiadIds, ['oba']);
  } finally { delete global.window; }
});

test('uma troca que não consegue ler os dados não libera a nova conta', async () => {
  global.window = { localStorage: {
    getItem: () => { throw new Error('Storage bloqueado'); },
    setItem: () => {}, removeItem: () => {},
  }};
  try {
    const { switchStudyAccount } = load('src/features/auth/studyAccount.ts');
    await assert.rejects(switchStudyAccount('bloqueada'), /dados/i);
  } finally { delete global.window; }
});
