const INPUT_BUFFER_SIZE: u8 = 20;
const OUTPUT_BUFFER_SIZE: u8 = 20;

export const INPUT_BUFFER_OFFSET: u8 = 5;
export const OUTPUT_BUFFER_OFFSET: u8 = 6;

const input = new Float64Array(INPUT_BUFFER_SIZE);
const output = new Float64Array(OUTPUT_BUFFER_SIZE);

// Pass input buffer pointer to javascript
export function getInputBufferPtr(): Float64Array {
    return input;
}

// Pass output buffer pointer to javascript
export function getOutputBufferPtr(): Float64Array {
    return output;
}

// Utility function used by SolveQuadratic, SolveCubic, and SolveQuartic
function IsZero(d: f64): boolean {
    const eps: f64 = 1e-9;
    return d > -eps && d < eps;
}

/* normal form: a^2 + bx + c = 0 */
// Returns number of solutions.
export function SolveQuadric(index1: u8 = 0, index2: u8 = 1): u8 {
    const a = input[0];
    const b = input[1];
    const c = input[2];
    const D = b * b - 4 * a * c;

    if (IsZero(D)) {
        output[index1] = -b / (2 * a);
        return 1;
    } else if (D < 0) {
        return 0;
    } else  { /* if (D > 0) */
        output[index1] = (-b + Math.sqrt(D)) / (2 * a);
        output[index2] = (-b - Math.sqrt(D)) / (2 * a);
        return 2;
    }
}

// Solve cubic equation: c0*x^3 + c1*x^2 + c2*x + c3. 
// Returns number of solutions.
export function SolveCubic(): u8 {
    let i: u8;
    let num: u8;
    let sub: f64;
    let A: f64;
    let B: f64;
    let C: f64;
    let sq_A: f64;
    let p: f64;
    let q: f64;
    let cb_p: f64;
    let D: f64;
    
    // normal form: x^3 + Ax^2 + Bx + C = 0

    A = input[1] / input[0];
    B = input[2] / input[0];
    C = input[3] / input[0];

    // substitute x = y - A/3 to eliminate quadric term:
	// x^3 +px + q = 0
    
    sq_A = A * A;
    p = 1.0/3 * (-1.0/3 * sq_A + B);
    q = 1.0/2 * (2.0/27 * A * sq_A - 1.0/3 * A * B + C);

    // use Cardano's formula

    cb_p = p * p * p;
    D = q * q + cb_p;

    if (IsZero(D)) {
	    if (IsZero(q)) {  // one triple solution
            output[0] = 0;
            num = 1;
	    } else {  // one single and one double solution
            const u: f64 = Math.cbrt(-q);
            output[0] = 2 * u;
            output[1] = -u;
	        num = 2;
        }
    } else if (D < 0) {  // Casus irreducibilis: three real solutions
	    const phi: f64 = 1.0/3 * Math.acos(-q / Math.sqrt(-cb_p));
        const t: f64 = 2 * Math.sqrt(-p);
        output[0] = t * Math.cos(phi);
        output[1] = -t * Math.cos(phi + Math.PI / 3);
        output[2] = -t * Math.cos(phi - Math.PI / 3);
        num = 3;
    } else {  // one real solution
	    const sqrt_D: f64 = Math.sqrt(D);
        const u: f64 = Math.cbrt(sqrt_D - q);
        const v: f64 = -Math.cbrt(sqrt_D + q);
        output[0] = u + v;
	    num = 1;
    }

    /* resubstitute */

    sub = 1.0/3 * A;

    if (num > 0) output[0] -= sub;
    if (num > 1) output[1] -= sub;
    if (num > 2) output[2] -= sub;

    return num;
}

