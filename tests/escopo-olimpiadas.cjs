"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { createRequire } = require("node:module");
const root = path.resolve(__dirname, "..");
const projectRequire = createRequire(path.join(root, "package.json"));
let ts;
try {
  ts = projectRequire("typescript");
} catch {
  ts = require("typescript");
}
function loadData() {
  const filename = path.join(root, "src/features/quiz/data.ts");
  const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    filename,
  }).outputText;
  const module = { exports: {} };
  const sandbox = {
    module,
    exports: module.exports,
    require(id) {
      if (id === "@/features/schedule/time")
        return { DAILY_TIME: ["30 min", "45 min", "1 hora", "1h30", "2 horas", "3 horas"] };
      throw new Error(`Import inesperado: ${id}`);
    },
  };
  vm.runInNewContext(compiled, sandbox, { filename });
  return module.exports;
}
const data = loadData();
assert.deepEqual(
  Array.from(data.OLYMPIADS, (item) => item.id),
  ["obmep", "canguru", "olitef", "oba"],
);
assert.equal(data.isOlympiadAvailableId("obmep"), true);
assert.equal(data.isOlympiadAvailableId("canguru"), true);
assert.equal(data.isOlympiadAvailableId("olitef"), true);
assert.equal(data.isOlympiadAvailableId("oba"), true);
assert.deepEqual(
  Array.from(data.availableOlympiadsForGrade("6ano"), (item) => item.id),
  ["obmep", "canguru", "olitef", "oba"],
);
assert.equal(data.normalizeOlympiadSelection("canguru"), "canguru");
assert.equal(data.normalizeOlympiadSelection("olitef"), "olitef");
assert.equal(data.normalizeOlympiadSelection("oba"), "oba");
assert.equal(data.normalizeOlympiadSelection("obi"), "obmep");
for (const item of data.OLYMPIADS) assert.match(item.registrationNote, /escola|professor/i);
const details = fs.readFileSync(path.join(root, "src/routes/obmep-detalhes.tsx"), "utf8");
assert.match(details, /getOlympiadDetails/);
assert.match(details, /toggleFavorite\(olympiad\.id\)/);
const catalogue = fs.readFileSync(path.join(root, "src/routes/olimpiadas.tsx"), "utf8");
assert.match(catalogue, /search=\{\{ id: o\.id \}\}/);
console.log("Escopo final de olimpíadas: todos os testes passaram.");
