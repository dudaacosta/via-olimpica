const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '../..');
const cache = new Map();
function load(file) {
  file = path.resolve(root, file);
  if (!path.extname(file)) file += '.ts';
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  cache.set(file, module);
  const resolve = request => request.startsWith('@/') ? load(path.join(root, 'src', request.slice(2)))
    : request.startsWith('.') ? load(path.resolve(path.dirname(file), request)) : require(request);
  new vm.Script('(function(require,module,exports){' + output + '\n})', { filename: file })
    .runInThisContext()(resolve, module, module.exports);
  return module.exports;
}
module.exports = { load };
