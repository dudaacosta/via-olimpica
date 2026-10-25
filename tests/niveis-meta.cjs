const assert = require("node:assert/strict");
const { test } = require("node:test");
const { load } = require("./helpers/load-source.cjs");
const { generateSchedule } = load("src/features/schedule/generateSchedule.ts");
function levels() {
  return load("src/features/progress/levels.ts");
}
function weekly() {
  return load("src/features/progress/weeklyGoal.ts");
}
function plan(minutes = [60, 120, 60]) {
  return {
    olympiadId: "obmep",
    grade: "6ano",
    phases: [
      {
        id: "p",
        areas: [
          {
            id: "a",
            name: "Área",
            contents: minutes.map((m, i) => ({
              id: `c${i}`,
              title: `Conteúdo ${i}`,
              estimatedHours: m / 60,
              suggestedOrder: i,
              priority: 1,
              activityType: "Estudo teórico",
            })),
          },
        ],
      },
    ],
  };
}
const preferences = {
  weeklyDays: 2,
  dailyTime: "1 hora",
  examDate: "2026-12-01",
  planStartDate: "2026-10-22",
};
const at = (day) => new Date(2026, 9, day, 12).toISOString();
const interval = (startMinute, endMinute, day = 22) => ({
  startMinute,
  endMinute,
  completedAt: at(day),
});
const keys = (p) => [
  ...new Set(
    generateSchedule(p, 7, "3 horas")
      .flatMap((d) => d.sessions)
      .map((s) => s.contentKey),
  ),
];

