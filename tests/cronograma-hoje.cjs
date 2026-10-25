const assert = require("node:assert/strict");
const { test } = require("node:test");
const { load } = require("./helpers/load-source.cjs");
const { buildDatedSchedule } = load("src/features/schedule/buildDatedSchedule.ts");
const { generateSchedule } = load("src/features/schedule/generateSchedule.ts");
const { OLYMPIAD_CONTENTS } = load("src/data/olimpiadas.ts");
const today = "2026-10-22";
const prefs = { weeklyDays: 3, dailyTime: "30 min", examDate: "2027-01-31", planStartDate: today };
const completed = (session) => ({
  startMinute: session.startMinute,
  endMinute: session.endMinute,
  completedAt: new Date(2026, 9, 22, 12).toISOString(),
});
test("conclusões de outra olimpíada não bloqueiam as sessões de hoje do plano selecionado", () => {
  for (const id of ["obmep", "oba", "olitef", "canguru"]) {
    const plan = OLYMPIAD_CONTENTS.find((p) => p.olympiadId === id);
    const other = OLYMPIAD_CONTENTS.find((p) => p.olympiadId !== id);
    const prior = generateSchedule(other, 7, "1 hora")[0].sessions[0];
    const result = buildDatedSchedule(
      plan,
      prefs,
      { [prior.contentKey]: [completed(prior)] },
      today,
    );
    const day = result.days.find((d) => d.date === today);
    assert.equal(day.plannedMinutes, 30, id);
    assert.ok(day.sessions.length > 0, id);
    const validKeys = new Set(
      generateSchedule(plan, 7, "3 horas")
        .flatMap((d) => d.sessions)
        .map((s) => s.contentKey),
    );
    assert.ok(
      day.sessions.every((s) => validKeys.has(s.contentKey)),
      id,
    );
  }
});
test("troca de ano escolar não herda disponibilidade consumida por outro plano", () => {
  const [plan, other] = OLYMPIAD_CONTENTS.filter((p) => p.olympiadId === "obmep");
  const prior = generateSchedule(other, 7, "1 hora")[0].sessions[0];
  const result = buildDatedSchedule(plan, prefs, { [prior.contentKey]: [completed(prior)] }, today);
  assert.equal(result.days[0].plannedMinutes, 30);
});
test("conclusão do plano atual continua consumindo o limite de hoje sem alterar os dados", () => {
  const plan = OLYMPIAD_CONTENTS.find((p) => p.olympiadId === "obmep");
  const prior = generateSchedule(plan, 7, "30 min")[0].sessions[0];
  const record = { [prior.contentKey]: [completed(prior)] };
  const snapshot = JSON.stringify(record);
  const result = buildDatedSchedule(plan, prefs, record, today);
  assert.equal(result.days[0].capacityMinutes, 0);
  assert.equal(result.days[0].plannedMinutes, 0);
  assert.equal(JSON.stringify(record), snapshot);
});
test("links identificam sem colisões todas as sessões dos 28 planos", () => {
  const { getSessionAnchor } = load("src/features/schedule/sessionLinks.ts");
  const anchors = new Set();
  for (const plan of OLYMPIAD_CONTENTS) {
    for (const session of generateSchedule(plan, 3, "30 min").flatMap((d) => d.sessions)) {
      const anchor = getSessionAnchor(session);
      assert.match(anchor, /^study-[a-z0-9-]+$/);
      assert.equal(anchors.has(anchor), false, anchor);
      anchors.add(anchor);
    }
  }
});