// Solve quartic function: c0*x^4 + c1*x^3 + c2*x^2 + c3*x + c4. 
// Returns number of solutions.
export function SolveQuartic(): u8 {
    let z: f64;
    let u: f64;
    let v: f64;
    let sub: f64;
    let A: f64;
    let B: f64;
    let C: f64;
    let D: f64;
    let sq_A: f64;
    let p: f64;
    let q: f64;
    let r: f64;
    let num: u8;

    // normal form: x^4 + Ax^3 + Bx^2 + Cx + D = 0

    A = input[1] / input[0];
    B = input[2] / input[0];
    C = input[3] / input[0];
    D = input[4] / input[0];

    // substitute x = y - A/4 to eliminate cubic term:
	// x^4 + px^2 + qx + r = 0

    sq_A = A * A;
    p = -3.0/8 * sq_A + B;
    q = 1.0/8 * sq_A * A - 1.0/2 * A * B + C;
    r = -3.0/256 * sq_A * sq_A + 1.0/16 * sq_A * B - 1.0/4 * A * C + D;

    if (IsZero(r)) {
        // no absolute term: y(y^3 + py + q) = 0
        
        output[3] = q;
        output[2] = p;
        output[1] = 0;
        output[0] = 1;

        num = SolveCubic();
    } else {
	    // solve the resolvent cubic ...

        input[3] = 1.0/2 * r * p - 1.0/8 * q * q;
        input[2] = -r;
        input[1] = -1.0/2 * p;
        input[0] = 1;

        SolveCubic();

	    // ... and take the one real solution ...

        z = output[0];

	    // ... to build two quadric equations

        u = z * z - r;
        v = 2 * z - p;

        if (IsZero(u))
            u = 0;
        else if (u > 0)
            u = Math.sqrt(u);
        else
            return 0;

        if (IsZero(v))
            v = 0;
        else if (v > 0)
            v = Math.sqrt(v);
        else
            return 0;
        
        input[2] = z - u;
        input[1] = q < 0 ? -v : v;
        input[0] = 1;

        num = SolveQuadric();
        
        input[2] = z + u;
        input[1] = q < 0 ? v : -v;
        input[0] = 1;

        if (num == 0) num += SolveQuadric();
        if (num == 1) num += SolveQuadric(1, 2);
        if (num == 2) num += SolveQuadric(2, 3);
    }

    /* resubstitute */
    sub = 1.0/4 * A;

    if (num > 0) output[0] -= sub;
    if (num > 1) output[1] -= sub;
    if (num > 2) output[2] -= sub;
    if (num > 3) output[3] -= sub;

    return num;
}

// Calculate the maximum range that a ballistic projectile can be fired on given speed and gravity.
//
//   input buffer at INPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   projectile speed                                |
//  |------------------------------------------------------------------|
//  | [  1 ]:  <f64>   force of gravity, positive is down              |
//  |------------------------------------------------------------------|
//  | [  2 ]:  <f64>   distance above flat terrain                     |
//  |------------------------------------------------------------------|
//
//   output buffer at OUTPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   maximum range                                   |
//  |------------------------------------------------------------------|
// 
// returns <u8> 1 if range is larger than 0, otherwise returns 0
export function range(): u8 {
    // prepare clan output
    output.fill(0);

    let inOffset: u8 = INPUT_BUFFER_OFFSET;
    let outOffset: u8 = OUTPUT_BUFFER_OFFSET;

    // speed
    const s: f64 = input[inOffset++];

    // gravity
    const g: f64 = input[inOffset++];

    // initial_height
    const h: f64 = input[inOffset++];

    // Derivation
    //   (1) x = speed * time * cos O
    //   (2) y = initialHeight + (speed * time * sin O) - (.5 * gravity*time*time)
    //   (3) via quadratic: t = (speed*sin O)/gravity + sqrt(speed*speed*sin O + 2*gravity*initialHeight)/gravity    [ignore smaller root]
    //   (4) solution: range = x = (speed*cos O)/gravity * sqrt(speed*speed*sin O + 2*gravity*initialHeight)    [plug t back into x=speed*time*cos O]
    const angle: f64 = 45 * (Math.PI * 2) / 360; // no air resistence, so 45 degrees provides maximum range
    const cos: f64 = Math.cos(angle);
    const sin: f64 = Math.sin(angle);

    output[outOffset] = (s*cos/g) * (s*sin + Math.sqrt(s*s*sin*sin + 2*g*h));

    // clean up
    input.fill(0);

    if (output[outOffset] > 0)
        return 1;

    return 0;
}

