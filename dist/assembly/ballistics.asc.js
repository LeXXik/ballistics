import { abort } from 'env';


  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      
function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var $lib_builtins_abort = env.abort;
 var $lib_rt_tlsf_ROOT = 0;
 var index_INPUT_BUFFER_OFFSET = 5;
 var index_OUTPUT_BUFFER_OFFSET = 6;
 var index_input = 0;
 var index_output = 0;
 var $lib_math_rempio2_y0 = 0.0;
 var $lib_math_rempio2_y1 = 0.0;
 var $lib_math_res128_hi = 0;
 var $argumentsLength = 0;
 var $lib_rt___rtti_base = 1600;
 var $lib_math_res128_hi$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $lib_rt_tlsf_removeBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = HEAP32[$1 >> 2] & -4 | 0;
  if ($2 >>> 0 < 256 >>> 0) {
   $4 = $2 >>> 4 | 0
  } else {
   $3 = $2;
   $2 = 31 - Math_clz32($2) | 0;
   $4 = ($3 >>> ($2 - 4 | 0) | 0) ^ 16 | 0;
   $5 = $2 - 7 | 0;
  }
  $2 = HEAP32[($1 + 20 | 0) >> 2];
  $3 = HEAP32[($1 + 16 | 0) >> 2];
  if ($3) {
   HEAP32[($3 + 20 | 0) >> 2] = $2
  }
  if ($2) {
   HEAP32[($2 + 16 | 0) >> 2] = $3
  }
  if ((HEAP32[((((($5 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] | 0) == ($1 | 0)) {
   HEAP32[((((($5 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $2;
   if (!$2) {
    $2 = ($5 << 2 | 0) + $0 | 0;
    $1 = HEAP32[($2 + 4 | 0) >> 2] & ((1 << $4 | 0) ^ -1 | 0) | 0;
    HEAP32[($2 + 4 | 0) >> 2] = $1;
    if (!$1) {
     HEAP32[$0 >> 2] = HEAP32[$0 >> 2] & ((1 << $5 | 0) ^ -1 | 0) | 0
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $3 = HEAP32[$1 >> 2];
  $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
  $5 = HEAP32[$4 >> 2];
  if ($5 & 1 | 0) {
   $2 = (($3 & -4 | 0) + 16 | 0) + ($5 & -4 | 0) | 0;
   if ($2 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $4);
    $3 = $2 | ($3 & 3 | 0) | 0;
    HEAP32[$1 >> 2] = $3;
    $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
    $5 = HEAP32[$4 >> 2];
   }
  }
  if ($3 & 2 | 0) {
   $2 = HEAP32[($1 - 4 | 0) >> 2];
   $7 = HEAP32[$2 >> 2];
   $8 = (($7 & -4 | 0) + 16 | 0) + ($3 & -4 | 0) | 0;
   if ($8 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $2);
    $3 = $7 & 3 | 0 | $8 | 0;
    HEAP32[$2 >> 2] = $3;
    $1 = $2;
   }
  }
  HEAP32[$4 >> 2] = $5 | 2 | 0;
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  $2 = $3 & -4 | 0;
  if ($2 >>> 0 < 256 >>> 0) {
   $2 = $2 >>> 4 | 0
  } else {
   $3 = 31 - Math_clz32($2) | 0;
   $2 = ($2 >>> ($3 - 4 | 0) | 0) ^ 16 | 0;
   $6 = $3 - 7 | 0;
  }
  $3 = HEAP32[((((($6 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = $3;
  if ($3) {
   HEAP32[($3 + 16 | 0) >> 2] = $1
  }
  HEAP32[((((($6 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | (1 << $6 | 0) | 0;
  $0 = ($6 << 2 | 0) + $0 | 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | (1 << $2 | 0) | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = $2;
  $2 = HEAP32[($0 + 1568 | 0) >> 2];
  if ($2) {
   if (($2 | 0) == ($1 - 16 | 0 | 0)) {
    $4 = HEAP32[$2 >> 2];
    $1 = $1 - 16 | 0;
   }
  }
  $2 = $3 - $1 | 0;
  if ($2 >>> 0 < 48 >>> 0) {
   return
  }
  HEAP32[$1 >> 2] = $4 & 2 | 0 | ($2 - 32 | 0 | 1 | 0) | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = 0;
  $2 = ($1 + $2 | 0) - 16 | 0;
  HEAP32[$2 >> 2] = 2;
  HEAP32[($0 + 1568 | 0) >> 2] = $2;
  $lib_rt_tlsf_insertBlock($0, $1);
 }
 
 function $lib_rt_tlsf_maybeInitialize() {
  var $0 = 0, $1 = 0, $2 = 0;
  $2 = $lib_rt_tlsf_ROOT;
  if (!$2) {
   $0 = __wasm_memory_size();
   if ((1 | 0) > ($0 | 0)) {
    $0 = (__wasm_memory_grow(1 - $0 | 0 | 0) | 0) < (0 | 0)
   } else {
    $0 = 0
   }
   if ($0) {
    abort()
   }
   $2 = 1648;
   HEAP32[1648 >> 2] = 0;
   HEAP32[3216 >> 2] = 0;
   for_loop_0 : while (1) {
    if ($1 >>> 0 < 23 >>> 0) {
     HEAP32[((($1 << 2 | 0) + 1648 | 0) + 4 | 0) >> 2] = 0;
     $0 = 0;
     for_loop_1 : while (1) {
      if ($0 >>> 0 < 16 >>> 0) {
       HEAP32[((((($1 << 4 | 0) + $0 | 0) << 2 | 0) + 1648 | 0) + 96 | 0) >> 2] = 0;
       $0 = $0 + 1 | 0;
       continue for_loop_1;
      }
      break for_loop_1;
     };
     $1 = $1 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $lib_rt_tlsf_addMemory(1648, 3232, __wasm_memory_size() << 16 | 0);
   $lib_rt_tlsf_ROOT = 1648;
  }
  return $2;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  var $2 = 0, $3 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $1 = $1 >>> 4 | 0
  } else {
   $1 = $1 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($1) | 0) | 0) + $1 | 0) - 1 | 0 : $1;
   $2 = 31 - Math_clz32($1) | 0;
   $3 = $2 - 4 | 0;
   $2 = $2 - 7 | 0;
   $1 = ($1 >>> $3 | 0) ^ 16 | 0;
  }
  $1 = HEAP32[((($2 << 2 | 0) + $0 | 0) + 4 | 0) >> 2] & (-1 << $1 | 0) | 0;
  if ($1) {
   $0 = HEAP32[((((__wasm_ctz_i32($1) + ($2 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2]
  } else {
   $1 = HEAP32[$0 >> 2] & (-1 << ($2 + 1 | 0) | 0) | 0;
   if ($1) {
    $1 = __wasm_ctz_i32($1);
    $2 = HEAP32[((($1 << 2 | 0) + $0 | 0) + 4 | 0) >> 2];
    $0 = HEAP32[((((__wasm_ctz_i32($2) + ($1 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
   } else {
    $0 = 0
   }
  }
  return $0;
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  $4 = $1;
  if ($1 >>> 0 >= 1073741808 >>> 0) {
   $lib_builtins_abort(1040 | 0, 1104 | 0, 461 | 0, 30 | 0);
   abort();
  }
  $1 = ($4 + 15 | 0) & -16 | 0;
  $3 = $1 >>> 0 > 16 >>> 0;
  $3 = $3 ? $1 : 16;
  $1 = $lib_rt_tlsf_searchBlock($0, $3);
  if (!$1) {
   $1 = $lib_rt_tlsf_searchBlock($0, $3);
   if (!$1) {
    $1 = __wasm_memory_size();
    $5 = ($1 << 16 | 0) - 16 | 0;
    $5 = ((((16 << ((HEAP32[($0 + 1568 | 0) >> 2] | 0) != ($5 | 0)) | 0) + ($3 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($3) | 0) | 0) - 1 | 0) + $3 | 0 : $3) | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
    if ((__wasm_memory_grow((($1 | 0) > ($5 | 0) ? $1 : $5) | 0) | 0) < (0 | 0)) {
     if ((__wasm_memory_grow($5 | 0) | 0) < (0 | 0)) {
      abort()
     }
    }
    $lib_rt_tlsf_addMemory($0, $1 << 16 | 0, __wasm_memory_size() << 16 | 0);
    $1 = $lib_rt_tlsf_searchBlock($0, $3);
   }
  }
  HEAP32[($1 + 4 | 0) >> 2] = 0;
  HEAP32[($1 + 8 | 0) >> 2] = $2;
  HEAP32[($1 + 12 | 0) >> 2] = $4;
  $lib_rt_tlsf_removeBlock($0, $1);
  $2 = HEAP32[$1 >> 2];
  $4 = ($2 & -4 | 0) - $3 | 0;
  if ($4 >>> 0 >= 32 >>> 0) {
   HEAP32[$1 >> 2] = $2 & 2 | 0 | $3 | 0;
   $2 = ($1 + 16 | 0) + $3 | 0;
   HEAP32[$2 >> 2] = $4 - 16 | 0 | 1 | 0;
   $lib_rt_tlsf_insertBlock($0, $2);
  } else {
   HEAP32[$1 >> 2] = $2 & -2 | 0;
   $0 = $1 + 16 | 0;
   $2 = HEAP32[($0 + (HEAP32[$1 >> 2] & -4 | 0) | 0) >> 2];
   HEAP32[($0 + (HEAP32[$1 >> 2] & -4 | 0) | 0) >> 2] = $2 & -3 | 0;
  }
  return $1;
 }
 
 function $lib_rt_tlsf___alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $lib_rt_tlsf_allocateBlock($lib_rt_tlsf_maybeInitialize(), $0, $1) + 16 | 0 | 0;
 }
 
 function $lib_rt_pure___retain($0) {
  $0 = $0 | 0;
  var $1 = 0;
  if ($0 >>> 0 > 1644 >>> 0) {
   $1 = $0 - 16 | 0;
   HEAP32[($1 + 4 | 0) >> 2] = HEAP32[($1 + 4 | 0) >> 2] + 1 | 0;
  }
  return $0 | 0;
 }
 
 function $lib_rt_pure___release($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > 1644 >>> 0) {
   $lib_rt_pure_decrement($0 - 16 | 0)
  }
 }
 
 function $lib_memory_memory_fill($0, $1) {
  var $2 = 0;
  while_continue_0 : while (1) {
   if ($1) {
    $2 = $0;
    $0 = $2 + 1 | 0;
    HEAP8[$2 >> 0] = 0;
    $1 = $1 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_typedarray_Float64Array_constructor() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0;
  $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(12, 3));
  if (!$0) {
   $0 = $lib_rt_pure___retain($lib_rt_tlsf___alloc(12, 2))
  }
  HEAP32[$0 >> 2] = 0;
  HEAP32[($0 + 4 | 0) >> 2] = 0;
  HEAP32[($0 + 8 | 0) >> 2] = 0;
  $1 = $lib_rt_tlsf___alloc(160, 0);
  $lib_memory_memory_fill($1, 160);
  $2 = $1;
  $3 = HEAP32[$0 >> 2];
  if (($3 | 0) != ($1 | 0)) {
   $2 = $lib_rt_pure___retain($2);
   $lib_rt_pure___release($3);
  }
  HEAP32[$0 >> 2] = $2;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  HEAP32[($0 + 8 | 0) >> 2] = 160;
  return $0;
 }
 
 function index_getInputBufferPtr() {
  return $lib_rt_pure___retain(index_input) | 0;
 }
 
 function index_getOutputBufferPtr() {
  return $lib_rt_pure___retain(index_output) | 0;
 }
 
 function $lib_typedarray_Float64Array___get($0, $1) {
  if ($1 >>> 0 >= (HEAP32[($0 + 8 | 0) >> 2] >>> 3 | 0) >>> 0) {
   $lib_builtins_abort(1264 | 0, 1328 | 0, 1304 | 0, 64 | 0);
   abort();
  }
  return HEAPF64[(HEAP32[($0 + 4 | 0) >> 2] + ($1 << 3 | 0) | 0) >> 3];
 }
 
 function index_IsZero($0) {
  return $0 > -1.0e-09 ? $0 < 1.0e-09 : 0;
 }
 
 function $lib_typedarray_Float64Array___set($0, $1, $2) {
  if ($1 >>> 0 >= (HEAP32[($0 + 8 | 0) >> 2] >>> 3 | 0) >>> 0) {
   $lib_builtins_abort(1264 | 0, 1328 | 0, 1315 | 0, 64 | 0);
   abort();
  }
  HEAPF64[(HEAP32[($0 + 4 | 0) >> 2] + ($1 << 3 | 0) | 0) >> 3] = $2;
 }
 
 function index_SolveQuadric($0, $1) {
  var $2 = 0.0, $3 = 0.0, $4 = 0.0;
  $2 = $lib_typedarray_Float64Array___get(index_input, 0);
  $3 = $lib_typedarray_Float64Array___get(index_input, 1);
  $4 = $3 * $3 - 4.0 * $2 * $lib_typedarray_Float64Array___get(index_input, 2);
  if (index_IsZero($4)) {
   $lib_typedarray_Float64Array___set(index_output, $0 & 255 | 0, -$3 / (2.0 * $2));
   $0 = 1;
  } else {
   if ($4 < 0.0) {
    $0 = 0
   } else {
    $2 = 2.0 * $2;
    $lib_typedarray_Float64Array___set(index_output, $0 & 255 | 0, (-$3 + Math_sqrt($4)) / $2);
    $lib_typedarray_Float64Array___set(index_output, $1 & 255 | 0, (-$3 - Math_sqrt($4)) / $2);
    $0 = 2;
   }
  }
  return $0;
 }
 
 function $lib_math_NativeMath_cbrt($0) {
  var $1 = 0, $2 = 0.0, $3 = 0, $4 = 0.0;
  wasm2js_scratch_store_f64(+$0);
  $1 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $3 = $1;
  wasm2js_scratch_load_i32(0 | 0) | 0;
  $1 = $1 & 2147483647 | 0;
  if ($1 >>> 0 >= 2146435072 >>> 0) {
   return $0 + $0
  }
  if ($1 >>> 0 < 1048576 >>> 0) {
   wasm2js_scratch_store_f64(+($0 * 18014398509481984.0));
   $1 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $3 = $1;
   wasm2js_scratch_load_i32(0 | 0) | 0;
   $1 = $1 & 2147483647 | 0;
   if (!$1) {
    return $0
   }
   $1 = (($1 >>> 0) / (3 >>> 0) | 0) + 696219795 | 0;
  } else {
   $1 = (($1 >>> 0) / (3 >>> 0) | 0) + 715094163 | 0
  }
  wasm2js_scratch_store_i32(0 | 0, 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, $1 | ($3 & -2147483648 | 0) | 0 | 0);
  $4 = +wasm2js_scratch_load_f64();
  $2 = $4 * $4 * ($4 / $0);
  wasm2js_scratch_store_f64(+($4 * (1.87595182427177 + $2 * (-1.8849797954337717 + $2 * 1.6214297201053545) + $2 * $2 * $2 * (-.758397934778766 + $2 * .14599619288661245))));
  $1 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $3 = (wasm2js_scratch_load_i32(0 | 0) | 0) + -2147483648 | 0;
  if ($3 >>> 0 < -2147483648 >>> 0) {
   $1 = $1 + 1 | 0
  }
  wasm2js_scratch_store_i32(0 | 0, $3 & -1073741824 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, $1 | 0);
  $2 = $0;
  $0 = +wasm2js_scratch_load_f64();
  $2 = $2 / ($0 * $0);
  return $0 + $0 * (($2 - $0) / (2.0 * $0 + $2));
 }
 
 function $lib_math_R($0) {
  return $0 * (.16666666666666666 + $0 * (-.3255658186224009 + $0 * (.20121253213486293 + $0 * (-.04005553450067941 + $0 * (7.915349942898145e-04 + $0 * 3.479331075960212e-05))))) / (1.0 + $0 * (-2.403394911734414 + $0 * (2.0209457602335057 + $0 * (-.6882839716054533 + $0 * .07703815055590194))));
 }
 
 function $lib_math_NativeMath_acos($0) {
  var $1 = 0.0, $2 = 0, $3 = 0, $4 = 0.0;
  wasm2js_scratch_store_f64(+$0);
  $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
  wasm2js_scratch_load_i32(0 | 0) | 0;
  $3 = $2 & 2147483647 | 0;
  if ($3 >>> 0 >= 1072693248 >>> 0) {
   wasm2js_scratch_store_f64(+$0);
   wasm2js_scratch_load_i32(1 | 0) | 0;
   if (!(wasm2js_scratch_load_i32(0 | 0) | 0 | ($3 - 1072693248 | 0) | 0)) {
    if ($2 >>> 31 | 0) {
     return 3.141592653589793
    }
    return 0.0;
   }
   return 0.0 / ($0 - $0);
  }
  if ($3 >>> 0 < 1071644672 >>> 0) {
   if ($3 >>> 0 <= 1012924416 >>> 0) {
    return 1.5707963267948966
   }
   return 1.5707963267948966 - ($0 - (6.123233995736766e-17 - $0 * $lib_math_R($0 * $0)));
  }
  if ($2 >>> 31 | 0) {
   $0 = .5 + $0 * .5;
   $1 = $lib_math_R($0);
   $0 = Math_sqrt($0);
   $1 = $1 * $0 - 6.123233995736766e-17;
   return 2.0 * (1.5707963267948966 - ($0 + $1));
  }
  $1 = .5 - $0 * .5;
  $4 = Math_sqrt($1);
  wasm2js_scratch_store_f64(+$4);
  $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
  wasm2js_scratch_load_i32(0 | 0) | 0;
  wasm2js_scratch_store_i32(0 | 0, 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, $2 | 0);
  $0 = +wasm2js_scratch_load_f64();
  return 2.0 * ($0 + ($lib_math_R($1) * $4 + ($1 - $0 * $0) / ($4 + $0)));
 }
 
 function $lib_math_pio2_large_quot($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0.0;
  $6 = $0;
  $3 = $1 & 2147483647 | 0;
  $0 = $3 >> 31 | 0;
  $2 = $3 >> 20 | 0;
  $3 = $2 - 1045 | 0;
  $7 = (((($0 - ($2 >>> 0 < 1045 >>> 0) | 0) & 63 | 0) << 26 | 0 | ($3 >>> 6 | 0) | 0) << 3 | 0) + 1368 | 0;
  $9 = HEAP32[$7 >> 2];
  $12 = HEAP32[($7 + 4 | 0) >> 2];
  $2 = HEAP32[($7 + 8 | 0) >> 2];
  $4 = HEAP32[($7 + 12 | 0) >> 2];
  $13 = HEAP32[($7 + 16 | 0) >> 2];
  $11 = HEAP32[($7 + 20 | 0) >> 2];
  $5 = $3 & 63 | 0;
  if ($5) {
   $3 = $5 & 31 | 0;
   if (32 >>> 0 <= ($5 & 63 | 0) >>> 0) {
    $0 = $9 << $3 | 0;
    $3 = 0;
   } else {
    $0 = ((1 << $3 | 0) - 1 | 0) & ($9 >>> (32 - $3 | 0) | 0) | 0 | ($12 << $3 | 0) | 0;
    $3 = $9 << $3 | 0;
   }
   $8 = $0;
   $0 = 64 - $5 | 0;
   $10 = $0;
   $9 = $0 & 31 | 0;
   if (32 >>> 0 <= ($0 & 63 | 0) >>> 0) {
    $0 = 0;
    $12 = $4 >>> $9 | 0;
   } else {
    $0 = $4 >>> $9 | 0;
    $12 = (((1 << $9 | 0) - 1 | 0) & $4 | 0) << (32 - $9 | 0) | 0 | ($2 >>> $9 | 0) | 0;
   }
   $9 = $12 | $3 | 0;
   $12 = $0 | $8 | 0;
   $3 = $5 & 31 | 0;
   if (32 >>> 0 <= ($5 & 63 | 0) >>> 0) {
    $0 = $2 << $3 | 0;
    $3 = 0;
   } else {
    $0 = ((1 << $3 | 0) - 1 | 0) & ($2 >>> (32 - $3 | 0) | 0) | 0 | ($4 << $3 | 0) | 0;
    $3 = $2 << $3 | 0;
   }
   $4 = $0;
   $2 = $10 & 31 | 0;
   if (32 >>> 0 <= ($10 & 63 | 0) >>> 0) {
    $0 = 0;
    $8 = $11 >>> $2 | 0;
   } else {
    $0 = $11 >>> $2 | 0;
    $8 = (((1 << $2 | 0) - 1 | 0) & $11 | 0) << (32 - $2 | 0) | 0 | ($13 >>> $2 | 0) | 0;
   }
   $2 = $8 | $3 | 0;
   $4 = $0 | $4 | 0;
   $3 = $5 & 31 | 0;
   if (32 >>> 0 <= ($5 & 63 | 0) >>> 0) {
    $0 = $13 << $3 | 0;
    $3 = 0;
   } else {
    $0 = ((1 << $3 | 0) - 1 | 0) & ($13 >>> (32 - $3 | 0) | 0) | 0 | ($11 << $3 | 0) | 0;
    $3 = $13 << $3 | 0;
   }
   $11 = $0;
   $8 = HEAP32[($7 + 28 | 0) >> 2];
   $7;
   $13 = $10 & 31 | 0;
   if (32 >>> 0 <= ($10 & 63 | 0) >>> 0) {
    $0 = 0;
    $8 = 0;
   } else {
    $0 = $8 >>> $13 | 0;
    $8 = 0;
   }
   $11 = $0 | $11 | 0;
  }
  $3 = $6;
  $7 = __wasm_i64_mul($3, 0, $2, 0);
  $5 = i64toi32_i32$HIGH_BITS;
  $10 = $1 & 1048575 | 0 | 1048576 | 0;
  $16 = $10;
  $15 = __wasm_i64_mul($2, 0, $10, 0);
  $17 = i64toi32_i32$HIGH_BITS;
  $18 = $4;
  $2 = __wasm_i64_mul($3, 0, $4, 0);
  $3 = $5;
  $5 = i64toi32_i32$HIGH_BITS;
  $2 = $2 + $3 | 0;
  if ($2 >>> 0 < $3 >>> 0) {
   $8 = $5 + 1 | 0
  } else {
   $8 = $5
  }
  $0 = $17;
  $4 = $2 + $15 | 0;
  if ($4 >>> 0 < $2 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $3 = $0;
  $5 = __wasm_i64_mul($18, 0, $16, 0);
  $0 = i64toi32_i32$HIGH_BITS;
  $2 = $8 + $5 | 0;
  if ($2 >>> 0 < $8 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $8 = $4;
  $4 = $2;
  $2 = $3;
  $4 = $4 + $2 | 0;
  if ($4 >>> 0 < $2 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $lib_math_res128_hi = $4;
  $lib_math_res128_hi$hi = $0;
  $2 = $lib_math_res128_hi;
  $0 = $lib_math_res128_hi$hi;
  $4 = __wasm_i64_mul($6, $10, $9, $12);
  $0 = i64toi32_i32$HIGH_BITS + $0 | 0;
  $2 = $2 + $4 | 0;
  if ($2 >>> 0 < $4 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $9 = $2;
  $4 = $0;
  $2 = $10;
  $0 = $2 >> 31 | 0;
  $0 = __wasm_i64_mul($11, 0, $2, $0);
  $11 = $0;
  $6 = $0;
  $5 = $8;
  $3 = 0;
  $13 = $3 + $7 | 0;
  if ($13 >>> 0 < 0 >>> 0) {
   $5 = $5 + 1 | 0
  }
  $2 = i64toi32_i32$HIGH_BITS;
  $0 = $5 + $2 | 0;
  $3 = $6 + $13 | 0;
  if ($3 >>> 0 < $13 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $6 = $0;
  $0 = $4;
  $2 = ($2 | 0) == ($6 | 0) & $3 >>> 0 < $11 >>> 0 | 0 | $6 >>> 0 < $2 >>> 0 | 0;
  $11 = $2 + $9 | 0;
  if ($11 >>> 0 < $2 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $13 = $0;
  $2 = $11;
  $0 = $0 << 2 | 0 | ($2 >>> 30 | 0) | 0;
  $8 = $3;
  $4 = $2 << 2 | 0;
  $2 = $6;
  $3 = $4 | ($2 >>> 30 | 0) | 0;
  $11 = $0;
  $0 = $0 >> 31 | 0;
  $6 = $0;
  $4 = $0;
  $0 = $3 ^ (($0 & 1 | 0) << 31 | 0 | ($0 >>> 1 | 0) | 0) | 0;
  $7 = $0;
  $5 = $11 ^ ($4 >> 1 | 0) | 0;
  $3 = Math_clz32($5);
  if (($3 | 0) == (32 | 0)) {
   $3 = Math_clz32($0) + 32 | 0
  }
  $9 = $3 & 31 | 0;
  if (32 >>> 0 <= ($3 & 63 | 0) >>> 0) {
   $0 = $7 << $9 | 0;
   $7 = 0;
  } else {
   $0 = ((1 << $9 | 0) - 1 | 0) & ($7 >>> (32 - $9 | 0) | 0) | 0 | ($5 << $9 | 0) | 0;
   $7 = $7 << $9 | 0;
  }
  $5 = $0;
  $9 = $6;
  $6 = $6 ^ ($8 << 2 | 0) | 0;
  $12 = $6;
  $10 = ($2 << 2 | 0 | ($8 >>> 30 | 0) | 0) ^ $4 | 0;
  $4 = $10;
  $0 = 64 - $3 | 0;
  $2 = $0 & 31 | 0;
  if (32 >>> 0 <= ($0 & 63 | 0) >>> 0) {
   $6 = $4 >>> $2 | 0;
   $0 = 0;
  } else {
   $6 = (((1 << $2 | 0) - 1 | 0) & $4 | 0) << (32 - $2 | 0) | 0 | ($6 >>> $2 | 0) | 0;
   $0 = $4 >>> $2 | 0;
  }
  $6 = $6 | $7 | 0;
  $18 = $6;
  $7 = __wasm_i64_mul($6, 0, 560513588, 0);
  $4 = i64toi32_i32$HIGH_BITS;
  $15 = $0 | $5 | 0;
  $16 = $15;
  $5 = 0;
  $17 = __wasm_i64_mul($15, $5, 560513588, 0);
  $5 = i64toi32_i32$HIGH_BITS;
  $2 = __wasm_i64_mul($6, 0, -921707870, 0);
  $0 = i64toi32_i32$HIGH_BITS;
  $2 = $2 + $4 | 0;
  if ($2 >>> 0 < $4 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $8 = $0;
  $0 = $5;
  $4 = $2 + $17 | 0;
  if ($4 >>> 0 < $2 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $6 = $0;
  $5 = __wasm_i64_mul($16, 0, -921707870, 0);
  $0 = i64toi32_i32$HIGH_BITS;
  $2 = $5 + $8 | 0;
  if ($2 >>> 0 < $8 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $5 = $0;
  $0 = $2;
  $2 = $6;
  $0 = $0 + $2 | 0;
  if ($0 >>> 0 < $2 >>> 0) {
   $5 = $5 + 1 | 0
  }
  $lib_math_res128_hi = $0;
  $lib_math_res128_hi$hi = $5;
  $0 = $4;
  $6 = 0;
  $2 = $6 + $7 | 0;
  if ($2 >>> 0 < 0 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $5 = $2;
  $6 = $0;
  $8 = $0;
  $4 = $12;
  $7 = $3 & 31 | 0;
  $19 = 3.753184150245214e-04 * (+($18 >>> 0) + 4294967296.0 * +($15 >>> 0));
  if (32 >>> 0 <= ($3 & 63 | 0) >>> 0) {
   $0 = $4 << $7 | 0;
   $4 = 0;
  } else {
   $0 = ((1 << $7 | 0) - 1 | 0) & ($4 >>> (32 - $7 | 0) | 0) | 0 | ($10 << $7 | 0) | 0;
   $4 = $4 << $7 | 0;
  }
  $14 = $19 + 3.834951969714103e-04 * (+($4 >>> 0) + 4294967296.0 * +($0 >>> 0));
  if (Math_abs($14) >= 1.0) {
   $0 = $14 > 0.0 ? ~~Math_min(Math_floor($14 / 4294967296.0), 4294967295.0) >>> 0 : ~~Math_ceil(($14 - +(~~$14 >>> 0 >>> 0)) / 4294967296.0) >>> 0
  } else {
   $0 = 0
  }
  $12 = ~~$14 >>> 0;
  $4 = $12;
  $7 = $0;
  $5 = ($0 | 0) == ($8 | 0) & $5 >>> 0 < $4 >>> 0 | 0 | $8 >>> 0 < $0 >>> 0 | 0;
  $0 = $lib_math_res128_hi;
  $8 = $0;
  $10 = $lib_math_res128_hi$hi;
  $0 = $10 >>> 11 | 0;
  $12 = ($10 & 2047 | 0) << 21 | 0 | ($8 >>> 11 | 0) | 0;
  $10 = $12 + $5 | 0;
  if ($10 >>> 0 < $12 >>> 0) {
   $0 = $0 + 1 | 0
  }
  $lib_math_rempio2_y0 = +($10 >>> 0) + 4294967296.0 * +($0 >>> 0);
  $5 = ($8 << 21 | 0 | ($6 >>> 11 | 0) | 0) + $7 | 0;
  $0 = ($6 & 2047 | 0) << 21 | 0 | ($2 >>> 11 | 0) | 0;
  $6 = $0 + $4 | 0;
  if ($6 >>> 0 < $0 >>> 0) {
   $5 = $5 + 1 | 0
  }
  $lib_math_rempio2_y1 = 5.421010862427522e-20 * (+($6 >>> 0) + 4294967296.0 * +($5 >>> 0));
  $14 = $lib_math_rempio2_y0;
  $6 = 0;
  wasm2js_scratch_store_i32(0 | 0, 0 - $6 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, 1018167296 - ($3 << 20 | 0) | 0 | (($1 ^ $11 | 0) & -2147483648 | 0) | 0 | 0);
  $19 = $14;
  $14 = +wasm2js_scratch_load_f64();
  $lib_math_rempio2_y0 = $19 * $14;
  $lib_math_rempio2_y1 = $lib_math_rempio2_y1 * $14;
  return ($13 >> 30 | 0) - $9 | 0;
 }
 
 function $lib_math_NativeMath_cos($0) {
  var $1 = 0.0, $2 = 0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0, $7 = 0, $8 = 0, $9 = 0.0;
  wasm2js_scratch_store_f64(+$0);
  $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $6 = $2;
  $7 = wasm2js_scratch_load_i32(0 | 0) | 0;
  $8 = $2 >>> 31 | 0;
  $2 = $2 & 2147483647 | 0;
  if ($2 >>> 0 <= 1072243195 >>> 0) {
   if ($2 >>> 0 < 1044816030 >>> 0) {
    return 1.0
   }
   $1 = $0 * $0;
   $3 = .5 * $1;
   $4 = 1.0 - $3;
   $5 = 1.0 - $4;
   $5 = $5 - $3;
   $3 = $1 * $1;
   return $4 + ($5 + ($1 * ($1 * (.0416666666666666 + $1 * (-.001388888888887411 + $1 * 2.480158728947673e-05)) + $3 * $3 * (-2.7557314351390663e-07 + $1 * (2.087572321298175e-09 + $1 * -1.1359647557788195e-11))) - $0 * 0.0));
  }
  if ($2 >>> 0 >= 2146435072 >>> 0) {
   return $0 - $0
  }
  $2 = $6 & 2147483647 | 0;
  $lib_math_rempio2_inlined_0 : {
   if ($2 >>> 0 < 1094263291 >>> 0) {
    $3 = __wasm_nearest_f64($0 * .6366197723675814);
    $0 = $0 - $3 * 1.5707963267341256;
    $4 = $3 * 6.077100506506192e-11;
    $1 = $0 - $4;
    wasm2js_scratch_store_f64(+$1);
    $6 = wasm2js_scratch_load_i32(1 | 0) | 0;
    wasm2js_scratch_load_i32(0 | 0) | 0;
    $2 = $2 >>> 20 | 0;
    if (($2 - (($6 >>> 20 | 0) & 2047 | 0) | 0) >>> 0 > 16 >>> 0) {
     $5 = $0;
     $1 = $3 * 6.077100506303966e-11;
     $0 = $0 - $1;
     $4 = $3 * 2.0222662487959506e-21 - ($5 - $0 - $1);
     $1 = $0 - $4;
     wasm2js_scratch_store_f64(+$1);
     $6 = wasm2js_scratch_load_i32(1 | 0) | 0;
     wasm2js_scratch_load_i32(0 | 0) | 0;
     if (($2 - (($6 >>> 20 | 0) & 2047 | 0) | 0) >>> 0 > 49 >>> 0) {
      $5 = $0;
      $1 = $3 * 2.0222662487111665e-21;
      $0 = $0 - $1;
      $4 = $3 * 8.4784276603689e-32 - ($5 - $0 - $1);
      $1 = $0 - $4;
     }
    }
    $lib_math_rempio2_y0 = $1;
    $lib_math_rempio2_y1 = $0 - $1 - $4;
    $2 = ~~$3;
    break $lib_math_rempio2_inlined_0;
   }
   $2 = $lib_math_pio2_large_quot($7, $6);
   $2 = $8 ? 0 - $2 | 0 : $2;
  }
  $1 = $lib_math_rempio2_y0;
  $3 = $lib_math_rempio2_y1;
  if ($2 & 1 | 0) {
   $0 = $1 * $1;
   $4 = -1.984126982985795e-04 + $0 * 2.7557313707070068e-06;
   $5 = $1;
   $1 = $0 * $1;
   $0 = $5 - ($0 * (.5 * $3 - $1 * (.00833333333332249 + $0 * $4 + $0 * ($0 * $0) * (-2.5050760253406863e-08 + $0 * 1.58969099521155e-10))) - $3 - $1 * -.16666666666666632);
  } else {
   $0 = $1 * $1;
   $4 = .5 * $0;
   $5 = 1.0 - $4;
   $9 = 1.0 - $5 - $4;
   $4 = $0 * $0;
   $0 = $5 + ($9 + ($0 * ($0 * (.0416666666666666 + $0 * (-.001388888888887411 + $0 * 2.480158728947673e-05)) + $4 * $4 * (-2.7557314351390663e-07 + $0 * (2.087572321298175e-09 + $0 * -1.1359647557788195e-11))) - $1 * $3));
  }
  return ($2 + 1 | 0) & 2 | 0 ? -$0 : $0;
 }
 
 function index_SolveCubic() {
  var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0, $4 = 0.0, $5 = 0.0;
  $4 = $lib_typedarray_Float64Array___get(index_input, 1) / $lib_typedarray_Float64Array___get(index_input, 0);
  $0 = $4 * $4;
  $1 = $lib_typedarray_Float64Array___get(index_input, 2) / $lib_typedarray_Float64Array___get(index_input, 0);
  $2 = -.3333333333333333 * $0 + $1;
  $0 = .5 * (.07407407407407407 * $4 * $0 - .3333333333333333 * $4 * $1 + $lib_typedarray_Float64Array___get(index_input, 3) / $lib_typedarray_Float64Array___get(index_input, 0));
  $1 = .3333333333333333 * $2;
  $5 = $1 * $1 * $1;
  $2 = $0 * $0 + $5;
  if (index_IsZero($2)) {
   if (index_IsZero($0)) {
    $lib_typedarray_Float64Array___set(index_output, 0, 0.0);
    $3 = 1;
   } else {
    $0 = $lib_math_NativeMath_cbrt(-$0);
    $lib_typedarray_Float64Array___set(index_output, 0, 2.0 * $0);
    $lib_typedarray_Float64Array___set(index_output, 1, -$0);
    $3 = 2;
   }
  } else {
   if ($2 < 0.0) {
    $2 = $lib_math_NativeMath_acos(-$0 / Math_sqrt(-$5));
    $0 = 2.0 * Math_sqrt(-$1);
    $1 = .3333333333333333 * $2;
    $lib_typedarray_Float64Array___set(index_output, 0, $0 * $lib_math_NativeMath_cos($1));
    $lib_typedarray_Float64Array___set(index_output, 1, -$0 * $lib_math_NativeMath_cos($1 + 1.0471975511965976));
    $lib_typedarray_Float64Array___set(index_output, 2, -$0 * $lib_math_NativeMath_cos($1 - 1.0471975511965976));
    $3 = 3;
   } else {
    $1 = Math_sqrt($2);
    $2 = $lib_math_NativeMath_cbrt($1 - $0);
    $0 = -$lib_math_NativeMath_cbrt($1 + $0);
    $lib_typedarray_Float64Array___set(index_output, 0, $2 + $0);
    $3 = 1;
   }
  }
  $0 = .3333333333333333 * $4;
  if ($3 >>> 0 > 0 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 0, $lib_typedarray_Float64Array___get(index_output, 0) - $0)
  }
  if ($3 >>> 0 > 1 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 1, $lib_typedarray_Float64Array___get(index_output, 1) - $0)
  }
  if ($3 >>> 0 > 2 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 2, $lib_typedarray_Float64Array___get(index_output, 2) - $0)
  }
  return $3 | 0;
 }
 
 function index_SolveQuartic() {
  var $0 = 0.0, $1 = 0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0;
  $4 = $lib_typedarray_Float64Array___get(index_input, 1) / $lib_typedarray_Float64Array___get(index_input, 0);
  $2 = $4 * $4;
  $5 = $lib_typedarray_Float64Array___get(index_input, 2) / $lib_typedarray_Float64Array___get(index_input, 0);
  $3 = -.375 * $2 + $5;
  $0 = $lib_typedarray_Float64Array___get(index_input, 3) / $lib_typedarray_Float64Array___get(index_input, 0);
  $6 = .125 * $2 * $4 - .5 * $4 * $5 + $0;
  $0 = -.01171875 * $2 * $2 + .0625 * $2 * $5 - .25 * $4 * $0 + $lib_typedarray_Float64Array___get(index_input, 4) / $lib_typedarray_Float64Array___get(index_input, 0);
  if (index_IsZero($0)) {
   $lib_typedarray_Float64Array___set(index_input, 3, $6);
   $lib_typedarray_Float64Array___set(index_input, 2, $3);
   $lib_typedarray_Float64Array___set(index_input, 1, 0.0);
   $lib_typedarray_Float64Array___set(index_input, 0, 1.0);
   $1 = index_SolveCubic();
  } else {
   $lib_typedarray_Float64Array___set(index_input, 3, .5 * $0 * $3 - .125 * $6 * $6);
   $lib_typedarray_Float64Array___set(index_input, 2, -$0);
   $lib_typedarray_Float64Array___set(index_input, 1, -.5 * $3);
   $lib_typedarray_Float64Array___set(index_input, 0, 1.0);
   index_SolveCubic();
   $2 = $lib_typedarray_Float64Array___get(index_output, 0);
   $3 = 2.0 * $2 - $3;
   $0 = $2 * $2 - $0;
   if (index_IsZero($0)) {
    $0 = 0.0
   } else {
    if ($0 > 0.0) {
     $0 = Math_sqrt($0)
    } else {
     return 0 | 0
    }
   }
   $5 = $0;
   if (index_IsZero($3)) {
    $0 = 0.0
   } else {
    if ($3 > 0.0) {
     $0 = Math_sqrt($3)
    } else {
     return 0 | 0
    }
   }
   $lib_typedarray_Float64Array___set(index_input, 2, $2 - $5);
   $7 = $6 < 0.0;
   $lib_typedarray_Float64Array___set(index_input, 1, $7 ? -$0 : $0);
   $lib_typedarray_Float64Array___set(index_input, 0, 1.0);
   $1 = index_SolveQuadric(0, 1);
   $lib_typedarray_Float64Array___set(index_input, 2, $2 + $5);
   $lib_typedarray_Float64Array___set(index_input, 1, $7 ? $0 : -$0);
   $lib_typedarray_Float64Array___set(index_input, 0, 1.0);
   if (!$1) {
    $1 = index_SolveQuadric(0, 1) + $1 | 0
   }
   if (($1 & 255 | 0 | 0) == (1 | 0)) {
    $1 = index_SolveQuadric(1, 2) + $1 | 0
   }
   if (($1 & 255 | 0 | 0) == (2 | 0)) {
    $1 = index_SolveQuadric(2, 3) + $1 | 0
   }
  }
  $0 = .25 * $4;
  if (($1 & 255 | 0) >>> 0 > 0 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 0, $lib_typedarray_Float64Array___get(index_output, 0) - $0)
  }
  if (($1 & 255 | 0) >>> 0 > 1 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 1, $lib_typedarray_Float64Array___get(index_output, 1) - $0)
  }
  if (($1 & 255 | 0) >>> 0 > 2 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 2, $lib_typedarray_Float64Array___get(index_output, 2) - $0)
  }
  if (($1 & 255 | 0) >>> 0 > 3 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 3, $lib_typedarray_Float64Array___get(index_output, 3) - $0)
  }
  return $1 & 255 | 0 | 0;
 }
 
 function $lib_typedarray_Float64Array_fill($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $2 = $lib_rt_pure___retain($0);
  $3 = HEAP32[($2 + 4 | 0) >> 2];
  $1 = HEAP32[($2 + 8 | 0) >> 2] >>> 3 | 0;
  $0 = (0 | 0) < ($1 | 0);
  $0 = $0 ? 0 : $1;
  $1 = (2147483647 | 0) < ($1 | 0) ? 2147483647 : $1;
  for_loop_0 : while (1) {
   if (($0 | 0) < ($1 | 0)) {
    HEAPF64[(($0 << 3 | 0) + $3 | 0) >> 3] = 0.0;
    $0 = $0 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return $2;
 }
 
 function $lib_math_NativeMath_sin($0) {
  var $1 = 0.0, $2 = 0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0, $7 = 0, $8 = 0, $9 = 0.0;
  wasm2js_scratch_store_f64(+$0);
  $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $6 = $2;
  $7 = wasm2js_scratch_load_i32(0 | 0) | 0;
  $8 = $2 >>> 31 | 0;
  $2 = $2 & 2147483647 | 0;
  if ($2 >>> 0 <= 1072243195 >>> 0) {
   if ($2 >>> 0 < 1045430272 >>> 0) {
    return $0
   }
   $1 = $0 * $0;
   $4 = -1.984126982985795e-04 + $1 * 2.7557313707070068e-06;
   return $0 + $1 * $0 * (-.16666666666666632 + $1 * (.00833333333332249 + $1 * $4 + $1 * ($1 * $1) * (-2.5050760253406863e-08 + $1 * 1.58969099521155e-10)));
  }
  if ($2 >>> 0 >= 2146435072 >>> 0) {
   return $0 - $0
  }
  $2 = $6 & 2147483647 | 0;
  $lib_math_rempio2_inlined_1 : {
   if ($2 >>> 0 < 1094263291 >>> 0) {
    $4 = __wasm_nearest_f64($0 * .6366197723675814);
    $0 = $0 - $4 * 1.5707963267341256;
    $3 = $4 * 6.077100506506192e-11;
    $1 = $0 - $3;
    wasm2js_scratch_store_f64(+$1);
    $6 = wasm2js_scratch_load_i32(1 | 0) | 0;
    wasm2js_scratch_load_i32(0 | 0) | 0;
    $2 = $2 >>> 20 | 0;
    if (($2 - (($6 >>> 20 | 0) & 2047 | 0) | 0) >>> 0 > 16 >>> 0) {
     $5 = $0;
     $1 = $4 * 6.077100506303966e-11;
     $0 = $0 - $1;
     $3 = $4 * 2.0222662487959506e-21 - ($5 - $0 - $1);
     $1 = $0 - $3;
     wasm2js_scratch_store_f64(+$1);
     $6 = wasm2js_scratch_load_i32(1 | 0) | 0;
     wasm2js_scratch_load_i32(0 | 0) | 0;
     if (($2 - (($6 >>> 20 | 0) & 2047 | 0) | 0) >>> 0 > 49 >>> 0) {
      $5 = $0;
      $1 = $4 * 2.0222662487111665e-21;
      $0 = $0 - $1;
      $3 = $4 * 8.4784276603689e-32 - ($5 - $0 - $1);
      $1 = $0 - $3;
     }
    }
    $lib_math_rempio2_y0 = $1;
    $lib_math_rempio2_y1 = $0 - $1 - $3;
    $2 = ~~$4;
    break $lib_math_rempio2_inlined_1;
   }
   $2 = $lib_math_pio2_large_quot($7, $6);
   $2 = $8 ? 0 - $2 | 0 : $2;
  }
  $1 = $lib_math_rempio2_y0;
  $4 = $lib_math_rempio2_y1;
  if ($2 & 1 | 0) {
   $0 = $1 * $1;
   $3 = .5 * $0;
   $5 = 1.0 - $3;
   $9 = 1.0 - $5 - $3;
   $3 = $0 * $0;
   $0 = $5 + ($9 + ($0 * ($0 * (.0416666666666666 + $0 * (-.001388888888887411 + $0 * 2.480158728947673e-05)) + $3 * $3 * (-2.7557314351390663e-07 + $0 * (2.087572321298175e-09 + $0 * -1.1359647557788195e-11))) - $1 * $4));
  } else {
   $0 = $1 * $1;
   $3 = -1.984126982985795e-04 + $0 * 2.7557313707070068e-06;
   $5 = $1;
   $1 = $0 * $1;
   $0 = $5 - ($0 * (.5 * $4 - $1 * (.00833333333332249 + $0 * $3 + $0 * ($0 * $0) * (-2.5050760253406863e-08 + $0 * 1.58969099521155e-10))) - $4 - $1 * -.16666666666666632);
  }
  return $2 & 2 | 0 ? -$0 : $0;
 }
 
 function index_range() {
  var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0;
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_output));
  $0 = $lib_typedarray_Float64Array___get(index_input, 5);
  $3 = $lib_typedarray_Float64Array___get(index_input, 6);
  $1 = $lib_typedarray_Float64Array___get(index_input, 7);
  $4 = $0 * $lib_math_NativeMath_cos(.7853981633974483);
  $2 = $lib_math_NativeMath_sin(.7853981633974483);
  $1 = $0 * $0 * $2 * $2 + 2.0 * $3 * $1;
  $lib_typedarray_Float64Array___set(index_output, 6, $4 / $3 * ($0 * $2 + Math_sqrt($1)));
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_input));
  if ($lib_typedarray_Float64Array___get(index_output, 6) > 0.0) {
   return 1 | 0
  }
  return 0 | 0;
 }
 
 function $lib_math_NativeMath_atan($0) {
  var $1 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0.0;
  $6 = $0;
  wasm2js_scratch_store_f64(+$0);
  $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
  wasm2js_scratch_load_i32(0 | 0) | 0;
  $2 = $2 & 2147483647 | 0;
  if ($2 >>> 0 >= 1141899264 >>> 0) {
   if ($0 != $0) {
    return $0
   }
   wasm2js_scratch_store_f64(+(1.5707963267948966));
   $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $3 = wasm2js_scratch_load_i32(0 | 0) | 0;
   wasm2js_scratch_store_f64(+$6);
   $4 = wasm2js_scratch_load_i32(1 | 0) | 0;
   wasm2js_scratch_load_i32(0 | 0) | 0;
   wasm2js_scratch_store_i32(0 | 0, $3 | 0);
   wasm2js_scratch_store_i32(1 | 0, $2 & 2147483647 | 0 | ($4 & -2147483648 | 0) | 0 | 0);
   return +wasm2js_scratch_load_f64();
  }
  if ($2 >>> 0 < 1071382528 >>> 0) {
   if ($2 >>> 0 < 1044381696 >>> 0) {
    return $0
   }
   $3 = -1;
  } else {
   $0 = Math_abs($0);
   if ($2 >>> 0 < 1072889856 >>> 0) {
    if ($2 >>> 0 < 1072037888 >>> 0) {
     $0 = (2.0 * $0 - 1.0) / (2.0 + $0)
    } else {
     $3 = 1;
     $0 = ($0 - 1.0) / ($0 + 1.0);
    }
   } else {
    if ($2 >>> 0 < 1073971200 >>> 0) {
     $3 = 2;
     $0 = ($0 - 1.5) / (1.0 + 1.5 * $0);
    } else {
     $3 = 3;
     $0 = -1.0 / $0;
    }
   }
  }
  $5 = $0 * $0;
  $1 = $5 * $5;
  $1 = $0 * ($5 * (.3333333333333293 + $1 * (.14285714272503466 + $1 * (.09090887133436507 + $1 * (.06661073137387531 + $1 * (.049768779946159324 + $1 * .016285820115365782))))) + $1 * (-.19999999999876483 + $1 * (-.11111110405462356 + $1 * (-.0769187620504483 + $1 * (-.058335701337905735 + $1 * -.036531572744216916)))));
  if (($3 | 0) < (0 | 0)) {
   return $0 - $1
  }
  break_0 : {
   case4_0 : {
    switch ($3 | 0) {
    case 0:
     $0 = .4636476090008061 - ($1 - 2.2698777452961687e-17 - $0);
     break break_0;
    case 1:
     $0 = .7853981633974483 - ($1 - 3.061616997868383e-17 - $0);
     break break_0;
    case 2:
     $0 = .982793723247329 - ($1 - 1.3903311031230998e-17 - $0);
     break break_0;
    case 3:
     $0 = 1.5707963267948966 - ($1 - 6.123233995736766e-17 - $0);
     break break_0;
    default:
     break case4_0;
    };
   }
   abort();
  }
  wasm2js_scratch_store_f64(+$0);
  $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $3 = wasm2js_scratch_load_i32(0 | 0) | 0;
  wasm2js_scratch_store_f64(+$6);
  $4 = wasm2js_scratch_load_i32(1 | 0) | 0;
  wasm2js_scratch_load_i32(0 | 0) | 0;
  wasm2js_scratch_store_i32(0 | 0, $3 | 0);
  wasm2js_scratch_store_i32(1 | 0, $2 & 2147483647 | 0 | ($4 & -2147483648 | 0) | 0 | 0);
  return +wasm2js_scratch_load_f64();
 }
 
 function $lib_math_NativeMath_atan2($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  if ($1 != $1 ? 1 : $0 != $0) {
   return $1 + $0
  }
  wasm2js_scratch_store_f64(+$0);
  $2 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $5 = wasm2js_scratch_load_i32(0 | 0) | 0;
  $4 = $2;
  wasm2js_scratch_store_f64(+$1);
  $3 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $2 = wasm2js_scratch_load_i32(0 | 0) | 0;
  $6 = $2;
  if (!($3 - 1072693248 | 0 | $2 | 0)) {
   return $lib_math_NativeMath_atan($0)
  }
  $2 = ($3 >>> 30 | 0) & 2 | 0 | ($4 >>> 31 | 0) | 0;
  $3 = $3 & 2147483647 | 0;
  $4 = $4 & 2147483647 | 0;
  if (!($4 | $5 | 0)) {
   break_0 : {
    case3_0 : {
     case2_0 : {
      case1_0 : {
       if (!$2) {
        break case1_0
       }
       tablify_0 : {
        switch ($2 - 1 | 0 | 0) {
        case 0:
         break case1_0;
        case 1:
         break case2_0;
        case 2:
         break case3_0;
        default:
         break tablify_0;
        };
       }
       break break_0;
      }
      return $0;
     }
     return 3.141592653589793;
    }
    return -3.141592653589793;
   }
  }
  folding_inner0 : {
   if (!($3 | $6 | 0)) {
    break folding_inner0
   }
   if (($3 | 0) == (2146435072 | 0)) {
    $3 = $2 & 2 | 0;
    $0 = ($4 | 0) == (2146435072 | 0) ? ($3 ? 2.356194490192345 : .7853981633974483) : $3 ? 3.141592653589793 : 0.0;
    return $2 & 1 | 0 ? -$0 : $0;
   }
   if (($3 + 67108864 | 0) >>> 0 < $4 >>> 0 ? 1 : ($4 | 0) == (2146435072 | 0)) {
    break folding_inner0
   }
   if ($2 & 2 | 0 ? ($4 + 67108864 | 0) >>> 0 < $3 >>> 0 : 0) {
    $0 = 0.0
   } else {
    $0 = $lib_math_NativeMath_atan(Math_abs($0 / $1))
   }
   break_1 : {
    case3_1 : {
     case2_1 : {
      case1_1 : {
       if ($2) {
        switch ($2 - 1 | 0 | 0) {
        case 0:
         break case1_1;
        case 1:
         break case2_1;
        case 2:
         break case3_1;
        default:
         break break_1;
        }
       }
       return $0;
      }
      return -$0;
     }
     return 3.141592653589793 - ($0 - 1.2246467991473532e-16);
    }
    return $0 - 1.2246467991473532e-16 - 3.141592653589793;
   }
   abort();
  }
  return $2 & 1 | 0 ? -1.5707963267948966 : 1.5707963267948966;
 }
 
 function index_solveArcStatic() {
  var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0, $8 = 0;
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_output));
  $3 = $lib_typedarray_Float64Array___get(index_input, 5);
  $5 = $lib_typedarray_Float64Array___get(index_input, 6);
  $0 = $lib_typedarray_Float64Array___get(index_input, 7);
  $2 = $lib_typedarray_Float64Array___get(index_input, 8);
  $6 = $lib_typedarray_Float64Array___get(index_input, 9);
  $4 = $lib_typedarray_Float64Array___get(index_input, 10);
  $1 = $lib_typedarray_Float64Array___get(index_input, 11);
  $7 = $lib_typedarray_Float64Array___get(index_input, 12);
  $6 = $6 - $3;
  $3 = $4 - $5;
  $5 = $1 - $0;
  $0 = Math_sqrt($6 * $6 + $3 * $3 + $5 * $5);
  $4 = $7 * $0;
  $1 = $2 * $2;
  $0 = $1 * $2 * $2 - $7 * ($4 * $0 + 2.0 * $3 * $1);
  if ($0 < 0.0) {
   return 0 | 0
  }
  $7 = Math_sqrt($0);
  $0 = $lib_math_NativeMath_atan2($1 - $7, $4);
  $4 = $lib_math_NativeMath_atan2($1 + $7, $4);
  $8 = $0 != $4 ? 2 : 1;
  $1 = $6 * $6 + $3 * $3 + $5 * $5;
  if ($1 > 0.0) {
   $1 = 1.0 / Math_sqrt($1);
   $6 = $6 * $1;
   $5 = $5 * $1;
   $3 = $3 * $1;
  }
  $lib_typedarray_Float64Array___set(index_output, 6, $6 * $lib_math_NativeMath_cos($0) * $2);
  $lib_typedarray_Float64Array___set(index_output, 7, $3 * $lib_math_NativeMath_cos($0) * $2 + $lib_math_NativeMath_sin($0) * $2);
  $lib_typedarray_Float64Array___set(index_output, 8, $5 * $lib_math_NativeMath_cos($0) * $2);
  if ($8 >>> 0 > 1 >>> 0) {
   $lib_typedarray_Float64Array___set(index_output, 9, $6 * $lib_math_NativeMath_cos($4) * $2);
   $lib_typedarray_Float64Array___set(index_output, 10, $3 * $lib_math_NativeMath_cos($4) * $2 + $lib_math_NativeMath_sin($4) * $2);
   $lib_typedarray_Float64Array___set(index_output, 11, $5 * $lib_math_NativeMath_cos($4) * $2);
  }
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_input));
  return $8 | 0;
 }
 
 function $lib_util_sort_insertionSort_f64_($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0.0, $5 = 0.0, $6 = 0;
  for_loop_0 : while (1) {
   if (($3 | 0) < ($1 | 0)) {
    $4 = HEAPF64[(($3 << 3 | 0) + $0 | 0) >> 3];
    $2 = $3 - 1 | 0;
    while_continue_1 : while (1) {
     if (($2 | 0) >= (0 | 0)) {
      while_break_1 : {
       $argumentsLength = 2;
       $5 = HEAPF64[(($2 << 3 | 0) + $0 | 0) >> 3];
       if ((FUNCTION_TABLE[HEAP32[1584 >> 2]]($4, $5) | 0 | 0) >= (0 | 0)) {
        break while_break_1
       }
       $6 = $2;
       $2 = $2 - 1 | 0;
       HEAPF64[((($6 + 1 | 0) << 3 | 0) + $0 | 0) >> 3] = $5;
       continue while_continue_1;
      }
     }
     break while_continue_1;
    };
    HEAPF64[((($2 + 1 | 0) << 3 | 0) + $0 | 0) >> 3] = $4;
    $3 = $3 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
 }
 
 function $lib_rt_tlsf_freeBlock($0, $1) {
  HEAP32[$1 >> 2] = HEAP32[$1 >> 2] | 1 | 0;
  $lib_rt_tlsf_insertBlock($0, $1);
 }
 
 function $lib_util_sort_weakHeapSort_f64_($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0.0, $5 = 0, $6 = 0.0, $7 = 0;
  $2 = (($1 + 31 | 0) >>> 5 | 0) << 2 | 0;
  $5 = $lib_rt_tlsf___alloc($2, 0);
  $lib_memory_memory_fill($5, $2);
  $3 = $1 - 1 | 0;
  for_loop_0 : while (1) {
   if (($3 | 0) > (0 | 0)) {
    $2 = $3;
    while_continue_1 : while (1) {
     if (($2 & 1 | 0 | 0) == ((HEAP32[((($2 >>> 6 | 0) << 2 | 0) + $5 | 0) >> 2] >>> (($2 >> 1 | 0) & 31 | 0) | 0) & 1 | 0 | 0)) {
      $2 = $2 >> 1 | 0;
      continue while_continue_1;
     }
     break while_continue_1;
    };
    $argumentsLength = 2;
    $2 = $2 >> 1 | 0;
    $4 = HEAPF64[(($2 << 3 | 0) + $0 | 0) >> 3];
    $6 = HEAPF64[(($3 << 3 | 0) + $0 | 0) >> 3];
    if ((FUNCTION_TABLE[HEAP32[1584 >> 2]]($4, $6) | 0 | 0) < (0 | 0)) {
     $7 = (($3 >>> 5 | 0) << 2 | 0) + $5 | 0;
     HEAP32[$7 >> 2] = HEAP32[$7 >> 2] ^ (1 << ($3 & 31 | 0) | 0) | 0;
     HEAPF64[(($3 << 3 | 0) + $0 | 0) >> 3] = $4;
     HEAPF64[(($2 << 3 | 0) + $0 | 0) >> 3] = $6;
    }
    $3 = $3 - 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $3 = $1 - 1 | 0;
  for_loop_2 : while (1) {
   if (($3 | 0) >= (2 | 0)) {
    $4 = HEAPF64[$0 >> 3];
    $1 = ($3 << 3 | 0) + $0 | 0;
    HEAPF64[$0 >> 3] = HEAPF64[$1 >> 3];
    HEAPF64[$1 >> 3] = $4;
    $1 = 1;
    while_continue_3 : while (1) {
     $2 = ((HEAP32[((($1 >>> 5 | 0) << 2 | 0) + $5 | 0) >> 2] >>> ($1 & 31 | 0) | 0) & 1 | 0) + ($1 << 1 | 0) | 0;
     if (($2 | 0) < ($3 | 0)) {
      $1 = $2;
      continue while_continue_3;
     }
     break while_continue_3;
    };
    while_continue_4 : while (1) {
     if (($1 | 0) > (0 | 0)) {
      $argumentsLength = 2;
      $4 = HEAPF64[$0 >> 3];
      $6 = HEAPF64[(($1 << 3 | 0) + $0 | 0) >> 3];
      if ((FUNCTION_TABLE[HEAP32[1584 >> 2]]($4, $6) | 0 | 0) < (0 | 0)) {
       $2 = (($1 >>> 5 | 0) << 2 | 0) + $5 | 0;
       $7 = HEAP32[$2 >> 2] ^ (1 << ($1 & 31 | 0) | 0) | 0;
       HEAP32[$2 >> 2] = $7;
       HEAPF64[(($1 << 3 | 0) + $0 | 0) >> 3] = $4;
       HEAPF64[$0 >> 3] = $6;
      }
      $1 = $1 >> 1 | 0;
      continue while_continue_4;
     }
     break while_continue_4;
    };
    $3 = $3 - 1 | 0;
    continue for_loop_2;
   }
   break for_loop_2;
  };
  $2 = $lib_rt_tlsf_maybeInitialize();
  $1 = $5 - 16 | 0;
  $lib_rt_tlsf_freeBlock($2, $1);
  $4 = HEAPF64[($0 + 8 | 0) >> 3];
  HEAPF64[($0 + 8 | 0) >> 3] = HEAPF64[$0 >> 3];
  HEAPF64[$0 >> 3] = $4;
 }
 
 function $lib_util_sort_COMPARATOR_f64__anonymous_0($0, $1) {
  $0 = +$0;
  $1 = +$1;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  wasm2js_scratch_store_f64(+$0);
  $3 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $2 = $3 >> 31 | 0;
  $5 = (wasm2js_scratch_load_i32(0 | 0) | 0) ^ (($2 & 1 | 0) << 31 | 0 | ($2 >>> 1 | 0) | 0) | 0;
  $3 = ($2 >>> 1 | 0) ^ $3 | 0;
  wasm2js_scratch_store_f64(+$1);
  $4 = wasm2js_scratch_load_i32(1 | 0) | 0;
  $2 = $4 >> 31 | 0;
  $6 = $2 >>> 1 | 0;
  $2 = (($2 & 1 | 0) << 31 | 0 | ($2 >>> 1 | 0) | 0) ^ (wasm2js_scratch_load_i32(0 | 0) | 0) | 0;
  $4 = $4 ^ $6 | 0;
  return (($3 | 0) > ($4 | 0) ? 1 : ($3 | 0) >= ($4 | 0) ? $5 >>> 0 > $2 >>> 0 : 0) - (($3 | 0) < ($4 | 0) ? 1 : ($3 | 0) <= ($4 | 0) ? $5 >>> 0 < $2 >>> 0 : 0) | 0 | 0;
 }
 
 function $lib_typedarray_Float64Array_copyWithin($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $7 = $lib_rt_pure___retain($0);
  $5 = HEAP32[($7 + 8 | 0) >> 2] >>> 3 | 0;
  $0 = ($3 | 0) < ($5 | 0);
  $6 = $0 ? $3 : $5;
  $4 = HEAP32[($7 + 4 | 0) >> 2];
  $3 = $4;
  if (($1 | 0) < (0 | 0)) {
   $0 = $1 + $5 | 0;
   $1 = ($0 | 0) > (0 | 0);
   $1 = $1 ? $0 : 0;
  } else {
   $1 = ($1 | 0) < ($5 | 0) ? $1 : $5
  }
  $3 = $3 + ($1 << 3 | 0) | 0;
  if (($2 | 0) < (0 | 0)) {
   $0 = $2 + $5 | 0;
   $2 = ($0 | 0) > (0 | 0);
   $0 = $2 ? $0 : 0;
  } else {
   $0 = ($2 | 0) < ($5 | 0) ? $2 : $5
  }
  $2 = ($0 << 3 | 0) + $4 | 0;
  if (($6 | 0) < (0 | 0)) {
   $4 = $5 + $6 | 0;
   $6 = ($4 | 0) > (0 | 0);
   $4 = $6 ? $4 : 0;
  } else {
   $4 = ($6 | 0) < ($5 | 0) ? $6 : $5
  }
  $0 = $4 - $0 | 0;
  $1 = $5 - $1 | 0;
  $4 = ($0 | 0) < ($1 | 0);
  $4 = ($4 ? $0 : $1) << 3 | 0;
  if (($2 | 0) != ($3 | 0)) {
   if ($3 >>> 0 < $2 >>> 0) {
    while_continue_0 : while (1) {
     if ($4) {
      $0 = $3;
      $3 = $0 + 1 | 0;
      $1 = $2;
      $2 = $1 + 1 | 0;
      HEAP8[$0 >> 0] = HEAPU8[$1 >> 0];
      $4 = $4 - 1 | 0;
      continue while_continue_0;
     }
     break while_continue_0;
    }
   } else {
    while_continue_1 : while (1) {
     if ($4) {
      $4 = $4 - 1 | 0;
      $0 = $4 + $2 | 0;
      HEAP8[($3 + $4 | 0) >> 0] = HEAPU8[$0 >> 0];
      continue while_continue_1;
     }
     break while_continue_1;
    }
   }
  }
  return $7;
 }
 
 function index_solveArcMoving() {
  var $0 = 0, $1 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0.0, $7 = 0.0, $8 = 0.0, $9 = 0.0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0.0, $14 = 0.0, $15 = 0.0, $16 = 0, $17 = 0.0, $18 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_output));
  $0 = 6;
  $6 = $lib_typedarray_Float64Array___get(index_input, 5);
  $7 = $lib_typedarray_Float64Array___get(index_input, 6);
  $8 = $lib_typedarray_Float64Array___get(index_input, 7);
  $1 = $lib_typedarray_Float64Array___get(index_input, 8);
  $12 = $lib_typedarray_Float64Array___get(index_input, 9);
  $13 = $lib_typedarray_Float64Array___get(index_input, 10);
  $17 = $lib_typedarray_Float64Array___get(index_input, 11);
  $14 = $lib_typedarray_Float64Array___get(index_input, 12);
  $9 = $lib_typedarray_Float64Array___get(index_input, 13);
  $15 = $lib_typedarray_Float64Array___get(index_input, 14);
  $10 = -.5 * $lib_typedarray_Float64Array___get(index_input, 15);
  $lib_typedarray_Float64Array___set(index_input, 0, $10 * $10);
  $lib_typedarray_Float64Array___set(index_input, 1, 2.0 * $9 * $10);
  $7 = $13 - $7;
  $13 = 2.0 * $7;
  $lib_typedarray_Float64Array___set(index_input, 2, $9 * $9 + $13 * $10 - $1 * $1 + $14 * $14 + $15 * $15);
  $6 = $12 - $6;
  $8 = $17 - $8;
  $lib_typedarray_Float64Array___set(index_input, 3, $13 * $9 + 2.0 * $6 * $14 + 2.0 * $8 * $15);
  $lib_typedarray_Float64Array___set(index_input, 4, $7 * $7 + $6 * $6 + $8 * $8);
  $18 = index_SolveQuartic();
  $3 = $lib_rt_pure___retain(index_output);
  $2 = HEAP32[($3 + 8 | 0) >> 2];
  $4 = $lib_rt_tlsf___alloc(12, 3);
  (wasm2js_i32$0 = $4, wasm2js_i32$1 = $lib_rt_pure___retain(HEAP32[$3 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
  $2 = $2 >>> 3 | 0;
  $5 = (0 | 0) < ($2 | 0);
  $5 = $5 ? 0 : $2;
  HEAP32[($4 + 4 | 0) >> 2] = HEAP32[($3 + 4 | 0) >> 2] + ($5 << 3 | 0) | 0;
  $2 = (4 | 0) < ($2 | 0) ? 4 : $2;
  HEAP32[($4 + 8 | 0) >> 2] = ((($2 | 0) > ($5 | 0) ? $2 : $5) - $5 | 0) << 3 | 0;
  $2 = $lib_rt_pure___retain($4);
  $lib_rt_pure___release($3);
  $argumentsLength = 0;
  $5 = $lib_rt_pure___retain($2);
  $4 = HEAP32[($5 + 8 | 0) >> 2] >>> 3 | 0;
  $lib_typedarray_SORT__lib_typedarray_Float64Array_f64__inlined_0 : {
   if (($4 | 0) <= (1 | 0)) {
    break $lib_typedarray_SORT__lib_typedarray_Float64Array_f64__inlined_0
   }
   $3 = HEAP32[($5 + 4 | 0) >> 2];
   if (($4 | 0) == (2 | 0)) {
    $argumentsLength = 2;
    $1 = HEAPF64[($3 + 8 | 0) >> 3];
    $12 = HEAPF64[$3 >> 3];
    if ((FUNCTION_TABLE[HEAP32[1584 >> 2]]($1, $12) | 0 | 0) < (0 | 0)) {
     HEAPF64[($3 + 8 | 0) >> 3] = $12;
     HEAPF64[$3 >> 3] = $1;
    }
    break $lib_typedarray_SORT__lib_typedarray_Float64Array_f64__inlined_0;
   }
   if (($4 | 0) < (256 | 0)) {
    $lib_util_sort_insertionSort_f64_($3, $4)
   } else {
    $lib_util_sort_weakHeapSort_f64_($3, $4)
   }
  }
  $lib_rt_pure___release($5);
  for_loop_1 : while (1) {
   if (($16 & 255 | 0) >>> 0 < $18 >>> 0 ? ($11 & 255 | 0) >>> 0 < 2 >>> 0 : 0) {
    $1 = $lib_typedarray_Float64Array___get(index_output, $16 & 255 | 0);
    if (!($1 <= 0.0)) {
     $lib_typedarray_Float64Array___set(index_output, $0 & 255 | 0, ($6 + $14 * $1) / $1);
     $0 = $0 + 1 | 0;
     $lib_typedarray_Float64Array___set(index_output, $0 & 255 | 0, ($7 + $9 * $1 - $10 * $1 * $1) / $1);
     $0 = $0 + 1 | 0;
     $lib_typedarray_Float64Array___set(index_output, $0 & 255 | 0, ($8 + $15 * $1) / $1);
     $11 = $11 + 1 | 0;
     $0 = $0 + 1 | 0;
    }
    $16 = $16 + 1 | 0;
    continue for_loop_1;
   }
   break for_loop_1;
  };
  if (($11 & 255 | 0) >>> 0 > 0 >>> 0) {
   $lib_rt_pure___release($lib_typedarray_Float64Array_copyWithin(index_output, ($0 + 6 | 0) & 255 | 0, $0 & 255 | 0, ($0 + 3 | 0) & 255 | 0))
  }
  if (($11 & 255 | 0) >>> 0 > 1 >>> 0) {
   $lib_rt_pure___release($lib_typedarray_Float64Array_copyWithin(index_output, ($0 + 9 | 0) & 255 | 0, ($0 + 3 | 0) & 255 | 0, ($0 + 6 | 0) & 255 | 0))
  }
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_input));
  $lib_rt_pure___release($2);
  return $11 & 255 | 0 | 0;
 }
 
 function index_solveLateralStatic() {
  var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0.0, $7 = 0.0;
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_output));
  $0 = $lib_typedarray_Float64Array___get(index_input, 5);
  $5 = $lib_typedarray_Float64Array___get(index_input, 6);
  $1 = $lib_typedarray_Float64Array___get(index_input, 7);
  $2 = $lib_typedarray_Float64Array___get(index_input, 8);
  $6 = $lib_typedarray_Float64Array___get(index_input, 9);
  $3 = $lib_typedarray_Float64Array___get(index_input, 10);
  $4 = $lib_typedarray_Float64Array___get(index_input, 11);
  $7 = $lib_typedarray_Float64Array___get(index_input, 12);
  $0 = $2 - $0;
  $1 = $3 - $1;
  $2 = Math_sqrt($0 * $0 + $1 * $1);
  if ($2 == 0.0) {
   return 0 | 0
  }
  $2 = $2 / $4;
  $3 = $0 * $0 + $1 * $1;
  if ($3 > 0.0) {
   $3 = 1.0 / Math_sqrt($3);
   $0 = $0 * $3;
   $1 = $1 * $3;
  }
  $lib_typedarray_Float64Array___set(index_output, 6, $0 * $4);
  $lib_typedarray_Float64Array___set(index_output, 7, -(3.0 * $5 - 4.0 * $7 + $6) / $2);
  $lib_typedarray_Float64Array___set(index_output, 8, $1 * $4);
  $lib_typedarray_Float64Array___set(index_output, 9, -4.0 * ($5 - 2.0 * $7 + $6) / ($2 * $2));
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_input));
  return 1 | 0;
 }
 
 function index_solveLateralMoving() {
  var $0 = 0.0, $1 = 0.0, $2 = 0.0, $3 = 0.0, $4 = 0.0, $5 = 0.0, $6 = 0, $7 = 0.0, $8 = 0.0, $9 = 0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $14 = 0.0;
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_output));
  $3 = $lib_typedarray_Float64Array___get(index_input, 5);
  $10 = $lib_typedarray_Float64Array___get(index_input, 6);
  $12 = $lib_typedarray_Float64Array___get(index_input, 7);
  $7 = $lib_typedarray_Float64Array___get(index_input, 8);
  $1 = $lib_typedarray_Float64Array___get(index_input, 9);
  $13 = $lib_typedarray_Float64Array___get(index_input, 10);
  $8 = $lib_typedarray_Float64Array___get(index_input, 11);
  $2 = $lib_typedarray_Float64Array___get(index_input, 12);
  $5 = $lib_typedarray_Float64Array___get(index_input, 13);
  $4 = $lib_typedarray_Float64Array___get(index_input, 14);
  $14 = $lib_typedarray_Float64Array___get(index_input, 15);
  $lib_typedarray_Float64Array___set(index_input, 0, $2 * $2 + $4 * $4 - $8 * $8);
  $0 = $7 - $3;
  $11 = $13 - $12;
  $lib_typedarray_Float64Array___set(index_input, 1, 2.0 * $0 * $2 + $11 * $4);
  $lib_typedarray_Float64Array___set(index_input, 2, $0 * $0 + $11 * $11);
  $6 = index_SolveQuadric(0, 1);
  if ($6 >>> 0 > 0 >>> 0) {
   $9 = $lib_typedarray_Float64Array___get(index_output, 0) > 0.0
  } else {
   $9 = 0
  }
  $0 = $1;
  if ($6 >>> 0 > 1 >>> 0) {
   $6 = $lib_typedarray_Float64Array___get(index_output, 1) > 0.0
  } else {
   $6 = 0
  }
  if ($9 ? 0 : !$6) {
   return 0 | 0
  } else {
   if ($9 ? $6 : 0) {
    $1 = Math_min($lib_typedarray_Float64Array___get(index_output, 0), $lib_typedarray_Float64Array___get(index_output, 1))
   } else {
    if ($9) {
     $1 = $lib_typedarray_Float64Array___get(index_output, 0)
    } else {
     $1 = $lib_typedarray_Float64Array___get(index_output, 1)
    }
   }
  }
  $5 = $0 + $5 * $1;
  $7 = $7 + $2 * $1;
  $0 = $7 - $3;
  $4 = $13 + $4 * $1;
  $2 = $4 - $12;
  $3 = $0 * $0 + $2 * $2;
  if ($3 > 0.0) {
   $3 = 1.0 / Math_sqrt($3);
   $0 = $0 * $3;
   $2 = $2 * $3;
  }
  $lib_typedarray_Float64Array___set(index_output, 6, $0 * $8);
  $0 = Math_max($10, $5) + $14;
  $lib_typedarray_Float64Array___set(index_output, 7, -(3.0 * $10 - 4.0 * $0 + $5) / $1);
  $lib_typedarray_Float64Array___set(index_output, 8, $2 * $8);
  $lib_typedarray_Float64Array___set(index_output, 9, $7);
  $lib_typedarray_Float64Array___set(index_output, 10, $5);
  $lib_typedarray_Float64Array___set(index_output, 11, $4);
  $lib_typedarray_Float64Array___set(index_output, 12, -4.0 * ($10 - 2.0 * $0 + $5) / ($1 * $1));
  $lib_rt_pure___release($lib_typedarray_Float64Array_fill(index_input));
  return 1 | 0;
 }
 
 function $start() {
  index_input = $lib_typedarray_Float64Array_constructor();
  index_output = $lib_typedarray_Float64Array_constructor();
 }
 
 function $lib_rt_pure___collect() {
  
 }
 
 function $lib_rt_pure_decrement($0) {
  var $1 = 0, $2 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2];
  $2 = $1 & 268435455 | 0;
  if (($2 | 0) == (1 | 0)) {
   __inlined_func$_lib_rt___visit_members : {
    switch$1$default : {
     switch (HEAP32[($0 + 8 | 0) >> 2] | 0) {
     case 2:
     case 3:
      $1 = HEAP32[($0 + 16 | 0) >> 2];
      if ($1) {
       $lib_rt_pure___visit($1)
      }
      break __inlined_func$_lib_rt___visit_members;
     case 4:
      $lib_rt_pure___visit(HEAP32[($0 + 20 | 0) >> 2]);
      break __inlined_func$_lib_rt___visit_members;
     case 0:
     case 1:
      break __inlined_func$_lib_rt___visit_members;
     default:
      break switch$1$default;
     };
    }
    abort();
   }
   $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT, $0);
  } else {
   HEAP32[($0 + 4 | 0) >> 2] = $2 - 1 | 0 | ($1 & -268435456 | 0) | 0
  }
 }
 
 function $lib_rt_pure___visit($0) {
  if ($0 >>> 0 < 1644 >>> 0) {
   return
  }
  $lib_rt_pure_decrement($0 - 16 | 0);
 }
 
 function index_SolveQuadric_varargs($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2of2 : {
   switch ($argumentsLength | 0) {
   default:
    abort();
   case 0:
    $0 = 0;
   case 1:
    $1 = 1;
    break;
   case 2:
    break $2of2;
   };
  }
  return index_SolveQuadric($0, $1) | 0;
 }
 
 function $setArgumentsLength($0) {
  $0 = $0 | 0;
  $argumentsLength = $0;
 }
 
 function __wasm_ctz_i32($0) {
  if ($0) {
   return 31 - Math_clz32(($0 + -1 | 0) ^ $0 | 0) | 0
  }
  return 32;
 }
 
 function __wasm_i64_mul($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $4 = $2 & 65535 | 0;
  $5 = $0 & 65535 | 0;
  $6 = Math_imul($4, $5);
  $7 = $0 >>> 16 | 0;
  $4 = ($6 >>> 16 | 0) + Math_imul($4, $7) | 0;
  $8 = $2 >>> 16 | 0;
  $5 = Math_imul($5, $8) + ($4 & 65535 | 0) | 0;
  i64toi32_i32$HIGH_BITS = (((Math_imul($7, $8) + Math_imul($1, $2) | 0) + Math_imul($0, $3) | 0) + ($4 >>> 16 | 0) | 0) + ($5 >>> 16 | 0) | 0;
  return $6 & 65535 | 0 | ($5 << 16 | 0) | 0;
 }
 
 function __wasm_nearest_f64($0) {
  var $1 = 0.0, $2 = 0.0;
  $1 = Math_floor($0);
  $2 = $0 - $1;
  if (!($2 < .5)) {
   $0 = Math_ceil($0);
   if ($2 > .5) {
    return $0
   }
   $2 = $1 * .5;
   $1 = $2 - Math_floor($2) == 0.0 ? $1 : $0;
  }
  return $1;
 }
 
 var FUNCTION_TABLE = [null, $lib_util_sort_COMPARATOR_f64__anonymous_0];
 $start();
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__alloc": $lib_rt_tlsf___alloc, 
  "__retain": $lib_rt_pure___retain, 
  "__release": $lib_rt_pure___release, 
  "__collect": $lib_rt_pure___collect, 
  "getInputBufferPtr": index_getInputBufferPtr, 
  "getOutputBufferPtr": index_getOutputBufferPtr, 
  "SolveQuadric": index_SolveQuadric_varargs, 
  "SolveCubic": index_SolveCubic, 
  "SolveQuartic": index_SolveQuartic, 
  "range": index_range, 
  "solveArcStatic": index_solveArcStatic, 
  "solveArcMoving": index_solveArcMoving, 
  "solveLateralStatic": index_solveLateralStatic, 
  "solveLateralMoving": index_solveLateralMoving, 
  "__setArgumentsLength": $setArgumentsLength
 };
}

var memasmFunc = new ArrayBuffer(65536);
var bufferView = new Uint8Array(memasmFunc);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    } 
  }
  base64DecodeToExistingUint8Array(bufferView, 1024, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQ==");
base64DecodeToExistingUint8Array(bufferView, 1088, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 1136, "HAAAAAEAAAABAAAAHAAAAEkAbgB2AGEAbABpAGQAIABsAGUAbgBnAHQAaA==");
base64DecodeToExistingUint8Array(bufferView, 1184, "JgAAAAEAAAABAAAAJgAAAH4AbABpAGIALwBhAHIAcgBhAHkAYgB1AGYAZgBlAHIALgB0AHM=");
base64DecodeToExistingUint8Array(bufferView, 1248, "JAAAAAEAAAABAAAAJAAAAEkAbgBkAGUAeAAgAG8AdQB0ACAAbwBmACAAcgBhAG4AZwBl");
base64DecodeToExistingUint8Array(bufferView, 1312, "JAAAAAEAAAABAAAAJAAAAH4AbABpAGIALwB0AHkAcABlAGQAYQByAHIAYQB5AC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 1368, "boP5ogAAAADRVyf8KRVETpmVYtvA3TT1q2NR/kGQQzw6biS3YcW73uouSQbg0k1CHOsd/hyS0Qn1NYLoPqcpsSZwnOmERLsuOdaROUF+X7SLX4Sc9DlTg/+X+B87KPm9ixEv7w+YBd7PfjZtH20KWmY/Rk+3Ccsnx7ondS3qX573OQc9e/Hl67Ff+2vqklKKRjADVghdjR8gvM/wq2t7/GGR46kdNvSaX4WZZQgb5l6A2P+NQGigFFcVBgYxJ3NN");
base64DecodeToExistingUint8Array(bufferView, 1568, "CAAAAAEAAAAEAAAACAAAAAE=");
base64DecodeToExistingUint8Array(bufferView, 1600, "BQAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAACEaAAACAAAAIA==");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var getInputBufferPtr = retasmFunc.getInputBufferPtr;
export var getOutputBufferPtr = retasmFunc.getOutputBufferPtr;
export var SolveQuadric = retasmFunc.SolveQuadric;
export var SolveCubic = retasmFunc.SolveCubic;
export var SolveQuartic = retasmFunc.SolveQuartic;
export var range = retasmFunc.range;
export var solveArcStatic = retasmFunc.solveArcStatic;
export var solveArcMoving = retasmFunc.solveArcMoving;
export var solveLateralStatic = retasmFunc.solveLateralStatic;
export var solveLateralMoving = retasmFunc.solveLateralMoving;
export var __setArgumentsLength = retasmFunc.__setArgumentsLength;
