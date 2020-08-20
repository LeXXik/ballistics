const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = {};
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/dist/assembly/ballistics.wasm"), imports);
module.exports = wasmModule.exports;