// Solve firing angles for a ballistic projectile with speed and gravity to hit a fixed position.
// 
//   input buffer at INPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                               |
//  | [  1 ]:  <f64>   Y of a point that projectile will fire from     |
//  | [  2 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <f64>   scalar speed of projectile                      |
//  |------------------------------------------------------------------|
//  | [  4 ]:  <f64>   X                                               |
//  | [  5 ]:  <f64>   Y of a point that projectile is trying to hit   |
//  | [  6 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  7 ]:  <f64>   force of gravity, positive down                 |
//  -------------------------------------------------------------------|
// 
//   output buffer at OUTPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                               |
//  | [  1 ]:  <f64>   Y firing solution (low angle)                   |
//  | [  2 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <f64>   X                                               |
//  | [  4 ]:  <f64>   Y firing solution (high angle)                  |
//  | [  5 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//
// returns <u8> number of unique solutions found: 0, 1, or 2.
export function solveArcStatic(): u8 {
    // prepare clean output
    output.fill(0);

    let inOffset: u8 = INPUT_BUFFER_OFFSET;
    let outOffset: u8 = OUTPUT_BUFFER_OFFSET;

    // Derivation
    //   (1) x = v*t*cos O
    //   (2) y = v*t*sin O - .5*g*t^2
    // 
    //   (3) t = x/(cos O*v)                                        [solve t from (1)]
    //   (4) y = v*x*sin O/(cos O * v) - .5*g*x^2/(cos^2 O*v^2)     [plug t into y=...]
    //   (5) y = x*tan O - g*x^2/(2*v^2*cos^2 O)                    [reduce; cos/sin = tan]
    //   (6) y = x*tan O - (g*x^2/(2*v^2))*(1+tan^2 O)              [reduce; 1+tan O = 1/cos^2 O]
    //   (7) 0 = ((-g*x^2)/(2*v^2))*tan^2 O + x*tan O - (g*x^2)/(2*v^2) - y    [re-arrange]
    //   Quadratic! a*p^2 + b*p + c where p = tan O
    //
    //   (8) let gxv = -g*x*x/(2*v*v)
    //   (9) p = (-x +- sqrt(x*x - 4gxv*(gxv - y)))/2*gxv           [quadratic formula]
    //   (10) p = (v^2 +- sqrt(v^4 - g(g*x^2 + 2*y*v^2)))/gx        [multiply top/bottom by -2*v*v/x; move 4*v^4/x^2 into root]
    //   (11) O = atan(p)

    // proj_pos
    const px: f64 = input[inOffset++];
    const py: f64 = input[inOffset++];
    const pz: f64 = input[inOffset++];

    // proj_speed
    const s: f64 = input[inOffset++];

    // target
    const tx: f64 = input[inOffset++];
    const ty: f64 = input[inOffset++];
    const tz: f64 = input[inOffset++];

    // gravity
    const g: f64 = input[inOffset++];

    let dx: f64 = tx - px;
    let dy: f64 = ty - py;
    let dz: f64 = tz - pz;

    const groundDist: f64 = Math.sqrt(dx*dx + dy*dy + dz*dz);
    const speed2: f64 = s * s;
    const speed4: f64 = s * s * s * s;

    const gx: f64 = g * groundDist;
    let root: f64 = speed4 - g * (g*groundDist*groundDist + 2*dy*speed2);

    // No solution
    if (root < 0) 
        return 0;
    
    root = Math.sqrt(root);
    const lowAng: f64 = Math.atan2(speed2 - root, gx);
    const highAng: f64 = Math.atan2(speed2 + root, gx);
    const numSolutions: u8 = lowAng != highAng ? 2 : 1;
    const lengthSq: f64 = dx*dx + dy*dy + dz*dz;
    if (lengthSq > 0) {
        const invLength: f64 = 1 / Math.sqrt(lengthSq);
        dx *= invLength;    
        dy *= invLength;
        dz *= invLength;
    }

    // solution 1
    // groundDir*Mathf.Cos(lowAng)*proj_speed + Vector3.up*Mathf.Sin(lowAng)*proj_speed;
    output[outOffset++] = dx * Math.cos(lowAng)*s;
    output[outOffset++] = dy * Math.cos(lowAng)*s + Math.sin(lowAng)*s;
    output[outOffset++] = dz * Math.cos(lowAng)*s;

    // solution 2
    // s1 = groundDir*Mathf.Cos(highAng)*proj_speed + Vector3.up*Mathf.Sin(highAng)*proj_speed;
    if (numSolutions > 1) {
        output[outOffset++] = dx * Math.cos(highAng)*s;
        output[outOffset++] = dy * Math.cos(highAng)*s + Math.sin(highAng)*s;
        output[outOffset++] = dz * Math.cos(highAng)*s;
    }

    // clean up
    input.fill(0);

    return numSolutions;
}

