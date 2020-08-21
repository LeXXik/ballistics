const loader = require("@assemblyscript/loader");

const wasmInstantiate = (wasmModuleUrl, importObject = {}) => (
    loader.instantiate(fetch(wasmModuleUrl), importObject || {})
);

(async () => {
    const app = pc.Application.getApplication();
    const wasm = app.assets.find('ballistics.wasm');
    const { exports: lib } = await wasmInstantiate(wasm.getFileUrl());
    const inputPtr = lib.getInputBufferPtr();
    const outputPtr = lib.getOutputBufferPtr();
    const inputOffset = lib.INPUT_BUFFER_OFFSET.valueOf();
    const outputOffset = lib.OUTPUT_BUFFER_OFFSET.valueOf();
    const input = lib.__getArrayView(inputPtr);
    window.Ballistics = {
        range(speed, initialHeight, gravity) {
            if (!gravity) gravity = -app.systems.rigidbody.gravity.y;
            if (speed <= 0 || !Number.isFinite(gravity) || !Number.isFinite(initialHeight)) {
                // #ifdef DEBUG
                console.warn(`Ballistics: invalid attribute when calling .range(speed, initialHeight, [gravity])\nspeed:\t\t\t${speed}\ninitialHeight:\t${initialHeight}\ngravity:\t\t${gravity}`);
                // #endif
                return null;
            }

            let offset = inputOffset;
            input[offset++] = speed;
            input[offset++] = gravity;
            input[offset++] = initialHeight;
            const valid = lib.range();
            if (valid > 0) {
                offset = outputOffset;
                return lib.__getFloat64Array(outputPtr)[offset];
            }

            return null;
        },
        solveStatic: function(from, target, speed, gravity) {
            if (!gravity) gravity = -app.systems.rigidbody.gravity.y;
            if (speed <= 0 || !(from instanceof pc.Vec3) || !(target instanceof pc.Vec3)) {
                // #ifdef DEBUG
                console.warn(`Ballistics: invalid attribute when calling .solveStatic(from, target, speed, [gravity])\nspeed:\t\t\t${speed}\nfrom:\t\t\t${from}\ntarget:\t\t\t${target}\ngravity:\t\t${gravity}`);
                // #endif
                return null;
            }

            let offset = inputOffset;
            input[offset++] = from.x;
            input[offset++] = from.y;
            input[offset++] = from.z;
            input[offset++] = speed;
            input[offset++] = target.x;
            input[offset++] = target.y;
            input[offset++] = target.z;
            input[offset++] = gravity;
            const solutions = lib.solveArcStatic();
            if (solutions > 0) {
                offset = outputOffset;
                const output = lib.__getFloat64Array(outputPtr);
                const lx = output[offset++];
                const ly = output[offset++];
                const lz = output[offset++];
                const hx = output[offset++];
                const hy = output[offset++];
                const hz = output[offset++];
                return {
                    lowAngle: new pc.Vec3(lx, ly, lz),
                    highAngle: new pc.Vec3(hx, hy, hz)
                };
            }

            return null;
        },
        solveMoving: function(from, target, speed, velocity, gravity) {
            if (!gravity) gravity = -app.systems.rigidbody.gravity.y;
            if (speed <= 0 || !(from instanceof pc.Vec3) || !(target instanceof pc.Vec3) || !(velocity instanceof pc.Vec3)) {
                // #ifdef DEBUG
                console.warn(`Ballistics: invalid attribute when calling .solveMoving(from, target, speed, velocity, [gravity])\nspeed:\t\t\t${speed}\nfrom:\t\t\t${from}\nvelocity:\t\t${velocity}\ntarget:\t${target}\ngravity:\t\t${gravity}`);
                // #endif
                return null;
            }

            let offset = inputOffset;
            input[offset++] = from.x;
            input[offset++] = from.y;
            input[offset++] = from.z;
            input[offset++] = speed;
            input[offset++] = target.x;
            input[offset++] = target.y;
            input[offset++] = target.z;
            input[offset++] = velocity.x;
            input[offset++] = velocity.y;
            input[offset++] = velocity.z;
            input[offset++] = gravity;

            const s = lib.solveArcMoving();
            if (s > 0) {
                offset = outputOffset;
                const output = lib.__getFloat64Array(outputPtr);
                const s1x = output[offset++];
                const s1y = output[offset++];
                const s1z = output[offset++];
                const s2x = output[offset++];
                const s2y = output[offset++];
                const s2z = output[offset++];
                const s3x = output[offset++];
                const s3y = output[offset++];
                const s3z = output[offset++];
                const s4x = output[offset++];
                const s4y = output[offset++];
                const s4z = output[offset++];
                return {
                    lowAngle: s > 0 ? new pc.Vec3(s1x, s1y, s1z) : null,
                    highAngle: s > 1 ? new pc.Vec3(s2x, s2y, s2z) : null,
                    s3: s > 2 ? new pc.Vec3(s3x, s3y, s3z) : null,
                    s4: s > 3 ? new pc.Vec3(s4x, s4y, s4z) : null
                };
            }

            return null;
        },
        solveLateralStatic: function(from, target, speed, height) {
            if (speed <= 0 || height <= 0 || !(from instanceof pc.Vec3) || !(target instanceof pc.Vec3)) {
                // #ifdef DEBUG
                console.warn(`Ballistics: invalid attribute when calling .solveLateralStatic(from, target, speed, height)\nspeed:\t\t${speed}\nheight:\t\t${height}\nfrom:\t\t${from}\ntarget:\t\t${target}`);
                // #endif
                return null;
            }

            let offset = inputOffset;
            input[offset++] = from.x;
            input[offset++] = from.y;
            input[offset++] = from.z;
            input[offset++] = target.x;
            input[offset++] = target.y;
            input[offset++] = target.z;
            input[offset++] = speed;
            input[offset++] = height;
            const s = lib.solveLateralStatic();
            if (s > 0) {
                offset = outputOffset;
                const output = lib.__getFloat64Array(outputPtr);
                const x = output[offset++];
                const y = output[offset++];
                const z = output[offset++];
                const g = output[offset++];
                const f = app.systems.rigidbody.gravity.y + g;
                return {
                    velocity: new pc.Vec3(x, y, z),
                    force: new pc.Vec3(0, -f, 0),
                    gravity: g
                }
            }
            return null;
        },
        solveLateralMoving: function(from, target, speed, velocity, height) {
            if (speed <= 0 || height <= 0 || !(from instanceof pc.Vec3) || !(target instanceof pc.Vec3) || !(velocity instanceof pc.Vec3)) {
                // #ifdef DEBUG
                console.warn(`Ballistics: invalid attribute when calling .solveLateralMoving(from, target, speed, velocity, height)\nspeed:\t\t${speed}\nheight:\t\t${height}\nfrom:\t\t${from}\ntarget:\t\t${target}\nvelocity:\t${velocity}`);
                // #endif
                return null;
            }

            let offset = inputOffset;
            input[offset++] = from.x;
            input[offset++] = from.y;
            input[offset++] = from.z;
            input[offset++] = target.x;
            input[offset++] = target.y;
            input[offset++] = target.z;
            input[offset++] = speed;
            input[offset++] = velocity.x;
            input[offset++] = velocity.y;
            input[offset++] = velocity.z;
            input[offset++] = height;
            const s = lib.solveLateralMoving();
            if (s > 0) {
                offset = outputOffset;
                const output = lib.__getFloat64Array(outputPtr);
                const vx = output[offset++];
                const vy = output[offset++];
                const vz = output[offset++];
                const hx = output[offset++];
                const hy = output[offset++];
                const hz = output[offset++];
                const g  = output[offset++];
                const f  = app.systems.rigidbody.gravity.y + g;
                return {
                    velocity: new pc.Vec3(vx, vy, vz),
                    hit: new pc.Vec3(hx, hy, hz),
                    force: new pc.Vec3(0, -f, 0),
                    gravity: g
                }
            }

            return null;
        }
    }


    // #ifdef DEBUG
    console.info('Ballistics v1.1');
    // #endif
    app.fire('ballistics:ready');
})();
