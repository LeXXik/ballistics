const assert = require("assert");
const ballistics = require("..");
const { __release, __getArray, __getArrayView } = require("..");
const { isDeepStrictEqual } = require("util");
const { clear } = require("console");

const js = require("./test.js"); // for WASM vs JS test

console.log('Ballistics');

// -------------- SETUP ------------------------
const inputPtr = ballistics.getInputBufferPtr();
const outputPtr = ballistics.getOutputBufferPtr();
const inputOffset = ballistics.INPUT_BUFFER_OFFSET.valueOf();
const input = __getArrayView(inputPtr);
const output = __getArrayView(outputPtr);

let start = 0;
let end = 0;

// ------------- .SolveQuadric() ---------------
{
    // a*x^2 + b*x + c
    console.log(`  .SolveQuadric()`);
    start = Date.now();

    // Two solutions
    // https://www.wolframalpha.com/input/?i=1*x%5E2+%2B+6*x+%2B+5
    clearBuffers();

    input[0] = 1;
    input[1] = 6;
    input[2] = 5;

    let s = ballistics.SolveQuadric();

    assert(s === 2);
    assert(isEqual(output[0], -1));
    assert(isEqual(output[1], -5));

    // One solution
    // https://www.wolframalpha.com/input/?i=1*x%5E2+-+6*x+%2B+9
    clearBuffers();

    input[0] = 1;
    input[1] = -6;
    input[2] = 9;

    s = ballistics.SolveQuadric();
    assert(s === 1);
    assert(isEqual(output[0], 3));

    // No solution
    // https://www.wolframalpha.com/input/?i=1*x%5E2+-+3*x+%2B+10
    clearBuffers();

    input[0] = 1;
    input[1] = -3;
    input[2] = 10;
    
    s = ballistics.SolveQuadric();
    
    assert(s === 0);

    clearBuffers();

    end = Date.now();
    console.log(`\ttime\t\t${end-start} ms`);
}

// ------------- .SolveCubic() ---------------
{
    // ax^3 + b*x^2 + c*x + d
    console.log(`  .SolveCubic()`);
    start = Date.now();

    // Three solutions
    // https://www.wolframalpha.com/input/?i=1*x%5E3+%2B+4*x%5E2+-+4*x+-+16
    clearBuffers();

    input[0] = 1;
    input[1] = 4;
    input[2] = -4;
    input[3] = -16;


    let s = ballistics.SolveCubic();
    assert(s === 3);

    assert(isEqual(output[0], 2));
    assert(isEqual(output[1], -2));
    assert(isEqual(output[2], -4));

    // Two solutions
    // https://www.wolframalpha.com/input/?i=1*x%5E3+-+5*x%5E2+%2B+8*x+-+4
    clearBuffers();

    input[0] = 1;
    input[1] = -5;
    input[2] = 8;
    input[3] = -4;

    s = ballistics.SolveCubic();
    assert(s === 2);
    assert(isEqual(output[0], 1));
    assert(isEqual(output[1], 2));

    // One solution
    // https://www.wolframalpha.com/input/?i=1*x%5E3+%2B+3*x%5E2+%2B+3*x+%2B+1
    clearBuffers();

    input[0] = 1;
    input[1] = 3;
    input[2] = 3;
    input[3] = 1;

    s = ballistics.SolveCubic();

    assert(s === 1);
    assert(isEqual(output[0], -1));

    clearBuffers();

    end = Date.now();
    console.log(`\ttime\t\t${end-start} ms`);
}

// ------------- .SolveQuartic() ---------------
{
    // ax^4 + bx^3 + c*x^2 + d*x + e
    console.log(`  .SolveQuartic()`);
    start = Date.now();

    // Four solutions
    // https://www.wolframalpha.com/input/?i=1*x%5E4+-+4*x%5E3+-+2*x%5E2+%2B+12*x+-+3
    clearBuffers();

    input[0] = 1;
    input[1] = -4;
    input[2] = -2;
    input[3] = 12;
    input[4] = -3

    let s = ballistics.SolveQuartic();
    assert(s === 4);
    assert(isEqual(output[0], 0.2679));
    assert(isEqual(output[1], -1.7320));
    assert(isEqual(output[2], 3.7320));
    assert(isEqual(output[3], 1.7320));

    // Two solutions:
    // https://www.wolframalpha.com/input/?i=3*x%5E4+-+20*x%5E3+%2B+42*x%5E2+-+36*x+-+20
    clearBuffers();

    input[0] = 3;
    input[1] = -20;
    input[2] = 42;
    input[3] = -36;
    input[4] = -20;

    s = ballistics.SolveQuartic();
    assert(s === 2);
    assert(isEqual(output[0], 4.0359));
    assert(isEqual(output[1], -0.3681));

    clearBuffers();

    end = Date.now();
    console.log(`\ttime\t\t${end-start} ms`);
}