// Solve firing angles for a ballistic projectile with speed and gravity to hit a target moving with constant, linear velocity.
//
//   input buffer at INPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                               |
//  | [  1 ]:  <f64>   Y of a point that projectile will fire from     |
//  | [  2 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <f64>   scalar speed of projectile                      |
//  |------------------------------------------------------------------|
//  | [  4 ]:  <f64>   X                                               |
//  | [  5 ]:  <f64>   Y of a point that projectile is trying to hit   |
//  | [  6 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  7 ]:  <f64>   X                                               |
//  | [  8 ]:  <f64>   Y of velocity of target                         |
//  | [  9 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [ 10 ]:  <f64>   force of gravity, positive down                 |
//  -------------------------------------------------------------------|
// 
//   output buffer at OUTPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                               |
//  | [  1 ]:  <f64>   Y firing solution (fastest time impact)         |
//  | [  2 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <f64>   X                                               |
//  | [  4 ]:  <f64>   Y firing solution (next impact)                 |
//  | [  5 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  6 ]:  <f64>   X                                               |
//  | [  7 ]:  <f64>   Y firing solution (next impact)                 |
//  | [  8 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  9 ]:  <f64>   X                                               |
//  | [ 10 ]:  <f64>   Y firing solution (next impact)                 |
//  | [ 11 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//
// return <u8> number of unique solutions found: 0, 1, 2, 3, or 4.
export function solveArcMoving(): u8 {
    // prepare a clean output
    output.fill(0);

    // Derivation 
    //
    //  For full derivation see: blog.forrestthewoods.com
    //  Here is an abbreviated version.
    //
    //  Four equations, four unknowns (solution.x, solution.y, solution.z, time):
    //
    //  (1) proj_pos.x + solution.x*time = target_pos.x + target_vel.x*time
    //  (2) proj_pos.y + solution.y*time + .5*G*t = target_pos.y + target_vel.y*time
    //  (3) proj_pos.z + solution.z*time = target_pos.z + target_vel.z*time
    //  (4) proj_speed^2 = solution.x^2 + solution.y^2 + solution.z^2
    //
    //  (5) Solve for solution.x and solution.z in equations (1) and (3)
    //  (6) Square solution.x and solution.z from (5)
    //  (7) Solve solution.y^2 by plugging (6) into (4)
    //  (8) Solve solution.y by rearranging (2)
    //  (9) Square (8)
    //  (10) Set (8) = (7). All solution.xyz terms should be gone. Only time remains.
    //  (11) Rearrange 10. It will be of the form a*^4 + b*t^3 + c*t^2 + d*t * e. This is a quartic.
    //  (12) Solve the quartic using SolveQuartic.
    //  (13) If there are no positive, real roots there is no solution.
    //  (14) Each positive, real root is one valid solution
    //  (15) Plug each time value into (1) (2) and (3) to calculate solution.xyz
    //  (16) The end.

    let inOffset: u8 = INPUT_BUFFER_OFFSET;
    let outOffset: u8 = OUTPUT_BUFFER_OFFSET;

    // proj_pos
    const A: f64 = input[inOffset++];
    const B: f64 = input[inOffset++];
    const C: f64 = input[inOffset++];

    // proj_speed
    const S: f64 = input[inOffset++];

    // target_pos
    const M: f64 = input[inOffset++];
    const N: f64 = input[inOffset++];
    const O: f64 = input[inOffset++];

    // target_velocity
    const P: f64 = input[inOffset++];
    const Q: f64 = input[inOffset++];
    const R: f64 = input[inOffset++];

    // gravity
    const G: f64 = input[inOffset++];

    const H: f64 = M - A;
    const J: f64 = O - C;
    const K: f64 = N - B;
    const L: f64 = -0.5 * G;

    // Quartic Coeffecients
    input[0] = L*L;
    input[1] = 2*Q*L;
    input[2] = Q*Q + 2*K*L - S*S + P*P + R*R;
    input[3] = 2*K*Q + 2*H*P + 2*J*R;
    input[4] = K*K + H*H + J*J;

    // Solve quartic
    const numTimes: u8 = SolveQuartic();

    // Sort so faster collision is found first
    const sub = output.subarray(0, OUTPUT_BUFFER_OFFSET);
    sub.sort();

    // Plug quartic solutions into base equations
    // There should never be more than 2 positive, real roots.
    let numSolutions: u8 = 0;
    let t: f64;
    
    for (let i: u8 = 0; i < OUTPUT_BUFFER_OFFSET && numSolutions < 2; ++i) {
        t = output[i];
        if (t <= 0) continue;

        output[outOffset++] = (H + P*t) / t;
        output[outOffset++] = (K + Q*t - L*t*t) / t;
        output[outOffset++] = (J + R*t) / t;

        ++numSolutions;
    }

    // Write out solutions
    if (numSolutions > 0) output.copyWithin(outOffset + 6, outOffset, outOffset + 3);
    if (numSolutions > 1) output.copyWithin(outOffset + 9, outOffset + 3, outOffset + 6);

    // clean up
    input.fill(0);

    return numSolutions;
}

