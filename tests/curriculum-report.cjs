"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { createRequire } = require("node:module");
const root = path.resolve(__dirname, "..");
const projectRequire = createRequire(path.join(root, "package.json"));
const ts = projectRequire("typescript");
const cache = new Map();
function resolveSource(request, parentFile) {
  let candidate;
  if (request.startsWith("@/")) candidate = path.join(root, "src", request.slice(2));
  else if (request.startsWith(".")) candidate = path.resolve(path.dirname(parentFile), request);
  else return null;
  const attempts = [
    candidate,
    `${candidate}.ts`,
    `${candidate}.tsx`,
    path.join(candidate, "index.ts"),
    path.join(candidate, "index.tsx"),
  ];
  return attempts.find((file) => fs.existsSync(file)) ?? candidate;
}
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const out = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    fileName: file,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText;
  const localRequire = (request) => {
    const source = resolveSource(request, file);
    return source ? load(source) : projectRequire(request);
  };
  new vm.Script(`(function(require,module,exports){${out}\n})`, {
    filename: file,
  }).runInThisContext()(localRequire, module, module.exports);
  return module.exports;
}
const registry = load(path.join(root, "src/data/curriculum/registry.ts"));
const quiz = load(path.join(root, "src/features/quiz/data.ts"));
const plans = load(path.join(root, "src/data/olimpiadas.ts")).OLYMPIAD_CONTENTS;
const expectedIds = ["canguru", "olitef", "oba"];
assert.deepEqual(
  registry.CURRICULA.map((item) => item.olympiadId),
  expectedIds,
);
assert.deepEqual(
  registry.validateRegisteredCurricula(),
  expectedIds.map((olympiadId) => ({ olympiadId, errors: [] })),
);
assert.deepEqual(
  quiz.OLYMPIADS.map((item) => item.id),
  ["obmep", "canguru", "olitef", "oba"],
);
assert.ok(quiz.OLYMPIADS.every((item) => item.availability === "available"));
assert.equal(plans.length, 28);
for (const id of ["obmep", ...expectedIds])
  assert.equal(plans.filter((plan) => plan.olympiadId === id).length, 7, id);
const summary = registry.CURRICULA.map((curriculum) => ({
  olympiadId: curriculum.olympiadId,
  levels: curriculum.levels.length,
  activeLevels: curriculum.levels.filter((level) => level.active).length,
  areas: curriculum.areas.length,
  contents: curriculum.contents.length,
  contentLevelAssociations: curriculum.contents.reduce(
    (sum, item) => sum + item.adaptations.length,
    0,
  ),
  officialTopics: curriculum.officialTopicIds.length,
  sources: new Set(curriculum.contents.flatMap((item) => item.sources.map((source) => source.id)))
    .size,
  updateRequired: curriculum.contents.filter((item) => item.requiresUpdate).length,
  validationErrors: 0,
}));
console.log(
  JSON.stringify({ olympiads: 4, generatedPlans: plans.length, curricula: summary }, null, 2),
);
console.log("\nRelatório curricular: validação concluída sem lacunas bloqueadoras.");