// -------------- .range() ---------------------
{
    console.log(`  .range()`);
    start = Date.now();
    let offset = inputOffset;

    // speed
    input[offset++] = 10;

    // gravity
    input[offset++] = 9.8;

    // initial height
    input[offset++] = 3;

    const range = ballistics.range(1, 2, 5);
    assert(range > 0);

    end = Date.now();
    console.log(`\ttime\t\t${end-start} ms`);
}

// ---------- .solveArcStatic() ----------------
{
    console.log(`  .solveArcStatic()`);
    start = Date.now();
    let offset = inputOffset;
    // from
    input[offset++] = 1;
    input[offset++] = 2;
    input[offset++] = 3;
    // speed
    input[offset++] = 10;
    // target
    input[offset++] = 6;
    input[offset++] = 0;
    input[offset++] = 6;
    // gravity
    input[offset++] = 9.8;

    const solutions = ballistics.solveArcStatic();
    console.log(`\tsolutions:\t${solutions}`);
    assert(solutions > 0);

    end = Date.now();
    console.log(`\ttime\t\t${(end-start)} ms`);
}

// ---------- .solveArcMoving() ----------------
{
    console.log(`  .solveArcMoving()`);
    start = Date.now();
    let offset = inputOffset;
    // from
    input[offset++] = -3.240579843521118;
    input[offset++] = 0.5;
    input[offset++] = 3.4063897132873535;
    // speed
    input[offset++] = 5;
    // to
    input[offset++] = 4.158546447753906;
    input[offset++] = 0.5;
    input[offset++] = -15.288656234741211;
    // target velocity
    input[offset++] = 0;
    input[offset++] = 0;
    input[offset++] = 3.0039165355880644;
    // gravity
    input[offset++] = 9.8;

    const solutions = ballistics.solveArcMoving();
    console.log(`\tsolutions:\t${solutions}`);
    assert(solutions > 0);

    end = Date.now();
    console.log(`\ttime\t\t${(end-start)} ms`);
}

// ---------- .solveLateralStatic() ------------
{
    console.log(`  .solveLateralStatic()`);
    start = Date.now();
    let offset = inputOffset;
    // from
    input[offset++] = 1;
    input[offset++] = 2;
    input[offset++] = 1;
    // to
    input[offset++] = 4;
    input[offset++] = 0;
    input[offset++] = 7;
    // speed
    input[offset++] = 10;
    // height
    input[offset++] = 5;

    const solutions = ballistics.solveLateralStatic();
    console.log(`\tsolutions:\t${solutions}`);
    assert(solutions > 0);

    end = Date.now();
    console.log(`\ttime\t\t${end-start} ms`);
}

// ---------- .solveLateralMoving() ------------
{
    console.log(`  .solveLateralMoving()`);
    start = Date.now();
    let offset = inputOffset;

    // from
    input[offset++] = 1;
    input[offset++] = 2;
    input[offset++] = 1;

    // target
    input[offset++] = 8;
    input[offset++] = 1;
    input[offset++] = 7;

    // speed
    input[offset++] = 10;

    // target_velocity
    input[offset++] = 1;
    input[offset++] = 1;
    input[offset++] = 1;

    // max height offset
    input[offset++] = 10;

    const solutions = ballistics.solveLateralMoving();
    console.log(`\tsolutions:\t${solutions}`);
    assert(solutions > 0);

    end = Date.now();
    console.log(`\ttime\t\t${end-start} ms`);
}

// ---------- WASM vs JS .solveLateralMoving() ------------
{
    console.log(`  WASM vs JS .solveLateralMoving()`);
    let sum = BigInt(0);
    let wasmTime = BigInt(0);
    let jsTime = BigInt(0);

    // WASM
    offset = inputOffset;
    input[offset++] = 1;
    input[offset++] = 2;
    input[offset++] = 1;
    input[offset++] = 8;
    input[offset++] = 1;
    input[offset++] = 7;
    input[offset++] = 10;
    input[offset++] = 1;
    input[offset++] = 1;
    input[offset++] = 1;
    input[offset++] = 10;
    start = process.hrtime.bigint();
    ballistics.solveLateralMoving();
    end = process.hrtime.bigint();
    wasmTime = end - start;

    // JS
    start = process.hrtime.bigint();
    offset = inputOffset;
    js.input[offset++] = 1;
    js.input[offset++] = 2;
    js.input[offset++] = 1;
    js.input[offset++] = 8;
    js.input[offset++] = 1;
    js.input[offset++] = 7;
    js.input[offset++] = 10;
    js.input[offset++] = 1;
    js.input[offset++] = 1;
    js.input[offset++] = 1;
    js.input[offset++] = 10;
    js.solveLateralMoving();
    end = process.hrtime.bigint();
    jsTime = end - start;

    console.log(`\tWASM time\t${wasmTime} ns`);
    console.log(`\tJS time\t\t${jsTime} ns`);
}



__release(inputPtr);
__release(outputPtr);

console.log("all ok\n");

function isEqual(a, b) {
    // close enough is good enough
    const d = a - b;
    return 0.0001 > Math.abs(d);
}

function clearBuffers() {
    input.fill(0);
    output.fill(0);
}