// Solve the firing arc with a fixed lateral speed. Vertical speed and gravity varies. 
// This enables a visually pleasing arc.
//
//   input buffer at INPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                               |
//  | [  1 ]:  <f64>   Y of a point that projectile will fire from     |
//  | [  2 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <f64>   X                                               |
//  | [  4 ]:  <f64>   Y of a point that projectile is trying to hit   |
//  | [  5 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  6 ]:  <f64>   scalar speed of projectile along XZ plane       |
//  |------------------------------------------------------------------|
//  | [  7 ]:  <f64>   height above Max(proj_pos, impact_pos) for      |
//  |                  projectile to peak at                           |
//  |------------------------------------------------------------------|
// 
//   output buffer at OUTPUT_BUFFER_OFFSET:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                               |
//  | [  1 ]:  <f64>   Y firing velocity                               |
//  | [  2 ]:  <f64>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <f64>   gravity necessary for projectile to hit         |
//  |                  precisely max height ( input[7] )               |
//  |------------------------------------------------------------------|
//
// return <u8> 1 if a valid solution was found, otherwise 0
export function solveLateralStatic(): u8 {
    // prepare a clean output
    output.fill(0);

    let inOffset: u8 = INPUT_BUFFER_OFFSET;
    let outOffset: u8 = OUTPUT_BUFFER_OFFSET;

    // proj_pos
    const px: f64 = input[inOffset++];
    const py: f64 = input[inOffset++];
    const pz: f64 = input[inOffset++];

    // target_pos
    const tx: f64 = input[inOffset++];
    const ty: f64 = input[inOffset++];
    const tz: f64 = input[inOffset++];

    // lateral_speed
    const s: f64 = input[inOffset++];

    // max_height
    const h: f64 = input[inOffset++];

    // diff
    let dx: f64 = tx - px;
    let dz: f64 = tz - pz;

    // lateralDist
    const ld = Math.sqrt(dx*dx + dz*dz);

    if (ld == 0)
        return 0;

    // time
    const t = ld / s;
    
    // normalize diff
    const ls = dx*dx + dz*dz;
    if (ls > 0) {
        const il = 1 / Math.sqrt(ls);
        dx *= il;
        dz *= il;
    }

    // fire_velocity
    dx *= s;
    dz *= s;

    // System of equations. Hit max_height at t=.5*time. Hit target at t=time.
    //
    // peak = y0 + vertical_speed*halfTime + .5*gravity*halfTime^2
    // end = y0 + vertical_speed*time + .5*gravity*time^s
    // Wolfram Alpha: solve b = a + .5*v*t + .5*g*(.5*t)^2, c = a + vt + .5*g*t^2 for g, v
    // a = py           // initial
    // b = h            // peak
    // c = ty           // final
    
    // fire_velocity
    output[outOffset++] = dx;
    output[outOffset++] = -(3*py - 4*h + ty) / t;
    output[outOffset++] = dz;

    // gravity
    output[outOffset++] = -4*(py - 2*h + ty) / (t*t);

    // clean up
    input.fill(0);

    return 1;
}

