const { src, dest, series, parallel } = require('gulp');
const del = require('del');
const rollup = require("rollup");
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const terser = require('rollup-plugin-terser').terser;

function clean(cb) {
    del.sync(['dist/**', '!dist']);
    cb();
}

function compile(cb) {
    const asc = require('assemblyscript/bin/asc');
    asc.main([
        "index.ts",
        "--baseDir", "assembly",
        "-b", "../dist/assembly/ballistics.wasm",
        "-t", "../dist/assembly/ballistics.wat",
        "-j", "../dist/assembly/ballistics.asc.js",
        "-O3z", "--converge", "--noAssert",
        "--runtime", "full",
        "--sourceMap"
    ], cb);
}

const prod = true;
function bundle(cb) {
    rollup.rollup({
        input: 'ballistics.js',
        plugins: [resolve(), commonjs(), prod && terser()]
    }).then(bundle => {
        return bundle.write({
          file: 'dist/pc-ballistics/ballistics.min.js',
          format: 'iife',
          name: 'ballistics',
          sourcemap: false
        });
    }).then(result => {
        console.log(result);
        cb();
    });
}

function copyWasm(cb) {
    src('dist/assembly/ballistics.wasm')
    .pipe(dest('dist/pc-ballistics'));
    cb();
}
 
exports.build = series(clean, compile, parallel(bundle, copyWasm));
exports.default = series(clean, compile, parallel(bundle, copyWasm));