test("níveis respeitam os limites reais sem promover pelo arredondamento", () => {
  for (const [done, total, expected] of [
    [0, 100, "bronze"],
    [24, 100, "bronze"],
    [25, 101, "bronze"],
    [25, 100, "silver"],
    [49, 100, "silver"],
    [50, 100, "gold"],
    [79, 100, "gold"],
    [80, 100, "diamond"],
    [100, 100, "diamond"],
  ]) {
    assert.equal(levels().getAchievement(done, total).level.id, expected);
  }
});
test("faltam conteúdos suficientes para efetivamente atingir o próximo nível", () => {
  const result = levels().getAchievement(28, 82);
  assert.equal(result.nextLevel.name, "Ouro");
  assert.equal(result.remainingContents, 13);
  assert.equal(levels().getAchievement(40, 82).level.id, "silver");
  assert.equal(levels().getAchievement(41, 82).level.id, "gold");
  assert.equal(levels().getAchievement(65, 82).remainingContents, 1);
  assert.equal(levels().getAchievement(66, 82).nextLevel, null);
});
test("desmarcar conteúdo rebaixa o nível e plano vazio não gera próximo nível fictício", () => {
  assert.equal(levels().getAchievement(50, 100).level.name, "Ouro");
  assert.equal(levels().getAchievement(49, 100).level.name, "Prata");
  assert.equal(levels().getAchievement(0, 0).percentage, 0);
  assert.equal(levels().getAchievement(0, 0).nextLevel, null);
});
test("tempo parcial não promove o nível: só conteúdos completos contam", () => {
  const p = plan([60, 120]);
  const k = keys(p);
  const { summarizeProgress } = load("src/features/progress/overview.ts");
  const partial = summarizeProgress(p, { [k[1]]: [interval(0, 90)] }, "2026-10-22");
  assert.equal(partial.completedContents, 0);
  assert.equal(partial.percentage, 50); // tempo, mantido para transparência
  assert.equal(
    levels().getAchievement(partial.completedContents, partial.contents.length).percentage,
    0,
  );
  const full = summarizeProgress(p, { [k[1]]: [interval(0, 120)] }, "2026-10-22");
  assert.equal(
    levels().getAchievement(full.completedContents, full.contents.length).percentage,
    50,
  );
});
test("meta usa semana ancorada no cronograma e separa conteúdo que continua na próxima", () => {
  const result = weekly().getWeeklyGoal(plan(), preferences, {}, "2026-10-24");
  assert.equal(result.startDate, "2026-10-22");
  assert.equal(result.endDate, "2026-10-28");
  assert.equal(result.plannedContents, 1); // A termina; B só tem metade nesta semana.
  assert.equal(result.continuingContents, 1);
  assert.equal(result.completedContents, 0);
  assert.equal(result.percentage, 0);
});
test("meta não diminui quando a sessão sai do saldo pendente e sobrevive à restauração", () => {
  const p = plan();
  const k = keys(p);
  const record = { [k[0]]: [interval(0, 60)], [k[1]]: [interval(0, 60, 23)] };
  const before = weekly().getWeeklyGoal(p, preferences, {}, "2026-10-24");
  const after = weekly().getWeeklyGoal(
    p,
    preferences,
    JSON.parse(JSON.stringify(record)),
    "2026-10-24",
  );
  assert.equal(after.plannedContents, before.plannedContents);
  assert.equal(after.completedContents, 1);
  assert.equal(after.continuingContents, 1);
  assert.equal(after.percentage, 100);
  assert.equal(weekly().getWeeklyGoal(p, preferences, {}, "2026-10-24").completedContents, 0);
});
test("na próxima semana o restante do conteúdo conta uma única vez e só completo", () => {
  const p = plan();
  const k = keys(p);
  const prior = { [k[0]]: [interval(0, 60)], [k[1]]: [interval(0, 60, 23)] };
  const result = weekly().getWeeklyGoal(p, preferences, prior, "2026-10-29");
  assert.equal(result.startDate, "2026-10-29");
  assert.equal(result.plannedContents, 2);
  assert.equal(result.completedContents, 0);
  const done = { ...prior, [k[1]]: [...prior[k[1]], interval(60, 120, 29)] };
  assert.equal(weekly().getWeeklyGoal(p, preferences, done, "2026-10-29").completedContents, 1);
});
test("sem conteúdos previstos não há divisão por zero ou meta inventada", () => {
  const result = weekly().getWeeklyGoal(
    plan(),
    { ...preferences, examDate: "2026-10-21" },
    {},
    "2026-10-22",
  );
  assert.equal(result.plannedContents, 0);
  assert.equal(result.continuingContents, 0);
  assert.equal(result.percentage, 0);
});
test("recálculo de disponibilidade muda a meta sem alterar o registro de progresso", () => {
  const p = plan();
  const k = keys(p);
  const record = { [k[0]]: [interval(0, 60)] };
  const snapshot = JSON.stringify(record);
  const result = weekly().getWeeklyGoal(
    p,
    { ...preferences, dailyTime: "2 horas" },
    record,
    "2026-10-23",
  );
  assert.equal(result.plannedContents, 3);
  assert.equal(result.completedContents, 1);
  assert.equal(JSON.stringify(record), snapshot);
});
test("vários dias do mesmo conteúdo não duplicam a conquista semanal", () => {
  const p = plan([120]);
  const k = keys(p)[0];
  const result = weekly().getWeeklyGoal(
    p,
    preferences,
    { [k]: [interval(0, 60), interval(60, 120, 23)] },
    "2026-10-24",
  );
  assert.equal(result.plannedContents, 1);
  assert.equal(result.completedContents, 1);
});
test("cada nível renderiza identidade própria sem imagens inexistentes", () => {
  const React = require("react");
  const { renderToStaticMarkup } = require("react-dom/server");
  const { LevelCard } = load("src/features/progress/components/LevelCard.tsx");
  for (const done of [0, 25, 50, 80, 100]) {
    const achievement = levels().getAchievement(done, 100);
    const html = renderToStaticMarkup(
      React.createElement(LevelCard, { achievement, completedContents: done, totalContents: 100 }),
    );
    assert.ok(html.includes(`Nível ${achievement.level.name}`));
    assert.ok(html.includes("<img"));
    assert.ok(achievement.level.imageSrc);
    assert.ok(
      require("node:fs").existsSync(
        require("node:path").join(__dirname, "../public", achievement.level.imageSrc),
      ),
    );
    assert.ok(html.includes(achievement.level.imageAlt));
    assert.ok(html.includes(`${done} de`));
  }
});
test("a carga parcial além da data da prova não vira uma conclusão semanal prometida", () => {
  const result = weekly().getWeeklyGoal(
    plan([120]),
    { ...preferences, weeklyDays: 7, examDate: "2026-10-23" },
    {},
    "2026-10-22",
  );
  assert.equal(result.plannedContents, 0);
  assert.equal(result.continuingContents, 1);
  assert.equal(result.completedContents, 0);
});
test("texto dos cards mantém contraste legível nas cores provisórias", () => {
  function luminance(hex) {
    const rgb = hex
      .slice(1)
      .match(/../g)
      .map((part) => parseInt(part, 16) / 255)
      .map((channel) =>
        channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
      );
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  }
  for (const level of levels().PROGRESS_LEVELS) {
    for (const background of level.background.match(/#[a-f0-9]{6}/gi)) {
      const values = [luminance(background), luminance(level.foreground)].sort((a, b) => b - a);
      assert.ok((values[0] + 0.05) / (values[1] + 0.05) >= 4.5, level.name);
    }
  }
});