// Solve the firing arc with a fixed lateral speed at a moving target. 
//
//   input buffer at INPUT_BUFFER_OFFSET:
//  |-------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                                |
//  | [  1 ]:  <f64>   Y of a point that projectile will fire from      |
//  | [  2 ]:  <f64>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  3 ]:  <f64>   X                                                |
//  | [  4 ]:  <f64>   Y of a point that projectile is trying to hit    |
//  | [  5 ]:  <f64>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  6 ]:  <f64>   scalar speed of projectile along XZ plane        |
//  |-------------------------------------------------------------------|
//  | [  7 ]:  <f64>   X                                                |
//  | [  8 ]:  <f64>   Y of velocity of target                          |
//  | [  9 ]:  <f64>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [ 10 ]:  <f64>   height above Max(proj_pos, impact_pos) for       |
//  |                  projectile to peak at                            |
//  |-------------------------------------------------------------------|
// 
//   output buffer at OUTPUT_BUFFER_OFFSET:
//  |-------------------------------------------------------------------|
//  | [  0 ]:  <f64>   X                                                |
//  | [  1 ]:  <f64>   Y firing velocity                                |
//  | [  2 ]:  <f64>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  3 ]:  <f64>   X                                                |
//  | [  4 ]:  <f64>   Y of point where moving target will be hit       |
//  | [  5 ]:  <f64>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  6 ]:  <f64>   gravity necessary for projectile to hit          |
//  |                  precisely max height ( input[10] )               |
//  |-------------------------------------------------------------------|
//
// return <u8> 1 if a valid solution was found, otherwise 0
export function solveLateralMoving(): u8 {
    
    // prepare a clean output
    output.fill(0);

    let inOffset: u8 = INPUT_BUFFER_OFFSET;
    let outOffset: u8 = OUTPUT_BUFFER_OFFSET;

    // proj_pos
    const px: f64 = input[inOffset++];
    const py: f64 = input[inOffset++];
    const pz: f64 = input[inOffset++];

    // target
    const tx: f64 = input[inOffset++];
    const ty: f64 = input[inOffset++];
    const tz: f64 = input[inOffset++];

    // lateral_speed
    const s: f64 = input[inOffset++];

    // target_velocity
    const tvx: f64 = input[inOffset++];
    const tvy: f64 = input[inOffset++];
    const tvz: f64 = input[inOffset++];

    // max_height_offset
    const h: f64 = input[inOffset++];

    // Ground plane terms
    // Vector3 targetVelXZ = new Vector3(target_velocity.x, 0f, target_velocity.z);
    // Vector3 diffXZ = target - proj_pos;
    // diffXZ.y = 0;
    
    let dx: f64 = tx - px;
    let dz: f64 = tz - pz;

    // Derivation
    //   (1) Base formula: |P + V*t| = S*t
    //   (2) Substitute variables: |diffXZ + targetVelXZ*t| = S*t
    //   (3) Square both sides: Dot(diffXZ,diffXZ) + 2*Dot(diffXZ, targetVelXZ)*t + Dot(targetVelXZ, targetVelXZ)*t^2 = S^2 * t^2
    //   (4) Quadratic: (Dot(targetVelXZ,targetVelXZ) - S^2)t^2 + (2*Dot(diffXZ, targetVelXZ))*t + Dot(diffXZ, diffXZ) = 0
    input[0] = tvx*tvx + tvz*tvz - s*s;
    input[1] = 2 * dx*tvx + dz*tvz;
    input[2] = dx*dx + dz*dz;


    const n: u8 = SolveQuadric();

    // pick smallest, positive time
    const valid0: bool = n > 0 && output[0] > 0;
    const valid1: bool = n > 1 && output[1] > 0;
    
    let t: f64;
    if (!valid0 && !valid1)
        return 0;
    else if (valid0 && valid1)
        t = Math.min(output[0], output[1]);
    else
        t = valid0 ? output[0] : output[1];

    // Calculate impact point
    const ipx: f64 = tx + (tvx * t);
    const ipy: f64 = ty + (tvy * t);
    const ipz: f64 = tz + (tvz * t);
    
    // Calculate fire velocity along XZ plane
    let dirx: f64 = ipx - px;
    let dirz: f64 = ipz - pz;

    // fire_velocity
    const lengthSq = dirx*dirx + dirz*dirz;
    if (lengthSq > 0) {
        const invLength = 1 / Math.sqrt(lengthSq);
        dirx *= invLength;
        dirz *= invLength;
    }
    dirx *= s;
    dirz *= s;

    // Solve system of equations. Hit max_height at t=.5*time. Hit target at t=time.
    //
    // peak = y0 + vertical_speed*halfTime + .5*gravity*halfTime^2
    // end = y0 + vertical_speed*time + .5*gravity*time^s
    // Wolfram Alpha: solve b = a + .5*v*t + .5*g*(.5*t)^2, c = a + vt + .5*g*t^2 for g, v

    // a = py                               // initial
    const b: f64 = Math.max(py, ipy) + h;   // peak
    // c = ipy                              // final

    // fire_velocity
    output[outOffset++] = dirx;
    output[outOffset++] = -(3*py - 4*b + ipy) / t;
    output[outOffset++] = dirz;

    // impact_point
    output[outOffset++] = ipx;
    output[outOffset++] = ipy;
    output[outOffset++] = ipz;

    // gravity
    output[outOffset++] = -4*(py - 2*b + ipy) / (t* t);

    // clean up
    input.fill(0);

    return 1;
}
