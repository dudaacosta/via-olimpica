/* Testes locais: node tests/tempo-cronograma.cjs
 * Usa o TypeScript ja instalado. Nao instala pacotes, nao altera arquivos.
 * Carrega os mesmos modulos usados pelo aplicativo, nao uma copia do algoritmo.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const vm = require("node:vm");
const { createRequire } = require("node:module");
const root = path.resolve(__dirname, "..");
const projectRequire = createRequire(path.join(root, "package.json"));
const ts = projectRequire("typescript");
const cache = new Map();
function sourceModule(file) {
  file = path.resolve(file);
  if (!path.extname(file)) file += ".ts";
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const result = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    fileName: file,
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
  });
  const resolve = (request) =>
    request.startsWith("@/")
      ? sourceModule(path.join(root, "src", request.slice(2)))
      : request.startsWith(".")
        ? sourceModule(path.resolve(path.dirname(file), request))
        : projectRequire(request);
  const wrapper = new vm.Script(
    "(function(require,module,exports){\n" + result.outputText + "\n})",
    { filename: file },
  );
  wrapper.runInThisContext()(resolve, module, module.exports);
  return module.exports;
}
const time = sourceModule(path.join(root, "src/features/schedule/time.ts"));
const { generateSchedule } = sourceModule(
  path.join(root, "src/features/schedule/generateSchedule.ts"),
);
const { OLYMPIAD_CONTENTS } = sourceModule(path.join(root, "src/data/olimpiadas.ts"));
const quizData = sourceModule(path.join(root, "src/features/quiz/data.ts"));
let pass = 0,
  fail = 0,
  matrixCount = 0;
function test(name, fn) {
  try {
    fn();
    pass++;
  } catch (error) {
    fail++;
    console.error("\nFALHOU: " + name + "\n" + error.stack);
  }
}
function plan(minutes) {
  return {
    olympiadId: "obmep",
    grade: "6ano",
    phases: [
      {
        id: "p",
        name: "Fase",
        areas: [
          {
            id: "area",
            name: "Area",
            contents: minutes.map((m, i) => ({
              id: String.fromCharCode(65 + i),
              title: String.fromCharCode(65 + i),
              description: "Teste",
              estimatedHours: m / 60,
              priority: 1,
              suggestedOrder: i + 1,
              activityType: "Estudo teórico",
              difficulty: "fácil",
            })),
          },
        ],
      },
    ],
  };
}
const compact = (days) =>
  days.map((d) => ({
    week: d.week,
    day: d.dayOfWeek,
    pause: d.isPause,
    sessions: d.sessions.map((s) => [s.contentId, s.sessionMinutes]),
  }));
const study = (week, day, sessions) => ({ week, day, pause: false, sessions });
const pause = (week, day) => ({ week, day, pause: true, sessions: [] });
const scenarios = [
  ["90 minutos inteiros", [90], 3, "1h30", [study(1, 1, [["A", 90]])]],
  [
    "saldo de 30 minutos",
    [60, 90, 90],
    3,
    "3 horas",
    [
      study(1, 1, [
        ["A", 60],
        ["B", 90],
        ["C", 30],
      ]),
      study(1, 2, [["C", 60]]),
    ],
  ],
  [
    "continua e inicia proximo no mesmo dia",
    [90, 60],
    3,
    "1 hora",
    [
      study(1, 1, [["A", 60]]),
      study(1, 2, [
        ["A", 30],
        ["B", 30],
      ]),
      study(1, 3, [["B", 30]]),
    ],
  ],
  [
    "45 minutos",
    [60, 30],
    3,
    "45 min",
    [
      study(1, 1, [["A", 45]]),
      study(1, 2, [
        ["A", 15],
        ["B", 30],
      ]),
    ],
  ],
  [
    "continuacao apos pausas",
    [60, 90],
    3,
    "30 min",
    [
      study(1, 1, [["A", 30]]),
      study(1, 2, [["A", 30]]),
      study(1, 3, [["B", 30]]),
      pause(1, 4),
      pause(1, 5),
      pause(1, 6),
      pause(1, 7),
      study(2, 1, [["B", 30]]),
      study(2, 2, [["B", 30]]),
    ],
  ],
];
const expectedMinutes = [30, 45, 60, 90, 120, 180];
for (const [i, label] of ["30 min", "45 min", "1 hora", "1h30", "2 horas", "3 horas"].entries()) {
  test("conversao " + label, () => assert.equal(time.parseDailyTime(label), expectedMinutes[i]));
}
for (const value of ["1.5h", "1,5h", "1 h 30 min", "1 hora e 30 minutos", "1.5", " 1H30 "]) {
  test("compatibilidade " + value, () => assert.equal(time.parseDailyTime(value), 90));
}
for (const value of [
  null,
  undefined,
  "",
  "abc",
  "0 min",
  "-30 min",
  "1h99",
  "NaN",
  "Infinity",
  "0",
  "1e309h",
]) {
  test("entrada invalida tem padrao 60: " + value, () =>
    assert.equal(time.parseDailyTime(value), 60),
  );
}
test("lista compartilhada: ordem e valores", () => {
  assert.deepEqual(time.DAILY_TIME, ["30 min", "45 min", "1 hora", "1h30", "2 horas", "3 horas"]);
  assert.strictEqual(quizData.DAILY_TIME, time.DAILY_TIME);
  const profile = fs.readFileSync(path.join(root, "src/routes/perfil.tsx"), "utf8");
  assert.ok(profile.includes("DAILY_TIME.map("));
  assert.ok(!profile.includes("const TIME_OPTS"));
});
test("formatacao sem ambiguidades", () => {
  assert.equal(time.formatMinutes(30), "30 min");
  assert.equal(time.formatMinutes(60), "1h");
  assert.equal(time.formatMinutes(90), "1h30");
  assert.equal(time.formatMinutes(180), "3h");
});
test("rotulo antigo normalizado para opcao existente", () => {
  assert.equal(time.normalizeDailyTimeLabel("1.5h"), "1h30");
  assert.equal(time.normalizeDailyTimeLabel("45 min"), "45 min");
  assert.equal(time.normalizeDailyTimeLabel(null), "1 hora");
});
for (const [name, minutes, weekly, daily, expected] of scenarios) {
  test(name, () =>
    assert.deepEqual(compact(generateSchedule(plan(minutes), weekly, daily)), expected),
  );
}
test("partes reais quando comeca no saldo: 30 + 60", () => {
  const sessions = generateSchedule(plan([60, 90, 90]), 3, "3 horas")
    .flatMap((d) => d.sessions)
    .filter((s) => s.contentId === "C");
  assert.deepEqual(
    sessions.map((s) => [s.partIndex, s.partCount, s.sessionMinutes, s.totalContentMinutes]),
    [
      [1, 2, 30, 90],
      [2, 2, 60, 90],
    ],
  );
});
test("conteudo curto pode dividir por saldo minimo", () => {
  const days = generateSchedule(plan([59, 2]), 3, "1 hora");
  assert.deepEqual(compact(days), [
    study(1, 1, [
      ["A", 59],
      ["B", 1],
    ]),
    study(1, 2, [["B", 1]]),
  ]);
});
test("plano vazio nao cria dias nem pausas", () =>
  assert.deepEqual(generateSchedule(plan([]), 3, "1h30"), []));
test("ultimo dia nao inventa minutos ou atividades", () => {
  const days = generateSchedule(plan([10]), 1, "3 horas");
  assert.equal(days.length, 1);
  assert.equal(days[0].plannedMinutes, 10);
});
test("ordem sugerida, prioridade de desempate e estabilidade", () => {
  const p = plan([10, 10, 10]);
  const c = p.phases[0].areas[0].contents;
  c[0].suggestedOrder = 2;
  c[1].suggestedOrder = 1;
  c[2].suggestedOrder = 1;
  c[2].priority = 5;
  assert.deepEqual(
    generateSchedule(p, 3, "1 hora")[0].sessions.map((s) => s.contentId),
    ["C", "B", "A"],
  );
});
test("titulos iguais nao misturam partes", () => {
  const p = plan([90, 90]);
  p.phases[0].areas[0].contents.forEach((c) => (c.title = "Mesmo titulo"));
  const sessions = generateSchedule(p, 3, "1 hora").flatMap((d) => d.sessions);
  assert.deepEqual(
    sessions.map((s) => [s.contentId, s.partIndex, s.partCount]),
    [
      ["A", 1, 2],
      ["A", 2, 2],
      ["B", 1, 2],
      ["B", 2, 2],
    ],
  );
  assert.equal(new Set(sessions.map((s) => s.id)).size, sessions.length);
});
for (const hours of [0, -1, NaN, Infinity])
  test("duracao de conteudo invalida " + hours, () => {
    const p = plan([60]);
    p.phases[0].areas[0].contents[0].estimatedHours = hours;
    assert.throws(() => generateSchedule(p, 3, "1 hora"), /estimativa de tempo/i);
  });
test("sem mutacao da base e determinismo", () => {
  const p = plan([60, 90, 90]),
    before = JSON.stringify(p);
  assert.deepEqual(generateSchedule(p, 3, "3 horas"), generateSchedule(p, 3, "3 horas"));
  assert.equal(JSON.stringify(p), before);
});
test("frequencias invalidas nao travam", () => {
  for (const value of [null, NaN, Infinity, 0, -3, 99, 2.5]) {
    const days = generateSchedule(plan([120]), value, "1 hora");
    assert.equal(
      days.flatMap((d) => d.sessions).reduce((n, s) => n + s.sessionMinutes, 0),
      120,
    );
  }
});
for (const p of OLYMPIAD_CONTENTS)
  for (const [i, daily] of time.DAILY_TIME.entries())
    for (let weekly = 1; weekly <= 6; weekly++) {
      test(p.olympiadId + " " + p.grade + " / " + daily + " / " + weekly + " dias", () => {
        matrixCount++;
        const cap = expectedMinutes[i];
        const days = generateSchedule(p, weekly, daily);
        const sessions = days.flatMap((d) => d.sessions);
        const original = p.phases
          .flatMap((phase) => phase.areas.flatMap((area) => area.contents))
          .slice()
          .sort((a, b) => a.suggestedOrder - b.suggestedOrder || b.priority - a.priority);
        assert.equal(new Set(sessions.map((s) => s.id)).size, sessions.length);
        const orderedIDs = [];
        const perContent = new Map();
        for (const s of sessions) {
          if (orderedIDs.at(-1) !== s.contentId) orderedIDs.push(s.contentId);
          if (!perContent.has(s.contentId)) perContent.set(s.contentId, []);
          perContent.get(s.contentId).push(s);
          assert.ok(Number.isInteger(s.sessionMinutes) && s.sessionMinutes > 0);
          assert.equal(s.endMinute - s.startMinute, s.sessionMinutes);
        }
        assert.deepEqual(
          orderedIDs,
          original.map((c) => c.id),
        );
        for (const c of original) {
          const parts = perContent.get(c.id);
          assert.ok(parts);
          assert.equal(
            parts.reduce((n, s) => n + s.sessionMinutes, 0),
            Math.round(c.estimatedHours * 60),
          );
          let cursor = 0;
          parts.forEach((s, k) => {
            assert.equal(s.partIndex, k + 1);
            assert.equal(s.partCount, parts.length);
            assert.equal(s.startMinute, cursor);
            cursor = s.endMinute;
            assert.equal(s.totalContentMinutes, Math.round(c.estimatedHours * 60));
          });
        }
        days.forEach((d, k) => {
          assert.equal(d.week, Math.floor(k / 7) + 1);
          assert.equal(d.dayOfWeek, (k % 7) + 1);
          assert.equal(d.isPause, d.dayOfWeek > weekly);
          assert.equal(
            d.plannedMinutes,
            d.sessions.reduce((n, s) => n + s.sessionMinutes, 0),
          );
          if (d.isPause) {
            assert.equal(d.plannedMinutes, 0);
            assert.equal(d.sessions.length, 0);
          } else {
            assert.ok(d.plannedMinutes <= cap);
            if (k < days.length - 1) assert.equal(d.plannedMinutes, cap);
          }
        });
        assert.ok(!days.at(-1)?.isPause);
      });
    }
console.log("\nTestes de tempo/cronograma: " + pass + " aprovados; " + fail + " falhas.");
console.log(
  "Combinações reais verificadas: " +
    matrixCount +
    " (" +
    OLYMPIAD_CONTENTS.length +
    " planos x 6 horários x 6 frequências).",
);
console.log("Escopo: calculos e contratos dos modulos. Nao substitui testes visuais no navegador.");
process.exitCode = fail ? 1 : 0;
