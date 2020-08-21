var INPUT_BUFFER_SIZE = 20;
var OUTPUT_BUFFER_SIZE = 20;
// export const 5: number = 5;
// export const 6: number = 6;
var input = new Float64Array(INPUT_BUFFER_SIZE);
var output = new Float64Array(OUTPUT_BUFFER_SIZE);
// // Pass input buffer pointer to javascript
// export function getInputBufferPtr(): Float64Array {
//     return input;
// }
// // Pass output buffer pointer to javascript
// export function getOutputBufferPtr(): Float64Array {
//     return output;
// }
// Utility function used by SolveQuadratic, SolveCubic, and SolveQuartic
function IsZero(d) {
    var eps = 1e-9;
    return d > -eps && d < eps;
}
/* normal form: a^2 + bx + c = 0 */
// Returns number of solutions.
function SolveQuadric(index1, index2) {
    if (index1 === void 0) { index1 = 0; }
    if (index2 === void 0) { index2 = 1; }
    var a = input[0];
    var b = input[1];
    var c = input[2];
    var D = b * b - 4 * a * c;
    if (IsZero(D)) {
        output[index1] = -b / (2 * a);
        return 1;
    }
    else if (D < 0) {
        return 0;
    }
    else { /* if (D > 0) */
        output[index1] = (-b + Math.sqrt(D)) / (2 * a);
        output[index2] = (-b - Math.sqrt(D)) / (2 * a);
        return 2;
    }
}
// Solve cubic equation: c0*x^3 + c1*x^2 + c2*x + c3. 
// Returns number of solutions.
function SolveCubic() {
    var i;
    var num;
    var sub;
    var A;
    var B;
    var C;
    var sq_A;
    var p;
    var q;
    var cb_p;
    var D;
    // normal form: x^3 + Ax^2 + Bx + C = 0
    A = input[1] / input[0];
    B = input[2] / input[0];
    C = input[3] / input[0];
    // substitute x = y - A/3 to eliminate quadric term:
    // x^3 +px + q = 0
    sq_A = A * A;
    p = 1.0 / 3 * (-1.0 / 3 * sq_A + B);
    q = 1.0 / 2 * (2.0 / 27 * A * sq_A - 1.0 / 3 * A * B + C);
    // use Cardano's formula
    cb_p = p * p * p;
    D = q * q + cb_p;
    if (IsZero(D)) {
        if (IsZero(q)) { // one triple solution
            output[0] = 0;
            num = 1;
        }
        else { // one single and one double solution
            var u = Math.cbrt(-q);
            output[0] = 2 * u;
            output[1] = -u;
            num = 2;
        }
    }
    else if (D < 0) { // Casus irreducibilis: three real solutions
        var phi = 1.0 / 3 * Math.acos(-q / Math.sqrt(-cb_p));
        var t = 2 * Math.sqrt(-p);
        output[0] = t * Math.cos(phi);
        output[1] = -t * Math.cos(phi + Math.PI / 3);
        output[2] = -t * Math.cos(phi - Math.PI / 3);
        num = 3;
    }
    else { // one real solution
        var sqrt_D = Math.sqrt(D);
        var u = Math.cbrt(sqrt_D - q);
        var v = -Math.cbrt(sqrt_D + q);
        output[0] = u + v;
        num = 1;
    }
    /* resubstitute */
    sub = 1.0 / 3 * A;
    if (num > 0)
        output[0] -= sub;
    if (num > 1)
        output[1] -= sub;
    if (num > 2)
        output[2] -= sub;
    return num;
}
// Solve quartic function: c0*x^4 + c1*x^3 + c2*x^2 + c3*x + c4. 
// Returns number of solutions.
function SolveQuartic() {
    var z;
    var u;
    var v;
    var sub;
    var A;
    var B;
    var C;
    var D;
    var sq_A;
    var p;
    var q;
    var r;
    var num;
    // normal form: x^4 + Ax^3 + Bx^2 + Cx + D = 0
    A = input[1] / input[0];
    B = input[2] / input[0];
    C = input[3] / input[0];
    D = input[4] / input[0];
    // substitute x = y - A/4 to eliminate cubic term:
    // x^4 + px^2 + qx + r = 0
    sq_A = A * A;
    p = -3.0 / 8 * sq_A + B;
    q = 1.0 / 8 * sq_A * A - 1.0 / 2 * A * B + C;
    r = -3.0 / 256 * sq_A * sq_A + 1.0 / 16 * sq_A * B - 1.0 / 4 * A * C + D;
    if (IsZero(r)) {
        // no absolute term: y(y^3 + py + q) = 0
        input[3] = q;
        input[2] = p;
        input[1] = 0;
        input[0] = 1;
        num = SolveCubic();
    }
    else {
        // solve the resolvent cubic ...
        input[3] = 1.0 / 2 * r * p - 1.0 / 8 * q * q;
        input[2] = -r;
        input[1] = -1.0 / 2 * p;
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
        if (num == 0)
            num += SolveQuadric();
        if (num == 1)
            num += SolveQuadric(1, 2);
        if (num == 2)
            num += SolveQuadric(2, 3);
    }
    /* resubstitute */
    sub = 1.0 / 4 * A;
    if (num > 0)
        output[0] -= sub;
    if (num > 1)
        output[1] -= sub;
    if (num > 2)
        output[2] -= sub;
    if (num > 3)
        output[3] -= sub;
    return num;
}
// Calculate the maximum range that a ballistic projectile can be fired on given speed and gravity.
//
//   input buffer at 5:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   projectile velocity                             |
//  |------------------------------------------------------------------|
//  | [  1 ]:  <number>   force of gravity, positive is down              |
//  |------------------------------------------------------------------|
//  | [  2 ]:  <number>   distance above flat terrain                     |
//  |------------------------------------------------------------------|
//
//   output buffer at 6:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   maximum range                                   |
//  |------------------------------------------------------------------|
// 
// returns <number> 1 if range is larger than 0, otherwise returns 0
function range() {
    // prepare clan output
    output.fill(0);
    var inOffset = 5;
    var outOffset = 6;
    // speed
    var s = input[inOffset++];
    // gravity
    var g = input[inOffset++];
    // initial_height
    var h = input[inOffset++];
    // Derivation
    //   (1) x = speed * time * cos O
    //   (2) y = initialHeight + (speed * time * sin O) - (.5 * gravity*time*time)
    //   (3) via quadratic: t = (speed*sin O)/gravity + sqrt(speed*speed*sin O + 2*gravity*initialHeight)/gravity    [ignore smaller root]
    //   (4) solution: range = x = (speed*cos O)/gravity * sqrt(speed*speed*sin O + 2*gravity*initialHeight)    [plug t back into x=speed*time*cos O]
    var angle = 45 * (Math.PI * 2) / 360; // no air resistence, so 45 degrees provides maximum range
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    output[outOffset] = (s * cos / g) * (s * sin + Math.sqrt(s * s * sin * sin + 2 * g * h));
    // clean up
    input.fill(0);
    if (output[outOffset] > 0)
        return 1;
    return 0;
}
// Solve firing angles for a ballistic projectile with speed and gravity to hit a fixed position.
// 
//   input buffer at 5:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                               |
//  | [  1 ]:  <number>   Y of a point that projectile will fire from     |
//  | [  2 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <number>   scalar speed of projectile                      |
//  |------------------------------------------------------------------|
//  | [  4 ]:  <number>   X                                               |
//  | [  5 ]:  <number>   Y of a point that projectile is trying to hit   |
//  | [  6 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  7 ]:  <number>   force of gravity, positive down                 |
//  -------------------------------------------------------------------|
// 
//   output buffer at 6:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                               |
//  | [  1 ]:  <number>   Y firing solution (low angle)                   |
//  | [  2 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <number>   X                                               |
//  | [  4 ]:  <number>   Y firing solution (high angle)                  |
//  | [  5 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//
// returns <number> number of unique solutions found: 0, 1, or 2.
function solveArcStatic() {
    // prepare clean output
    output.fill(0);
    var inOffset = 5;
    var outOffset = 6;
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
    var px = input[inOffset++];
    var py = input[inOffset++];
    var pz = input[inOffset++];
    // proj_speed
    var s = input[inOffset++];
    // target
    var tx = input[inOffset++];
    var ty = input[inOffset++];
    var tz = input[inOffset++];
    // gravity
    var g = input[inOffset++];
    var dx = tx - px;
    var dy = ty - py;
    var dz = tz - pz;
    var groundDist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    var speed2 = s * s;
    var speed4 = s * s * s * s;
    var gx = g * groundDist;
    var root = speed4 - g * (g * groundDist * groundDist + 2 * dy * speed2);
    // No solution
    if (root < 0)
        return 0;
    root = Math.sqrt(root);
    var lowAng = Math.atan2(speed2 - root, gx);
    var highAng = Math.atan2(speed2 + root, gx);
    var numSolutions = lowAng != highAng ? 2 : 1;
    var lengthSq = dx * dx + dy * dy + dz * dz;
    if (lengthSq > 0) {
        var invLength = 1 / Math.sqrt(lengthSq);
        dx *= invLength;
        dy *= invLength;
        dz *= invLength;
    }
    // solution 1
    // groundDir*Mathf.Cos(lowAng)*proj_speed + Vector3.up*Mathf.Sin(lowAng)*proj_speed;
    output[outOffset++] = dx * Math.cos(lowAng) * s;
    output[outOffset++] = dy * Math.cos(lowAng) * s + Math.sin(lowAng) * s;
    output[outOffset++] = dz * Math.cos(lowAng) * s;
    // solution 2
    // s1 = groundDir*Mathf.Cos(highAng)*proj_speed + Vector3.up*Mathf.Sin(highAng)*proj_speed;
    if (numSolutions > 1) {
        output[outOffset++] = dx * Math.cos(highAng) * s;
        output[outOffset++] = dy * Math.cos(highAng) * s + Math.sin(highAng) * s;
        output[outOffset++] = dz * Math.cos(highAng) * s;
    }
    // clean up
    input.fill(0);
    return numSolutions;
}
// Solve firing angles for a ballistic projectile with speed and gravity to hit a target moving with constant, linear velocity.
//
//   input buffer at 5:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                               |
//  | [  1 ]:  <number>   Y of a point that projectile will fire from     |
//  | [  2 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <number>   scalar speed of projectile                      |
//  |------------------------------------------------------------------|
//  | [  4 ]:  <number>   X                                               |
//  | [  5 ]:  <number>   Y of a point that projectile is trying to hit   |
//  | [  6 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  7 ]:  <number>   X                                               |
//  | [  8 ]:  <number>   Y of velocity of target                         |
//  | [  9 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [ 10 ]:  <number>   force of gravity, positive down                 |
//  -------------------------------------------------------------------|
// 
//   output buffer at 6:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                               |
//  | [  1 ]:  <number>   Y firing solution (fastest time impact)         |
//  | [  2 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <number>   X                                               |
//  | [  4 ]:  <number>   Y firing solution (next impact)                 |
//  | [  5 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  6 ]:  <number>   X                                               |
//  | [  7 ]:  <number>   Y firing solution (next impact)                 |
//  | [  8 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  9 ]:  <number>   X                                               |
//  | [ 10 ]:  <number>   Y firing solution (next impact)                 |
//  | [ 11 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//
// return <number> number of unique solutions found: 0, 1, 2, 3, or 4.
function solveArcMoving() {
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
    var inOffset = 5;
    var outOffset = 6;
    // proj_pos
    var A = input[inOffset++];
    var B = input[inOffset++];
    var C = input[inOffset++];
    // proj_speed
    var S = input[inOffset++];
    // target_pos
    var M = input[inOffset++];
    var N = input[inOffset++];
    var O = input[inOffset++];
    // target_velocity
    var P = input[inOffset++];
    var Q = input[inOffset++];
    var R = input[inOffset++];
    // gravity
    var G = input[inOffset++];
    var H = M - A;
    var J = O - C;
    var K = N - B;
    var L = -0.5 * G;
    // Quartic Coeffecients
    input[0] = L * L;
    input[1] = 2 * Q * L;
    input[2] = Q * Q + 2 * K * L - S * S + P * P + R * R;
    input[3] = 2 * K * Q + 2 * H * P + 2 * J * R;
    input[4] = K * K + H * H + J * J;
    // Solve quartic
    var numTimes = SolveQuartic();
    // Sort so faster collision is found first
    var sub = output.subarray(0, 6);
    sub.sort();
    // Plug quartic solutions into base equations
    // There should never be more than 2 positive, real roots.
    var numSolutions = 0;
    var t;
    for (var i = 0; i < numTimes && numSolutions < 2; ++i) {
        t = output[i];
        if (t <= 0)
            continue;
        output[outOffset++] = (H + P * t) / t;
        output[outOffset++] = (K + Q * t - L * t * t) / t;
        output[outOffset++] = (J + R * t) / t;
        ++numSolutions;
    }
    // Write out solutions
    if (numSolutions > 0)
        output.copyWithin(outOffset + 6, outOffset, outOffset + 3);
    if (numSolutions > 1)
        output.copyWithin(outOffset + 9, outOffset + 3, outOffset + 6);
    // clean up
    input.fill(0);
    return numSolutions;
}
// Solve the firing arc with a fixed lateral speed. Vertical speed and gravity varies. 
// This enables a visually pleasing arc.
//
//   input buffer at 5:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                               |
//  | [  1 ]:  <number>   Y of a point that projectile will fire from     |
//  | [  2 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <number>   X                                               |
//  | [  4 ]:  <number>   Y of a point that projectile is trying to hit   |
//  | [  5 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  6 ]:  <number>   scalar speed of projectile along XZ plane       |
//  |------------------------------------------------------------------|
//  | [  7 ]:  <number>   height above Max(proj_pos, impact_pos) for      |
//  |                  projectile to peak at                           |
//  |------------------------------------------------------------------|
// 
//   output buffer at 6:
//  |------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                               |
//  | [  1 ]:  <number>   Y firing velocity                               |
//  | [  2 ]:  <number>   Z                                               |
//  |------------------------------------------------------------------|
//  | [  3 ]:  <number>   gravity necessary for projectile to hit         |
//  |                  precisely max height ( input[7] )               |
//  |------------------------------------------------------------------|
//
// return <number> 1 if a valid solution was found, otherwise 0
function solveLateralStatic() {
    // prepare a clean output
    output.fill(0);
    var inOffset = 5;
    var outOffset = 6;
    // proj_pos
    var px = input[inOffset++];
    var py = input[inOffset++];
    var pz = input[inOffset++];
    // target_pos
    var tx = input[inOffset++];
    var ty = input[inOffset++];
    var tz = input[inOffset++];
    // lateral_speed
    var s = input[inOffset++];
    // max_height
    var h = input[inOffset++];
    // diff
    var dx = tx - px;
    var dz = tz - pz;
    // lateralDist
    var ld = Math.sqrt(dx * dx + dz * dz);
    if (ld == 0)
        return 0;
    // time
    var t = ld / s;
    // normalize diff
    var ls = dx * dx + dz * dz;
    if (ls > 0) {
        var il = 1 / Math.sqrt(ls);
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
    output[outOffset++] = -(3 * py - 4 * h + ty) / t;
    output[outOffset++] = dz;
    // gravity
    output[outOffset++] = -4 * (py - 2 * h + ty) / (t * t);
    // clean up
    input.fill(0);
    return 1;
}
// Solve the firing arc with a fixed lateral speed at a moving target. 
//
//   input buffer at 5:
//  |-------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                                |
//  | [  1 ]:  <number>   Y of a point that projectile will fire from      |
//  | [  2 ]:  <number>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  3 ]:  <number>   X                                                |
//  | [  4 ]:  <number>   Y of a point that projectile is trying to hit    |
//  | [  5 ]:  <number>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  6 ]:  <number>   scalar speed of projectile along XZ plane        |
//  |-------------------------------------------------------------------|
//  | [  7 ]:  <number>   X                                                |
//  | [  8 ]:  <number>   Y of velocity of target                          |
//  | [  9 ]:  <number>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [ 10 ]:  <number>   height above Max(proj_pos, impact_pos) for       |
//  |                  projectile to peak at                            |
//  |-------------------------------------------------------------------|
// 
//   output buffer at 6:
//  |-------------------------------------------------------------------|
//  | [  0 ]:  <number>   X                                                |
//  | [  1 ]:  <number>   Y firing velocity                                |
//  | [  2 ]:  <number>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  3 ]:  <number>   X                                                |
//  | [  4 ]:  <number>   Y of point where moving target will be hit       |
//  | [  5 ]:  <number>   Z                                                |
//  |-------------------------------------------------------------------|
//  | [  6 ]:  <number>   gravity necessary for projectile to hit          |
//  |                  precisely max height ( input[10] )               |
//  |-------------------------------------------------------------------|
//
// return <number> 1 if a valid solution was found, otherwise 0
function solveLateralMoving() {
    // prepare a clean output
    output.fill(0);
    var inOffset = 5;
    var outOffset = 6;
    // proj_pos
    var px = input[inOffset++];
    var py = input[inOffset++];
    var pz = input[inOffset++];
    // target
    var tx = input[inOffset++];
    var ty = input[inOffset++];
    var tz = input[inOffset++];
    // lateral_speed
    var s = input[inOffset++];
    // target_velocity
    var tvx = input[inOffset++];
    var tvy = input[inOffset++];
    var tvz = input[inOffset++];
    // max_height_offset
    var h = input[inOffset++];
    // Ground plane terms
    // Vector3 targetVelXZ = new Vector3(target_velocity.x, 0f, target_velocity.z);
    // Vector3 diffXZ = target - proj_pos;
    // diffXZ.y = 0;
    var dx = tx - px;
    var dz = tz - pz;
    // Derivation
    //   (1) Base formula: |P + V*t| = S*t
    //   (2) Substitute variables: |diffXZ + targetVelXZ*t| = S*t
    //   (3) Square both sides: Dot(diffXZ,diffXZ) + 2*Dot(diffXZ, targetVelXZ)*t + Dot(targetVelXZ, targetVelXZ)*t^2 = S^2 * t^2
    //   (4) Quadratic: (Dot(targetVelXZ,targetVelXZ) - S^2)t^2 + (2*Dot(diffXZ, targetVelXZ))*t + Dot(diffXZ, diffXZ) = 0
    input[0] = tvx * tvx + tvz * tvz - s * s;
    input[1] = 2 * dx * tvx + dz * tvz;
    input[2] = dx * dx + dz * dz;
    var n = SolveQuadric();
    // pick smallest, positive time
    var valid0 = n > 0 && output[0] > 0;
    var valid1 = n > 1 && output[1] > 0;
    var t;
    if (!valid0 && !valid1)
        return 0;
    else if (valid0 && valid1)
        t = Math.min(output[0], output[1]);
    else
        t = valid0 ? output[0] : output[1];
    // Calculate impact point
    var ipx = tx + (tvx * t);
    var ipy = ty + (tvy * t);
    var ipz = tz + (tvz * t);
    // Calculate fire velocity along XZ plane
    var dirx = ipx - px;
    var dirz = ipz - pz;
    // fire_velocity
    var lengthSq = dirx * dirx + dirz * dirz;
    if (lengthSq > 0) {
        var invLength = 1 / Math.sqrt(lengthSq);
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
    var b = Math.max(py, ipy) + h; // peak
    // c = ipy                              // final
    // fire_velocity
    output[outOffset++] = dirx;
    output[outOffset++] = -(3 * py - 4 * b + ipy) / t;
    output[outOffset++] = dirz;
    // impact_point
    output[outOffset++] = ipx;
    output[outOffset++] = ipy;
    output[outOffset++] = ipz;
    // gravity
    output[outOffset++] = -4 * (py - 2 * b + ipy) / (t * t);
    // clean up
    input.fill(0);
    return 1;
}

exports.input = input;
exports.solveLateralMoving = solveLateralMoving;