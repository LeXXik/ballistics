(module
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $f64_f64_=>_i32 (func (param f64 f64) (result i32)))
 (type $f64_=>_f64 (func (param f64) (result f64)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_f64_=>_none (func (param i32 i32 f64)))
 (type $f64_=>_none (func (param f64)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i64_=>_i32 (func (param i64) (result i32)))
 (type $i32_i32_=>_f64 (func (param i32 i32) (result f64)))
 (type $f64_f64_=>_f64 (func (param f64 f64) (result f64)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (memory $0 1)
 (data (i32.const 1024) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1088) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1136) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1184) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s")
 (data (i32.const 1248) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1312) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1368) "n\83\f9\a2\00\00\00\00\d1W\'\fc)\15DN\99\95b\db\c0\dd4\f5\abcQ\feA\90C<:n$\b7a\c5\bb\de\ea.I\06\e0\d2MB\1c\eb\1d\fe\1c\92\d1\t\f55\82\e8>\a7)\b1&p\9c\e9\84D\bb.9\d6\919A~_\b4\8b_\84\9c\f49S\83\ff\97\f8\1f;(\f9\bd\8b\11/\ef\0f\98\05\de\cf~6m\1fm\nZf?FO\b7\t\cb\'\c7\ba\'u-\ea_\9e\f79\07={\f1\e5\eb\b1_\fbk\ea\92R\8aF0\03V\08]\8d\1f \bc\cf\f0\abk{\fca\91\e3\a9\1d6\f4\9a_\85\99e\08\1b\e6^\80\d8\ff\8d@h\a0\14W\15\06\061\'sM")
 (data (i32.const 1568) "\08\00\00\00\01\00\00\00\04\00\00\00\08\00\00\00\01")
 (data (i32.const 1600) "\05\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00!\1a\00\00\02\00\00\00 ")
 (table $0 2 funcref)
 (elem (i32.const 1) $~lib/util/sort/COMPARATOR<f64>~anonymous|0)
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $index/INPUT_BUFFER_OFFSET i32 (i32.const 5))
 (global $index/OUTPUT_BUFFER_OFFSET i32 (i32.const 6))
 (global $index/input (mut i32) (i32.const 0))
 (global $index/output (mut i32) (i32.const 0))
 (global $~lib/math/rempio2_y0 (mut f64) (f64.const 0))
 (global $~lib/math/rempio2_y1 (mut f64) (f64.const 0))
 (global $~lib/math/res128_hi (mut i64) (i64.const 0))
 (global $~lib/math/NativeMath.sincos_sin (mut f64) (f64.const 0))
 (global $~lib/math/NativeMath.sincos_cos (mut f64) (f64.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 1600))
 (export "memory" (memory $0))
 (export "__alloc" (func $~lib/rt/tlsf/__alloc))
 (export "__retain" (func $~lib/rt/pure/__retain))
 (export "__release" (func $~lib/rt/pure/__release))
 (export "__collect" (func $~lib/rt/pure/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "INPUT_BUFFER_OFFSET" (global $index/INPUT_BUFFER_OFFSET))
 (export "OUTPUT_BUFFER_OFFSET" (global $index/OUTPUT_BUFFER_OFFSET))
 (export "getInputBufferPtr" (func $index/getInputBufferPtr))
 (export "getOutputBufferPtr" (func $index/getOutputBufferPtr))
 (export "SolveQuadric" (func $index/SolveQuadric@varargs))
 (export "SolveCubic" (func $index/SolveCubic))
 (export "SolveQuartic" (func $index/SolveQuartic))
 (export "range" (func $index/range))
 (export "solveArcStatic" (func $index/solveArcStatic))
 (export "solveArcMoving" (func $index/solveArcMoving))
 (export "solveLateralStatic" (func $index/solveLateralStatic))
 (export "solveLateralMoving" (func $index/solveLateralMoving))
 (export "__setArgumentsLength" (func $~setArgumentsLength))
 (start $~start)
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  i32.const -4
  i32.and
  local.tee $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.tee $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $2
   i32.const 7
   i32.sub
   local.set $4
  end
  local.get $1
  i32.load offset=20
  local.set $2
  local.get $1
  i32.load offset=16
  local.tee $5
  if
   local.get $5
   local.get $2
   i32.store offset=20
  end
  local.get $2
  if
   local.get $2
   local.get $5
   i32.store offset=16
  end
  local.get $1
  local.get $0
  local.get $3
  local.get $4
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $3
   local.get $4
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $2
   i32.store offset=96
   local.get $2
   i32.eqz
   if
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    local.tee $2
    i32.load offset=4
    i32.const 1
    local.get $3
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.set $1
    local.get $2
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $4
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.load
  local.set $4
  local.get $1
  i32.const 16
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $5
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $4
   i32.const -4
   i32.and
   i32.const 16
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    local.get $4
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $1
    i32.const 16
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $5
    i32.load
    local.set $2
   end
  end
  local.get $4
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $3
   i32.load
   local.tee $7
   i32.const -4
   i32.and
   i32.const 16
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $8
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    local.get $8
    local.get $7
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $3
    local.set $1
   end
  end
  local.get $5
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $5
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $4
  i32.const -4
  i32.and
  local.tee $3
  i32.const 256
  i32.lt_u
  if
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $4
   i32.const 7
   i32.sub
   local.set $6
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  local.get $4
  i32.store offset=20
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=16
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $6
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $2
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $3
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 48
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $3
  i32.const 2
  i32.and
  local.get $2
  i32.const 32
  i32.sub
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  i32.const 0
  i32.store offset=20
  local.get $1
  local.get $2
  i32.add
  i32.const 16
  i32.sub
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/maybeInitialize (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/rt/tlsf/ROOT
  local.tee $2
  i32.eqz
  if
   i32.const 1
   memory.size
   local.tee $0
   i32.gt_s
   if (result i32)
    i32.const 1
    local.get $0
    i32.sub
    memory.grow
    i32.const 0
    i32.lt_s
   else
    i32.const 0
   end
   if
    unreachable
   end
   i32.const 1648
   local.set $2
   i32.const 1648
   i32.const 0
   i32.store
   i32.const 3216
   i32.const 0
   i32.store
   loop $for-loop|0
    local.get $1
    i32.const 23
    i32.lt_u
    if
     local.get $1
     i32.const 2
     i32.shl
     i32.const 1648
     i32.add
     i32.const 0
     i32.store offset=4
     i32.const 0
     local.set $0
     loop $for-loop|1
      local.get $0
      i32.const 16
      i32.lt_u
      if
       local.get $0
       local.get $1
       i32.const 4
       i32.shl
       i32.add
       i32.const 2
       i32.shl
       i32.const 1648
       i32.add
       i32.const 0
       i32.store offset=96
       local.get $0
       i32.const 1
       i32.add
       local.set $0
       br $for-loop|1
      end
     end
     local.get $1
     i32.const 1
     i32.add
     local.set $1
     br $for-loop|0
    end
   end
   i32.const 1648
   i32.const 3232
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   i32.const 1648
   global.set $~lib/rt/tlsf/ROOT
  end
  local.get $2
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870904
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.set $2
   local.get $1
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 4
    i32.shl
    local.get $0
    local.get $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    i32.ctz
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  local.tee $3
  i32.const 1073741808
  i32.ge_u
  if
   i32.const 1040
   i32.const 1104
   i32.const 461
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  i32.const 15
  i32.add
  i32.const -16
  i32.and
  local.tee $1
  i32.const 16
  local.get $1
  i32.const 16
  i32.gt_u
  select
  local.tee $4
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    i32.const 16
    memory.size
    local.tee $1
    i32.const 16
    i32.shl
    i32.const 16
    i32.sub
    local.get $0
    i32.load offset=1568
    i32.ne
    i32.shl
    local.get $4
    i32.const 1
    i32.const 27
    local.get $4
    i32.clz
    i32.sub
    i32.shl
    i32.const 1
    i32.sub
    i32.add
    local.get $4
    local.get $4
    i32.const 536870904
    i32.lt_u
    select
    i32.add
    i32.const 65535
    i32.add
    i32.const -65536
    i32.and
    i32.const 16
    i32.shr_u
    local.set $5
    local.get $1
    local.get $5
    local.get $1
    local.get $5
    i32.gt_s
    select
    memory.grow
    i32.const 0
    i32.lt_s
    if
     local.get $5
     memory.grow
     i32.const 0
     i32.lt_s
     if
      unreachable
     end
    end
    local.get $0
    local.get $1
    i32.const 16
    i32.shl
    memory.size
    i32.const 16
    i32.shl
    call $~lib/rt/tlsf/addMemory
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/searchBlock
    local.set $1
   end
  end
  local.get $1
  i32.load
  drop
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $2
  i32.store offset=8
  local.get $1
  local.get $3
  i32.store offset=12
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $1
  i32.load
  local.tee $2
  i32.const -4
  i32.and
  local.get $4
  i32.sub
  local.tee $3
  i32.const 32
  i32.ge_u
  if
   local.get $1
   local.get $4
   local.get $2
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $4
   local.get $1
   i32.const 16
   i32.add
   i32.add
   local.tee $2
   local.get $3
   i32.const 16
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $2
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 16
   i32.add
   local.tee $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
  local.get $1
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (param $1 i32) (result i32)
  call $~lib/rt/tlsf/maybeInitialize
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/allocateBlock
  i32.const 16
  i32.add
 )
 (func $~lib/rt/pure/__retain (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 1644
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   local.tee $1
   local.get $1
   i32.load offset=4
   i32.const 1
   i32.add
   i32.store offset=4
   local.get $1
   i32.load
   drop
  end
  local.get $0
 )
 (func $~lib/rt/pure/__release (param $0 i32)
  local.get $0
  i32.const 1644
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   call $~lib/rt/pure/decrement
  end
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   i32.const 4
   i32.sub
   local.tee $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   i32.const 28
   i32.sub
   local.tee $1
   i32.const 0
   i32.store offset=24
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/typedarray/Float64Array#constructor (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 12
  i32.const 3
  call $~lib/rt/tlsf/__alloc
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.eqz
  if
   i32.const 12
   i32.const 2
   call $~lib/rt/tlsf/__alloc
   call $~lib/rt/pure/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  i32.const 160
  i32.const 0
  call $~lib/rt/tlsf/__alloc
  local.tee $1
  i32.const 160
  call $~lib/memory/memory.fill
  local.get $1
  local.set $2
  local.get $1
  local.get $0
  i32.load
  local.tee $3
  i32.ne
  if
   local.get $2
   call $~lib/rt/pure/__retain
   local.set $2
   local.get $3
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $2
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  i32.const 160
  i32.store offset=8
  local.get $0
 )
 (func $index/getInputBufferPtr (result i32)
  global.get $index/input
  call $~lib/rt/pure/__retain
 )
 (func $index/getOutputBufferPtr (result i32)
  global.get $index/output
  call $~lib/rt/pure/__retain
 )
 (func $~lib/typedarray/Float64Array#__uget (param $0 i32) (param $1 i32) (result f64)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  f64.load
 )
 (func $~lib/typedarray/Float64Array#__uset (param $0 i32) (param $1 i32) (param $2 f64)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 3
  i32.shl
  i32.add
  local.get $2
  f64.store
 )
 (func $index/SolveQuadric (param $0 i32) (param $1 i32) (result i32)
  (local $2 f64)
  (local $3 f64)
  (local $4 f64)
  global.get $index/input
  i32.const 0
  call $~lib/typedarray/Float64Array#__uget
  local.set $3
  global.get $index/input
  i32.const 1
  call $~lib/typedarray/Float64Array#__uget
  local.tee $2
  local.get $2
  f64.mul
  f64.const 4
  local.get $3
  f64.mul
  global.get $index/input
  i32.const 2
  call $~lib/typedarray/Float64Array#__uget
  f64.mul
  f64.sub
  local.tee $4
  f64.abs
  f64.const 1e-09
  f64.lt
  if (result i32)
   local.get $2
   f64.const -0.5
   local.get $3
   f64.div
   f64.mul
   local.set $2
   local.get $0
   local.tee $1
   global.get $index/output
   local.tee $0
   i32.load offset=8
   i32.const 3
   i32.shr_u
   i32.ge_u
   if
    i32.const 1264
    i32.const 1328
    i32.const 1315
    i32.const 64
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load offset=4
   local.get $1
   i32.const 3
   i32.shl
   i32.add
   local.get $2
   f64.store
   i32.const 1
  else
   local.get $4
   f64.const 0
   f64.lt
   if (result i32)
    i32.const 0
   else
    global.get $index/output
    local.get $0
    local.get $2
    local.get $4
    f64.sqrt
    local.tee $4
    f64.sub
    f64.const -0.5
    local.get $3
    f64.div
    local.tee $3
    f64.mul
    call $~lib/typedarray/Float64Array#__uset
    global.get $index/output
    local.get $1
    local.get $2
    local.get $4
    f64.add
    local.get $3
    f64.mul
    call $~lib/typedarray/Float64Array#__uset
    i32.const 2
   end
  end
 )
 (func $~lib/math/NativeMath.cbrt (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 i32)
  (local $3 f64)
  (local $4 i64)
  local.get $0
  i64.reinterpret_f64
  local.tee $4
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  i32.const 2147483647
  i32.and
  local.tee $2
  i32.const 2146435072
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.add
   return
  end
  local.get $2
  i32.const 1048576
  i32.lt_u
  if (result i32)
   local.get $0
   f64.const 18014398509481984
   f64.mul
   i64.reinterpret_f64
   local.tee $4
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $2
   i32.eqz
   if
    local.get $0
    return
   end
   local.get $2
   i32.const 3
   i32.div_u
   i32.const 696219795
   i32.add
  else
   local.get $2
   i32.const 3
   i32.div_u
   i32.const 715094163
   i32.add
  end
  local.set $2
  local.get $4
  i64.const -9223372036854775808
  i64.and
  local.get $2
  i64.extend_i32_u
  i64.const 32
  i64.shl
  i64.or
  f64.reinterpret_i64
  local.tee $3
  local.get $3
  f64.mul
  local.get $3
  local.get $0
  f64.div
  f64.mul
  local.set $1
  local.get $0
  local.get $3
  f64.const 1.87595182427177
  local.get $1
  f64.const -1.8849797954337717
  local.get $1
  f64.const 1.6214297201053545
  f64.mul
  f64.add
  f64.mul
  f64.add
  local.get $1
  local.get $1
  f64.mul
  local.get $1
  f64.mul
  f64.const -0.758397934778766
  local.get $1
  f64.const 0.14599619288661245
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  i64.reinterpret_f64
  i64.const 2147483648
  i64.add
  i64.const -1073741824
  i64.and
  f64.reinterpret_i64
  local.tee $0
  local.get $0
  f64.mul
  f64.div
  local.set $1
  local.get $0
  local.get $0
  local.get $1
  local.get $0
  f64.sub
  f64.const 2
  local.get $0
  f64.mul
  local.get $1
  f64.add
  f64.div
  f64.mul
  f64.add
 )
 (func $~lib/math/R (param $0 f64) (result f64)
  local.get $0
  f64.const 0.16666666666666666
  local.get $0
  f64.const -0.3255658186224009
  local.get $0
  f64.const 0.20121253213486293
  local.get $0
  f64.const -0.04005553450067941
  local.get $0
  f64.const 7.915349942898145e-04
  local.get $0
  f64.const 3.479331075960212e-05
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.const 1
  local.get $0
  f64.const -2.403394911734414
  local.get $0
  f64.const 2.0209457602335057
  local.get $0
  f64.const -0.6882839716054533
  local.get $0
  f64.const 0.07703815055590194
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.div
 )
 (func $~lib/math/NativeMath.acos (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 i32)
  (local $3 i32)
  (local $4 f64)
  local.get $0
  i64.reinterpret_f64
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $3
  i32.const 2147483647
  i32.and
  local.tee $2
  i32.const 1072693248
  i32.ge_u
  if
   local.get $0
   i64.reinterpret_f64
   i32.wrap_i64
   local.get $2
   i32.const 1072693248
   i32.sub
   i32.or
   i32.eqz
   if
    local.get $3
    i32.const 31
    i32.shr_u
    if
     f64.const 3.141592653589793
     return
    end
    f64.const 0
    return
   end
   f64.const 0
   local.get $0
   local.get $0
   f64.sub
   f64.div
   return
  end
  local.get $2
  i32.const 1071644672
  i32.lt_u
  if
   local.get $2
   i32.const 1012924416
   i32.le_u
   if
    f64.const 1.5707963267948966
    return
   end
   f64.const 1.5707963267948966
   local.get $0
   f64.const 6.123233995736766e-17
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   call $~lib/math/R
   f64.mul
   f64.sub
   f64.sub
   f64.sub
   return
  end
  local.get $3
  i32.const 31
  i32.shr_u
  if
   f64.const 2
   f64.const 1.5707963267948966
   f64.const 0.5
   local.get $0
   f64.const 0.5
   f64.mul
   f64.add
   local.tee $0
   f64.sqrt
   local.tee $1
   local.get $0
   call $~lib/math/R
   local.get $1
   f64.mul
   f64.const 6.123233995736766e-17
   f64.sub
   f64.add
   f64.sub
   f64.mul
   return
  end
  f64.const 2
  f64.const 0.5
  local.get $0
  f64.const 0.5
  f64.mul
  f64.sub
  local.tee $1
  f64.sqrt
  local.tee $4
  i64.reinterpret_f64
  i64.const -4294967296
  i64.and
  f64.reinterpret_i64
  local.tee $0
  local.get $1
  call $~lib/math/R
  local.get $4
  f64.mul
  local.get $1
  local.get $0
  local.get $0
  f64.mul
  f64.sub
  local.get $4
  local.get $0
  f64.add
  f64.div
  f64.add
  f64.add
  f64.mul
 )
 (func $~lib/math/pio2_large_quot (param $0 i64) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  (local $4 i64)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i32)
  (local $9 i64)
  (local $10 i64)
  (local $11 i64)
  (local $12 f64)
  local.get $0
  i64.const 9223372036854775807
  i64.and
  i64.const 52
  i64.shr_s
  i64.const 1045
  i64.sub
  local.tee $2
  i64.const 6
  i64.shr_s
  i32.wrap_i64
  i32.const 3
  i32.shl
  i32.const 1368
  i32.add
  local.tee $8
  i64.load
  local.set $6
  local.get $8
  i64.load offset=8
  local.set $3
  local.get $8
  i64.load offset=16
  local.set $1
  local.get $2
  i64.const 63
  i64.and
  local.tee $2
  i64.const 0
  i64.ne
  if
   local.get $6
   local.get $2
   i64.shl
   local.get $3
   i64.const 64
   local.get $2
   i64.sub
   local.tee $4
   i64.shr_u
   i64.or
   local.set $6
   local.get $3
   local.get $2
   i64.shl
   local.get $1
   local.get $4
   i64.shr_u
   i64.or
   local.set $3
   local.get $1
   local.get $2
   i64.shl
   local.get $8
   i64.load offset=24
   local.get $4
   i64.shr_u
   i64.or
   local.set $1
  end
  local.get $0
  i64.const 4503599627370495
  i64.and
  i64.const 4503599627370496
  i64.or
  local.tee $2
  i64.const 4294967295
  i64.and
  local.tee $5
  local.get $3
  i64.const 4294967295
  i64.and
  local.tee $7
  i64.mul
  local.set $4
  local.get $7
  local.get $2
  i64.const 32
  i64.shr_u
  local.tee $7
  i64.mul
  local.get $5
  local.get $3
  i64.const 32
  i64.shr_u
  local.tee $5
  i64.mul
  local.get $4
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $9
  i64.const 4294967295
  i64.and
  i64.add
  local.set $3
  local.get $5
  local.get $7
  i64.mul
  local.get $9
  i64.const 32
  i64.shr_u
  i64.add
  local.get $3
  i64.const 32
  i64.shr_u
  i64.add
  global.set $~lib/math/res128_hi
  global.get $~lib/math/res128_hi
  local.get $2
  local.get $6
  i64.mul
  i64.add
  local.get $1
  i64.const 32
  i64.shr_u
  local.get $2
  i64.const 32
  i64.shr_s
  i64.mul
  local.tee $1
  local.get $4
  i64.const 4294967295
  i64.and
  local.get $3
  i64.const 32
  i64.shl
  i64.add
  i64.add
  local.tee $2
  local.get $1
  i64.lt_u
  i64.extend_i32_u
  i64.add
  local.tee $7
  i64.const 2
  i64.shl
  local.get $2
  i64.const 62
  i64.shr_u
  i64.or
  local.tee $6
  i64.const 63
  i64.shr_s
  local.tee $1
  i64.const 1
  i64.shr_s
  local.get $6
  i64.xor
  local.tee $4
  i64.clz
  local.set $3
  local.get $4
  local.get $3
  i64.shl
  local.get $1
  local.get $2
  i64.const 2
  i64.shl
  i64.xor
  local.tee $9
  i64.const 64
  local.get $3
  i64.sub
  i64.shr_u
  i64.or
  local.tee $2
  i64.const 4294967295
  i64.and
  local.tee $5
  i64.const 560513588
  i64.mul
  local.set $4
  local.get $2
  i64.const 32
  i64.shr_u
  local.tee $10
  i64.const 560513588
  i64.mul
  local.get $5
  i64.const 3373259426
  i64.mul
  local.get $4
  i64.const 32
  i64.shr_u
  i64.add
  local.tee $11
  i64.const 4294967295
  i64.and
  i64.add
  local.set $5
  local.get $10
  i64.const 3373259426
  i64.mul
  local.get $11
  i64.const 32
  i64.shr_u
  i64.add
  local.get $5
  i64.const 32
  i64.shr_u
  i64.add
  global.set $~lib/math/res128_hi
  local.get $4
  i64.const 4294967295
  i64.and
  local.get $5
  i64.const 32
  i64.shl
  i64.add
  local.tee $4
  f64.const 3.753184150245214e-04
  local.get $2
  f64.convert_i64_u
  f64.mul
  f64.const 3.834951969714103e-04
  local.get $9
  local.get $3
  i64.shl
  f64.convert_i64_u
  f64.mul
  f64.add
  i64.trunc_f64_u
  local.tee $2
  i64.lt_u
  i64.extend_i32_u
  global.get $~lib/math/res128_hi
  local.tee $5
  i64.const 11
  i64.shr_u
  i64.add
  f64.convert_i64_u
  global.set $~lib/math/rempio2_y0
  f64.const 5.421010862427522e-20
  local.get $2
  local.get $5
  i64.const 53
  i64.shl
  local.get $4
  i64.const 11
  i64.shr_u
  i64.or
  i64.add
  f64.convert_i64_u
  f64.mul
  global.set $~lib/math/rempio2_y1
  global.get $~lib/math/rempio2_y0
  i64.const 4372995238176751616
  local.get $3
  i64.const 52
  i64.shl
  i64.sub
  local.get $0
  local.get $6
  i64.xor
  i64.const -9223372036854775808
  i64.and
  i64.or
  f64.reinterpret_i64
  local.tee $12
  f64.mul
  global.set $~lib/math/rempio2_y0
  global.get $~lib/math/rempio2_y1
  local.get $12
  f64.mul
  global.set $~lib/math/rempio2_y1
  local.get $7
  i64.const 62
  i64.shr_s
  local.get $1
  i64.sub
  i32.wrap_i64
 )
 (func $~lib/math/NativeMath.cos (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 f64)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 f64)
  local.get $0
  i64.reinterpret_f64
  local.tee $5
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $4
  i32.const 31
  i32.shr_u
  local.set $6
  local.get $4
  i32.const 2147483647
  i32.and
  local.tee $4
  i32.const 1072243195
  i32.le_u
  if
   local.get $4
   i32.const 1044816030
   i32.lt_u
   if
    f64.const 1
    return
   end
   f64.const 1
   f64.const 0.5
   local.get $0
   local.get $0
   f64.mul
   local.tee $1
   f64.mul
   local.tee $2
   f64.sub
   local.tee $3
   f64.const 1
   local.get $3
   f64.sub
   local.get $2
   f64.sub
   local.get $1
   local.get $1
   f64.const 0.0416666666666666
   local.get $1
   f64.const -0.001388888888887411
   local.get $1
   f64.const 2.480158728947673e-05
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $1
   local.get $1
   f64.mul
   local.tee $2
   local.get $2
   f64.mul
   f64.const -2.7557314351390663e-07
   local.get $1
   f64.const 2.087572321298175e-09
   local.get $1
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $0
   f64.const 0
   f64.mul
   f64.sub
   f64.add
   f64.add
   return
  end
  local.get $4
  i32.const 2146435072
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.sub
   return
  end
  block $~lib/math/rempio2|inlined.0 (result i32)
   local.get $5
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $4
   i32.const 1094263291
   i32.lt_u
   if
    local.get $4
    i32.const 20
    i32.shr_u
    local.tee $4
    local.get $0
    local.get $0
    f64.const 0.6366197723675814
    f64.mul
    f64.nearest
    local.tee $2
    f64.const 1.5707963267341256
    f64.mul
    f64.sub
    local.tee $0
    local.get $2
    f64.const 6.077100506506192e-11
    f64.mul
    local.tee $3
    f64.sub
    local.tee $1
    i64.reinterpret_f64
    i64.const 32
    i64.shr_u
    i32.wrap_i64
    i32.const 20
    i32.shr_u
    i32.const 2047
    i32.and
    i32.sub
    i32.const 16
    i32.gt_u
    if
     local.get $2
     f64.const 2.0222662487959506e-21
     f64.mul
     local.get $0
     local.get $0
     local.get $2
     f64.const 6.077100506303966e-11
     f64.mul
     local.tee $1
     f64.sub
     local.tee $0
     f64.sub
     local.get $1
     f64.sub
     f64.sub
     local.set $3
     local.get $4
     local.get $0
     local.get $3
     f64.sub
     local.tee $1
     i64.reinterpret_f64
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     i32.const 20
     i32.shr_u
     i32.const 2047
     i32.and
     i32.sub
     i32.const 49
     i32.gt_u
     if (result f64)
      local.get $2
      f64.const 8.4784276603689e-32
      f64.mul
      local.get $0
      local.get $0
      local.get $2
      f64.const 2.0222662487111665e-21
      f64.mul
      local.tee $1
      f64.sub
      local.tee $0
      f64.sub
      local.get $1
      f64.sub
      f64.sub
      local.set $3
      local.get $0
      local.get $3
      f64.sub
     else
      local.get $1
     end
     local.set $1
    end
    local.get $1
    global.set $~lib/math/rempio2_y0
    local.get $0
    local.get $1
    f64.sub
    local.get $3
    f64.sub
    global.set $~lib/math/rempio2_y1
    local.get $2
    i32.trunc_f64_s
    br $~lib/math/rempio2|inlined.0
   end
   i32.const 0
   local.get $5
   call $~lib/math/pio2_large_quot
   local.tee $4
   i32.sub
   local.get $4
   local.get $6
   select
  end
  local.set $4
  global.get $~lib/math/rempio2_y0
  local.set $1
  global.get $~lib/math/rempio2_y1
  local.set $2
  local.get $4
  i32.const 1
  i32.and
  if (result f64)
   local.get $1
   local.get $1
   f64.mul
   local.tee $0
   local.get $1
   f64.mul
   local.set $3
   local.get $1
   local.get $0
   f64.const 0.5
   local.get $2
   f64.mul
   local.get $3
   f64.const 0.00833333333332249
   local.get $0
   f64.const -1.984126982985795e-04
   local.get $0
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.add
   f64.mul
   f64.add
   local.get $0
   local.get $0
   local.get $0
   f64.mul
   f64.mul
   f64.const -2.5050760253406863e-08
   local.get $0
   f64.const 1.58969099521155e-10
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.sub
   f64.mul
   local.get $2
   f64.sub
   local.get $3
   f64.const -0.16666666666666632
   f64.mul
   f64.sub
   f64.sub
  else
   f64.const 1
   f64.const 0.5
   local.get $1
   local.get $1
   f64.mul
   local.tee $0
   f64.mul
   local.tee $3
   f64.sub
   local.tee $7
   f64.const 1
   local.get $7
   f64.sub
   local.get $3
   f64.sub
   local.get $0
   local.get $0
   f64.const 0.0416666666666666
   local.get $0
   f64.const -0.001388888888887411
   local.get $0
   f64.const 2.480158728947673e-05
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $0
   local.get $0
   f64.mul
   local.tee $3
   local.get $3
   f64.mul
   f64.const -2.7557314351390663e-07
   local.get $0
   f64.const 2.087572321298175e-09
   local.get $0
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $1
   local.get $2
   f64.mul
   f64.sub
   f64.add
   f64.add
  end
  local.tee $0
  f64.neg
  local.get $0
  local.get $4
  i32.const 1
  i32.add
  i32.const 2
  i32.and
  select
 )
 (func $index/SolveCubic (result i32)
  (local $0 f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 f64)
  (local $4 i32)
  (local $5 f64)
  (local $6 f64)
  f64.const 1
  global.get $index/input
  i32.const 0
  call $~lib/typedarray/Float64Array#__uget
  f64.div
  local.set $0
  f64.const 0.3333333333333333
  f64.const -0.3333333333333333
  global.get $index/input
  i32.const 1
  call $~lib/typedarray/Float64Array#__uget
  local.get $0
  f64.mul
  local.tee $3
  local.get $3
  f64.mul
  local.tee $2
  f64.mul
  global.get $index/input
  i32.const 2
  call $~lib/typedarray/Float64Array#__uget
  local.get $0
  f64.mul
  local.tee $5
  f64.add
  f64.mul
  local.set $1
  f64.const 0.5
  f64.const 0.07407407407407407
  local.get $3
  f64.mul
  local.get $2
  f64.mul
  f64.const 0.3333333333333333
  local.get $3
  f64.mul
  local.get $5
  f64.mul
  f64.sub
  global.get $index/input
  i32.const 3
  call $~lib/typedarray/Float64Array#__uget
  local.get $0
  f64.mul
  f64.add
  f64.mul
  local.tee $0
  local.get $0
  f64.mul
  local.get $1
  local.get $1
  f64.mul
  local.get $1
  f64.mul
  local.tee $5
  f64.add
  local.tee $2
  local.set $6
  local.get $2
  f64.abs
  f64.const 1e-09
  f64.lt
  if (result i32)
   local.get $0
   f64.abs
   f64.const 1e-09
   f64.lt
   if (result i32)
    global.get $index/output
    i32.const 0
    f64.const 0
    call $~lib/typedarray/Float64Array#__uset
    i32.const 1
   else
    local.get $0
    f64.neg
    call $~lib/math/NativeMath.cbrt
    local.set $0
    global.get $index/output
    i32.const 0
    f64.const 2
    local.get $0
    f64.mul
    call $~lib/typedarray/Float64Array#__uset
    global.get $index/output
    i32.const 1
    local.get $0
    f64.neg
    call $~lib/typedarray/Float64Array#__uset
    i32.const 2
   end
  else
   local.get $2
   f64.const 0
   f64.lt
   if (result i32)
    f64.const 0.3333333333333333
    local.get $0
    f64.neg
    local.get $5
    f64.neg
    f64.sqrt
    f64.div
    call $~lib/math/NativeMath.acos
    f64.mul
    local.set $0
    global.get $index/output
    i32.const 0
    f64.const 2
    local.get $1
    f64.neg
    f64.sqrt
    f64.mul
    local.tee $1
    local.get $0
    call $~lib/math/NativeMath.cos
    f64.mul
    call $~lib/typedarray/Float64Array#__uset
    global.get $index/output
    i32.const 1
    local.get $1
    f64.neg
    local.get $0
    f64.const 1.0471975511965976
    f64.add
    call $~lib/math/NativeMath.cos
    f64.mul
    call $~lib/typedarray/Float64Array#__uset
    global.get $index/output
    i32.const 2
    local.get $1
    f64.neg
    local.get $0
    f64.const 1.0471975511965976
    f64.sub
    call $~lib/math/NativeMath.cos
    f64.mul
    call $~lib/typedarray/Float64Array#__uset
    i32.const 3
   else
    local.get $6
    f64.sqrt
    local.tee $1
    local.get $0
    f64.sub
    call $~lib/math/NativeMath.cbrt
    local.set $2
    local.get $1
    local.get $0
    f64.add
    call $~lib/math/NativeMath.cbrt
    f64.neg
    local.set $0
    global.get $index/output
    i32.const 0
    local.get $2
    local.get $0
    f64.add
    call $~lib/typedarray/Float64Array#__uset
    i32.const 1
   end
  end
  local.set $4
  f64.const 0.3333333333333333
  local.get $3
  f64.mul
  local.set $0
  local.get $4
  i32.const 0
  i32.gt_s
  if
   global.get $index/output
   i32.const 0
   global.get $index/output
   i32.const 0
   call $~lib/typedarray/Float64Array#__uget
   local.get $0
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
  end
  local.get $4
  i32.const 1
  i32.gt_s
  if
   global.get $index/output
   i32.const 1
   global.get $index/output
   i32.const 1
   call $~lib/typedarray/Float64Array#__uget
   local.get $0
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
  end
  local.get $4
  i32.const 2
  i32.gt_s
  if
   global.get $index/output
   i32.const 2
   global.get $index/output
   i32.const 2
   call $~lib/typedarray/Float64Array#__uget
   local.get $0
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
  end
  local.get $4
 )
 (func $index/SolveQuartic (result i32)
  (local $0 i32)
  (local $1 f64)
  (local $2 f64)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 i32)
  f64.const 1
  global.get $index/input
  i32.const 0
  call $~lib/typedarray/Float64Array#__uget
  f64.div
  local.set $6
  f64.const -0.375
  global.get $index/input
  i32.const 1
  call $~lib/typedarray/Float64Array#__uget
  local.get $6
  f64.mul
  local.tee $4
  local.get $4
  f64.mul
  local.tee $2
  f64.mul
  global.get $index/input
  i32.const 2
  call $~lib/typedarray/Float64Array#__uget
  local.get $6
  f64.mul
  local.tee $5
  f64.add
  local.set $3
  f64.const 0.125
  local.get $2
  f64.mul
  local.get $4
  f64.mul
  f64.const 0.5
  local.get $4
  f64.mul
  local.get $5
  f64.mul
  f64.sub
  global.get $index/input
  i32.const 3
  call $~lib/typedarray/Float64Array#__uget
  local.get $6
  f64.mul
  local.tee $1
  f64.add
  local.set $7
  f64.const -0.01171875
  local.get $2
  f64.mul
  local.get $2
  f64.mul
  f64.const 0.0625
  local.get $2
  f64.mul
  local.get $5
  f64.mul
  f64.add
  f64.const 0.25
  local.get $4
  f64.mul
  local.get $1
  f64.mul
  f64.sub
  global.get $index/input
  i32.const 4
  call $~lib/typedarray/Float64Array#__uget
  local.get $6
  f64.mul
  f64.add
  local.tee $1
  f64.abs
  f64.const 1e-09
  f64.lt
  if (result i32)
   global.get $index/input
   i32.const 3
   local.get $7
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 2
   local.get $3
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 1
   f64.const 0
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 0
   f64.const 1
   call $~lib/typedarray/Float64Array#__uset
   call $index/SolveCubic
  else
   global.get $index/input
   i32.const 3
   f64.const 0.5
   local.get $1
   f64.mul
   local.get $3
   f64.mul
   f64.const 0.125
   local.get $7
   f64.mul
   local.get $7
   f64.mul
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 2
   local.get $1
   f64.neg
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 1
   f64.const -0.5
   local.get $3
   f64.mul
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 0
   f64.const 1
   call $~lib/typedarray/Float64Array#__uset
   call $index/SolveCubic
   drop
   f64.const 2
   global.get $index/output
   i32.const 0
   call $~lib/typedarray/Float64Array#__uget
   local.tee $2
   f64.mul
   local.get $3
   f64.sub
   local.set $3
   local.get $2
   local.get $2
   f64.mul
   local.get $1
   f64.sub
   local.tee $1
   f64.abs
   f64.const 1e-09
   f64.lt
   if (result f64)
    f64.const 0
   else
    local.get $1
    f64.const 0
    f64.gt
    if (result f64)
     local.get $1
     f64.sqrt
    else
     i32.const 0
     return
    end
   end
   local.set $5
   local.get $3
   f64.abs
   f64.const 1e-09
   f64.lt
   if (result f64)
    f64.const 0
   else
    local.get $3
    f64.const 0
    f64.gt
    if (result f64)
     local.get $3
     f64.sqrt
    else
     i32.const 0
     return
    end
   end
   local.set $1
   global.get $index/input
   i32.const 2
   local.get $2
   local.get $5
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 1
   local.get $1
   f64.neg
   local.get $1
   local.get $7
   f64.const 0
   f64.lt
   local.tee $8
   select
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 0
   f64.const 1
   call $~lib/typedarray/Float64Array#__uset
   i32.const 0
   i32.const 1
   call $index/SolveQuadric
   local.set $0
   global.get $index/input
   i32.const 2
   local.get $2
   local.get $5
   f64.add
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 1
   local.get $1
   local.get $1
   f64.neg
   local.get $8
   select
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/input
   i32.const 0
   f64.const 1
   call $~lib/typedarray/Float64Array#__uset
   local.get $0
   i32.eqz
   if
    i32.const 0
    i32.const 1
    call $index/SolveQuadric
    local.get $0
    i32.add
    local.set $0
   end
   local.get $0
   i32.const 1
   i32.eq
   if
    i32.const 1
    i32.const 2
    call $index/SolveQuadric
    local.get $0
    i32.add
    local.set $0
   end
   local.get $0
   i32.const 2
   i32.eq
   if (result i32)
    i32.const 2
    i32.const 3
    call $index/SolveQuadric
    local.get $0
    i32.add
   else
    local.get $0
   end
  end
  local.set $0
  f64.const 0.25
  local.get $4
  f64.mul
  local.set $1
  local.get $0
  i32.const 0
  i32.gt_s
  if
   global.get $index/output
   i32.const 0
   global.get $index/output
   i32.const 0
   call $~lib/typedarray/Float64Array#__uget
   local.get $1
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
  end
  local.get $0
  i32.const 1
  i32.gt_s
  if
   global.get $index/output
   i32.const 1
   global.get $index/output
   i32.const 1
   call $~lib/typedarray/Float64Array#__uget
   local.get $1
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
  end
  local.get $0
  i32.const 2
  i32.gt_s
  if
   global.get $index/output
   i32.const 2
   global.get $index/output
   i32.const 2
   call $~lib/typedarray/Float64Array#__uget
   local.get $1
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
  end
  local.get $0
  i32.const 3
  i32.gt_s
  if
   global.get $index/output
   i32.const 3
   global.get $index/output
   i32.const 3
   call $~lib/typedarray/Float64Array#__uget
   local.get $1
   f64.sub
   call $~lib/typedarray/Float64Array#__uset
  end
  local.get $0
 )
 (func $~lib/typedarray/Float64Array#fill (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $2
  i32.load offset=4
  local.set $3
  i32.const 0
  local.get $2
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.tee $1
  i32.const 0
  local.get $1
  i32.lt_s
  select
  local.set $0
  i32.const 2147483647
  local.get $1
  i32.const 2147483647
  local.get $1
  i32.lt_s
  select
  local.set $1
  loop $for-loop|0
   local.get $0
   local.get $1
   i32.lt_s
   if
    local.get $3
    local.get $0
    i32.const 3
    i32.shl
    i32.add
    f64.const 0
    f64.store
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  local.get $2
 )
 (func $~lib/math/NativeMath.sincos (param $0 f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 i32)
  (local $4 f64)
  (local $5 f64)
  (local $6 i64)
  (local $7 i32)
  (local $8 f64)
  (local $9 f64)
  (local $10 f64)
  local.get $0
  i64.reinterpret_f64
  local.tee $6
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $3
  i32.const 31
  i32.shr_u
  local.set $7
  local.get $3
  i32.const 2147483647
  i32.and
  local.tee $3
  i32.const 1072243195
  i32.le_u
  if
   local.get $3
   i32.const 1044816030
   i32.lt_u
   if
    local.get $0
    global.set $~lib/math/NativeMath.sincos_sin
    f64.const 1
    global.set $~lib/math/NativeMath.sincos_cos
    return
   end
   local.get $0
   local.get $0
   f64.mul
   local.tee $1
   local.get $1
   f64.mul
   local.set $2
   local.get $0
   local.get $1
   local.get $0
   f64.mul
   f64.const -0.16666666666666632
   local.get $1
   f64.const 0.00833333333332249
   local.get $1
   f64.const -1.984126982985795e-04
   local.get $1
   f64.const 2.7557313707070068e-06
   f64.mul
   f64.add
   f64.mul
   f64.add
   local.get $1
   local.get $2
   f64.mul
   f64.const -2.5050760253406863e-08
   local.get $1
   f64.const 1.58969099521155e-10
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.add
   global.set $~lib/math/NativeMath.sincos_sin
   f64.const 1
   f64.const 0.5
   local.get $1
   f64.mul
   local.tee $4
   f64.sub
   local.tee $5
   f64.const 1
   local.get $5
   f64.sub
   local.get $4
   f64.sub
   local.get $1
   local.get $1
   f64.const 0.0416666666666666
   local.get $1
   f64.const -0.001388888888887411
   local.get $1
   f64.const 2.480158728947673e-05
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $2
   local.get $2
   f64.mul
   f64.const -2.7557314351390663e-07
   local.get $1
   f64.const 2.087572321298175e-09
   local.get $1
   f64.const -1.1359647557788195e-11
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   f64.add
   f64.mul
   local.get $0
   f64.const 0
   f64.mul
   f64.sub
   f64.add
   f64.add
   global.set $~lib/math/NativeMath.sincos_cos
   return
  end
  local.get $3
  i32.const 2139095040
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.sub
   local.tee $0
   global.set $~lib/math/NativeMath.sincos_sin
   local.get $0
   global.set $~lib/math/NativeMath.sincos_cos
   return
  end
  block $~lib/math/rempio2|inlined.1 (result i32)
   local.get $6
   i64.const 32
   i64.shr_u
   i32.wrap_i64
   i32.const 2147483647
   i32.and
   local.tee $3
   i32.const 1094263291
   i32.lt_u
   if
    local.get $3
    i32.const 20
    i32.shr_u
    local.tee $3
    local.get $0
    local.get $0
    f64.const 0.6366197723675814
    f64.mul
    f64.nearest
    local.tee $4
    f64.const 1.5707963267341256
    f64.mul
    f64.sub
    local.tee $0
    local.get $4
    f64.const 6.077100506506192e-11
    f64.mul
    local.tee $2
    f64.sub
    local.tee $1
    i64.reinterpret_f64
    i64.const 32
    i64.shr_u
    i32.wrap_i64
    i32.const 20
    i32.shr_u
    i32.const 2047
    i32.and
    i32.sub
    i32.const 16
    i32.gt_u
    if
     local.get $4
     f64.const 2.0222662487959506e-21
     f64.mul
     local.get $0
     local.get $0
     local.get $4
     f64.const 6.077100506303966e-11
     f64.mul
     local.tee $1
     f64.sub
     local.tee $0
     f64.sub
     local.get $1
     f64.sub
     f64.sub
     local.set $2
     local.get $3
     local.get $0
     local.get $2
     f64.sub
     local.tee $1
     i64.reinterpret_f64
     i64.const 32
     i64.shr_u
     i32.wrap_i64
     i32.const 20
     i32.shr_u
     i32.const 2047
     i32.and
     i32.sub
     i32.const 49
     i32.gt_u
     if (result f64)
      local.get $4
      f64.const 8.4784276603689e-32
      f64.mul
      local.get $0
      local.get $0
      local.get $4
      f64.const 2.0222662487111665e-21
      f64.mul
      local.tee $1
      f64.sub
      local.tee $0
      f64.sub
      local.get $1
      f64.sub
      f64.sub
      local.set $2
      local.get $0
      local.get $2
      f64.sub
     else
      local.get $1
     end
     local.set $1
    end
    local.get $1
    global.set $~lib/math/rempio2_y0
    local.get $0
    local.get $1
    f64.sub
    local.get $2
    f64.sub
    global.set $~lib/math/rempio2_y1
    local.get $4
    i32.trunc_f64_s
    br $~lib/math/rempio2|inlined.1
   end
   i32.const 0
   local.get $6
   call $~lib/math/pio2_large_quot
   local.tee $3
   i32.sub
   local.get $3
   local.get $7
   select
  end
  local.set $3
  global.get $~lib/math/rempio2_y0
  local.tee $2
  local.get $2
  f64.mul
  local.tee $1
  local.get $2
  f64.mul
  local.set $0
  local.get $2
  local.get $1
  f64.const 0.5
  global.get $~lib/math/rempio2_y1
  local.tee $4
  f64.mul
  local.get $0
  f64.const 0.00833333333332249
  local.get $1
  f64.const -1.984126982985795e-04
  local.get $1
  f64.const 2.7557313707070068e-06
  f64.mul
  f64.add
  f64.mul
  f64.add
  local.get $1
  local.get $1
  local.get $1
  f64.mul
  local.tee $5
  f64.mul
  f64.const -2.5050760253406863e-08
  local.get $1
  f64.const 1.58969099521155e-10
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.sub
  f64.mul
  local.get $4
  f64.sub
  local.get $0
  f64.const -0.16666666666666632
  f64.mul
  f64.sub
  f64.sub
  local.tee $8
  local.set $0
  f64.const 1
  f64.const 0.5
  local.get $1
  f64.mul
  local.tee $9
  f64.sub
  local.tee $10
  f64.const 1
  local.get $10
  f64.sub
  local.get $9
  f64.sub
  local.get $1
  local.get $1
  f64.const 0.0416666666666666
  local.get $1
  f64.const -0.001388888888887411
  local.get $1
  f64.const 2.480158728947673e-05
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  local.get $5
  local.get $5
  f64.mul
  f64.const -2.7557314351390663e-07
  local.get $1
  f64.const 2.087572321298175e-09
  local.get $1
  f64.const -1.1359647557788195e-11
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  local.get $2
  local.get $4
  f64.mul
  f64.sub
  f64.add
  f64.add
  local.tee $1
  local.set $2
  local.get $3
  i32.const 1
  i32.and
  if
   local.get $8
   f64.neg
   local.set $2
   local.get $1
   local.set $0
  end
  local.get $3
  i32.const 2
  i32.and
  if (result f64)
   local.get $2
   f64.neg
   local.set $2
   local.get $0
   f64.neg
  else
   local.get $0
  end
  global.set $~lib/math/NativeMath.sincos_sin
  local.get $2
  global.set $~lib/math/NativeMath.sincos_cos
 )
 (func $index/range (result i32)
  (local $0 f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 f64)
  global.get $index/output
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  global.get $index/input
  i32.const 5
  call $~lib/typedarray/Float64Array#__uget
  local.set $0
  global.get $index/input
  i32.const 6
  call $~lib/typedarray/Float64Array#__uget
  local.set $1
  global.get $index/input
  i32.const 7
  call $~lib/typedarray/Float64Array#__uget
  local.set $3
  f64.const 0.7853981633974483
  call $~lib/math/NativeMath.sincos
  global.get $index/output
  i32.const 6
  local.get $0
  global.get $~lib/math/NativeMath.sincos_cos
  f64.mul
  local.get $1
  f64.div
  local.get $0
  global.get $~lib/math/NativeMath.sincos_sin
  local.tee $2
  f64.mul
  local.get $0
  local.get $0
  f64.mul
  local.get $2
  f64.mul
  local.get $2
  f64.mul
  f64.const 2
  local.get $1
  f64.mul
  local.get $3
  f64.mul
  f64.add
  f64.sqrt
  f64.add
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  global.get $index/output
  i32.const 6
  call $~lib/typedarray/Float64Array#__uget
  f64.const 0
  f64.gt
  if (result i32)
   i32.const 1
  else
   i32.const 0
  end
 )
 (func $~lib/math/NativeMath.atan (param $0 f64) (result f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  local.get $0
  local.set $1
  local.get $0
  i64.reinterpret_f64
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  i32.const 2147483647
  i32.and
  local.tee $3
  i32.const 1141899264
  i32.ge_u
  if
   local.get $0
   local.get $0
   f64.ne
   if
    local.get $0
    return
   end
   f64.const 1.5707963267948966
   local.get $1
   f64.copysign
   return
  end
  local.get $3
  i32.const 1071382528
  i32.lt_u
  if
   local.get $3
   i32.const 1044381696
   i32.lt_u
   if
    local.get $0
    return
   end
   i32.const -1
   local.set $4
  else
   local.get $0
   f64.abs
   local.set $0
   local.get $3
   i32.const 1072889856
   i32.lt_u
   if (result f64)
    local.get $3
    i32.const 1072037888
    i32.lt_u
    if (result f64)
     f64.const 2
     local.get $0
     f64.mul
     f64.const 1
     f64.sub
     f64.const 2
     local.get $0
     f64.add
     f64.div
    else
     i32.const 1
     local.set $4
     local.get $0
     f64.const 1
     f64.sub
     local.get $0
     f64.const 1
     f64.add
     f64.div
    end
   else
    local.get $3
    i32.const 1073971200
    i32.lt_u
    if (result f64)
     i32.const 2
     local.set $4
     local.get $0
     f64.const 1.5
     f64.sub
     f64.const 1
     f64.const 1.5
     local.get $0
     f64.mul
     f64.add
     f64.div
    else
     i32.const 3
     local.set $4
     f64.const -1
     local.get $0
     f64.div
    end
   end
   local.set $0
  end
  local.get $0
  local.get $0
  f64.mul
  local.tee $5
  local.get $5
  f64.mul
  local.set $2
  local.get $0
  local.get $5
  f64.const 0.3333333333333293
  local.get $2
  f64.const 0.14285714272503466
  local.get $2
  f64.const 0.09090887133436507
  local.get $2
  f64.const 0.06661073137387531
  local.get $2
  f64.const 0.049768779946159324
  local.get $2
  f64.const 0.016285820115365782
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  local.get $2
  f64.const -0.19999999999876483
  local.get $2
  f64.const -0.11111110405462356
  local.get $2
  f64.const -0.0769187620504483
  local.get $2
  f64.const -0.058335701337905735
  local.get $2
  f64.const -0.036531572744216916
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  f64.add
  f64.mul
  local.set $2
  local.get $4
  i32.const 0
  i32.lt_s
  if
   local.get $0
   local.get $2
   f64.sub
   return
  end
  block $break|0
   block $case4|0
    block $case3|0
     block $case2|0
      block $case1|0
       block $case0|0
        local.get $4
        br_table $case0|0 $case1|0 $case2|0 $case3|0 $case4|0
       end
       f64.const 0.4636476090008061
       local.get $2
       f64.const 2.2698777452961687e-17
       f64.sub
       local.get $0
       f64.sub
       f64.sub
       local.set $0
       br $break|0
      end
      f64.const 0.7853981633974483
      local.get $2
      f64.const 3.061616997868383e-17
      f64.sub
      local.get $0
      f64.sub
      f64.sub
      local.set $0
      br $break|0
     end
     f64.const 0.982793723247329
     local.get $2
     f64.const 1.3903311031230998e-17
     f64.sub
     local.get $0
     f64.sub
     f64.sub
     local.set $0
     br $break|0
    end
    f64.const 1.5707963267948966
    local.get $2
    f64.const 6.123233995736766e-17
    f64.sub
    local.get $0
    f64.sub
    f64.sub
    local.set $0
    br $break|0
   end
   unreachable
  end
  local.get $0
  local.get $1
  f64.copysign
 )
 (func $~lib/math/NativeMath.atan2 (param $0 f64) (param $1 f64) (result f64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  i32.const 1
  local.get $0
  local.get $0
  f64.ne
  local.get $1
  local.get $1
  f64.ne
  select
  if
   local.get $1
   local.get $0
   f64.add
   return
  end
  local.get $0
  i64.reinterpret_f64
  local.tee $6
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.set $7
  local.get $6
  i32.wrap_i64
  local.set $8
  local.get $1
  i64.reinterpret_f64
  local.tee $6
  i32.wrap_i64
  local.tee $3
  local.get $6
  i64.const 32
  i64.shr_u
  i32.wrap_i64
  local.tee $4
  i32.const 1072693248
  i32.sub
  i32.or
  i32.eqz
  if
   local.get $0
   call $~lib/math/NativeMath.atan
   return
  end
  local.get $4
  i32.const 30
  i32.shr_u
  i32.const 2
  i32.and
  local.get $7
  i32.const 31
  i32.shr_u
  i32.or
  local.set $2
  local.get $4
  i32.const 2147483647
  i32.and
  local.set $5
  local.get $7
  i32.const 2147483647
  i32.and
  local.tee $4
  local.get $8
  i32.or
  i32.eqz
  if
   block $break|0
    block $case3|0
     block $case2|0
      block $case1|0
       local.get $2
       i32.eqz
       br_if $case1|0
       block $tablify|0
        local.get $2
        i32.const 1
        i32.sub
        br_table $case1|0 $case2|0 $case3|0 $tablify|0
       end
       br $break|0
      end
      local.get $0
      return
     end
     f64.const 3.141592653589793
     return
    end
    f64.const -3.141592653589793
    return
   end
  end
  block $folding-inner0
   local.get $3
   local.get $5
   i32.or
   i32.eqz
   br_if $folding-inner0
   local.get $5
   i32.const 2146435072
   i32.eq
   if
    f64.const 2.356194490192345
    f64.const 0.7853981633974483
    local.get $2
    i32.const 2
    i32.and
    local.tee $3
    select
    f64.const 3.141592653589793
    f64.const 0
    local.get $3
    select
    local.get $4
    i32.const 2146435072
    i32.eq
    select
    local.tee $0
    f64.neg
    local.get $0
    local.get $2
    i32.const 1
    i32.and
    select
    return
   end
   i32.const 1
   local.get $4
   i32.const 2146435072
   i32.eq
   local.get $5
   i32.const 67108864
   i32.add
   local.get $4
   i32.lt_u
   select
   br_if $folding-inner0
   local.get $4
   i32.const 67108864
   i32.add
   local.get $5
   i32.lt_u
   i32.const 0
   local.get $2
   i32.const 2
   i32.and
   select
   if (result f64)
    f64.const 0
   else
    local.get $0
    local.get $1
    f64.div
    f64.abs
    call $~lib/math/NativeMath.atan
   end
   local.set $0
   block $break|1
    block $case3|1
     block $case2|1
      block $case1|1
       local.get $2
       local.tee $3
       if
        local.get $3
        i32.const 1
        i32.sub
        br_table $case1|1 $case2|1 $case3|1 $break|1
       end
       local.get $0
       return
      end
      local.get $0
      f64.neg
      return
     end
     f64.const 3.141592653589793
     local.get $0
     f64.const 1.2246467991473532e-16
     f64.sub
     f64.sub
     return
    end
    local.get $0
    f64.const 1.2246467991473532e-16
    f64.sub
    f64.const 3.141592653589793
    f64.sub
    return
   end
   unreachable
  end
  f64.const -1.5707963267948966
  f64.const 1.5707963267948966
  local.get $2
  i32.const 1
  i32.and
  select
 )
 (func $index/solveArcStatic (result i32)
  (local $0 f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 i32)
  global.get $index/output
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  global.get $index/input
  i32.const 5
  call $~lib/typedarray/Float64Array#__uget
  local.set $0
  global.get $index/input
  i32.const 6
  call $~lib/typedarray/Float64Array#__uget
  local.set $3
  global.get $index/input
  i32.const 7
  call $~lib/typedarray/Float64Array#__uget
  local.set $1
  global.get $index/input
  i32.const 8
  call $~lib/typedarray/Float64Array#__uget
  local.set $5
  global.get $index/input
  i32.const 9
  call $~lib/typedarray/Float64Array#__uget
  local.get $0
  f64.sub
  local.set $2
  global.get $index/input
  i32.const 10
  call $~lib/typedarray/Float64Array#__uget
  local.get $3
  f64.sub
  local.set $0
  global.get $index/input
  i32.const 11
  call $~lib/typedarray/Float64Array#__uget
  local.get $1
  f64.sub
  local.set $3
  global.get $index/input
  i32.const 12
  call $~lib/typedarray/Float64Array#__uget
  local.tee $4
  local.get $2
  local.get $2
  f64.mul
  local.get $0
  local.get $0
  f64.mul
  f64.add
  local.get $3
  local.get $3
  f64.mul
  f64.add
  f64.sqrt
  local.tee $7
  f64.mul
  local.set $6
  local.get $5
  local.get $5
  f64.mul
  local.tee $1
  local.get $1
  f64.mul
  local.get $4
  local.get $6
  local.get $7
  f64.mul
  f64.const 2
  local.get $0
  f64.mul
  local.get $1
  f64.mul
  f64.add
  f64.mul
  f64.sub
  local.tee $4
  f64.const 0
  f64.lt
  if
   i32.const 0
   return
  end
  i32.const 2
  i32.const 1
  local.get $1
  local.get $4
  f64.sqrt
  local.tee $4
  f64.sub
  local.get $6
  call $~lib/math/NativeMath.atan2
  local.tee $7
  local.get $1
  local.get $4
  f64.add
  local.get $6
  call $~lib/math/NativeMath.atan2
  local.tee $6
  f64.ne
  select
  local.set $8
  local.get $2
  local.get $2
  f64.mul
  local.get $0
  local.get $0
  f64.mul
  f64.add
  local.get $3
  local.get $3
  f64.mul
  f64.add
  local.tee $1
  f64.const 0
  f64.gt
  if
   local.get $2
   f64.const 1
   local.get $1
   f64.sqrt
   f64.div
   local.tee $1
   f64.mul
   local.set $2
   local.get $3
   local.get $1
   f64.mul
   local.set $3
   local.get $0
   local.get $1
   f64.mul
   local.set $0
  end
  local.get $7
  call $~lib/math/NativeMath.sincos
  global.get $~lib/math/NativeMath.sincos_sin
  local.get $5
  f64.mul
  local.set $4
  global.get $index/output
  i32.const 6
  local.get $2
  global.get $~lib/math/NativeMath.sincos_cos
  local.get $5
  f64.mul
  local.tee $1
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 7
  local.get $0
  local.get $1
  f64.mul
  local.get $4
  f64.add
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 8
  local.get $3
  local.get $1
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  local.get $8
  i32.const 1
  i32.gt_s
  if
   local.get $6
   call $~lib/math/NativeMath.sincos
   global.get $~lib/math/NativeMath.sincos_sin
   local.get $5
   f64.mul
   local.set $1
   global.get $index/output
   i32.const 9
   local.get $2
   global.get $~lib/math/NativeMath.sincos_cos
   local.get $5
   f64.mul
   local.tee $2
   f64.mul
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/output
   i32.const 10
   local.get $0
   local.get $2
   f64.mul
   local.get $1
   f64.add
   call $~lib/typedarray/Float64Array#__uset
   global.get $index/output
   i32.const 11
   local.get $3
   local.get $2
   f64.mul
   call $~lib/typedarray/Float64Array#__uset
  end
  global.get $index/input
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  local.get $8
 )
 (func $~lib/util/sort/insertionSort<f64> (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 f64)
  (local $6 f64)
  loop $for-loop|0
   local.get $4
   local.get $1
   i32.lt_s
   if
    local.get $0
    local.get $4
    i32.const 3
    i32.shl
    i32.add
    f64.load
    local.set $5
    local.get $4
    i32.const 1
    i32.sub
    local.set $2
    loop $while-continue|1
     local.get $2
     i32.const 0
     i32.ge_s
     if
      block $while-break|1
       local.get $0
       local.get $2
       i32.const 3
       i32.shl
       i32.add
       f64.load
       local.set $6
       i32.const 2
       global.set $~argumentsLength
       local.get $5
       local.get $6
       i32.const 1584
       i32.load
       call_indirect (type $f64_f64_=>_i32)
       i32.const 0
       i32.ge_s
       br_if $while-break|1
       local.get $2
       local.tee $3
       i32.const 1
       i32.sub
       local.set $2
       local.get $0
       local.get $3
       i32.const 1
       i32.add
       i32.const 3
       i32.shl
       i32.add
       local.get $6
       f64.store
       br $while-continue|1
      end
     end
    end
    local.get $0
    local.get $2
    i32.const 1
    i32.add
    i32.const 3
    i32.shl
    i32.add
    local.get $5
    f64.store
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/util/sort/weakHeapSort<f64> (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 f64)
  (local $5 i32)
  (local $6 f64)
  (local $7 i32)
  local.get $1
  i32.const 31
  i32.add
  i32.const 5
  i32.shr_u
  i32.const 2
  i32.shl
  local.tee $2
  i32.const 0
  call $~lib/rt/tlsf/__alloc
  local.tee $5
  local.get $2
  call $~lib/memory/memory.fill
  local.get $1
  i32.const 1
  i32.sub
  local.set $3
  loop $for-loop|0
   local.get $3
   i32.const 0
   i32.gt_s
   if
    local.get $3
    local.set $2
    loop $while-continue|1
     local.get $2
     i32.const 1
     i32.and
     local.get $5
     local.get $2
     i32.const 6
     i32.shr_u
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.get $2
     i32.const 1
     i32.shr_s
     i32.const 31
     i32.and
     i32.shr_u
     i32.const 1
     i32.and
     i32.eq
     if
      local.get $2
      i32.const 1
      i32.shr_s
      local.set $2
      br $while-continue|1
     end
    end
    local.get $0
    local.get $2
    i32.const 1
    i32.shr_s
    local.tee $2
    i32.const 3
    i32.shl
    i32.add
    f64.load
    local.set $4
    local.get $0
    local.get $3
    i32.const 3
    i32.shl
    i32.add
    f64.load
    local.set $6
    i32.const 2
    global.set $~argumentsLength
    local.get $4
    local.get $6
    i32.const 1584
    i32.load
    call_indirect (type $f64_f64_=>_i32)
    i32.const 0
    i32.lt_s
    if
     local.get $5
     local.get $3
     i32.const 5
     i32.shr_u
     i32.const 2
     i32.shl
     i32.add
     local.tee $7
     local.get $7
     i32.load
     i32.const 1
     local.get $3
     i32.const 31
     i32.and
     i32.shl
     i32.xor
     i32.store
     local.get $0
     local.get $3
     i32.const 3
     i32.shl
     i32.add
     local.get $4
     f64.store
     local.get $0
     local.get $2
     i32.const 3
     i32.shl
     i32.add
     local.get $6
     f64.store
    end
    local.get $3
    i32.const 1
    i32.sub
    local.set $3
    br $for-loop|0
   end
  end
  local.get $1
  i32.const 1
  i32.sub
  local.set $3
  loop $for-loop|2
   local.get $3
   i32.const 2
   i32.ge_s
   if
    local.get $0
    f64.load
    local.set $4
    local.get $0
    local.get $0
    local.get $3
    i32.const 3
    i32.shl
    i32.add
    local.tee $1
    f64.load
    f64.store
    local.get $1
    local.get $4
    f64.store
    i32.const 1
    local.set $1
    loop $while-continue|3
     local.get $5
     local.get $1
     i32.const 5
     i32.shr_u
     i32.const 2
     i32.shl
     i32.add
     i32.load
     local.get $1
     i32.const 31
     i32.and
     i32.shr_u
     i32.const 1
     i32.and
     local.get $1
     i32.const 1
     i32.shl
     i32.add
     local.tee $2
     local.get $3
     i32.lt_s
     if
      local.get $2
      local.set $1
      br $while-continue|3
     end
    end
    loop $while-continue|4
     local.get $1
     i32.const 0
     i32.gt_s
     if
      local.get $0
      f64.load
      local.set $4
      local.get $0
      local.get $1
      i32.const 3
      i32.shl
      i32.add
      f64.load
      local.set $6
      i32.const 2
      global.set $~argumentsLength
      local.get $4
      local.get $6
      i32.const 1584
      i32.load
      call_indirect (type $f64_f64_=>_i32)
      i32.const 0
      i32.lt_s
      if
       local.get $5
       local.get $1
       i32.const 5
       i32.shr_u
       i32.const 2
       i32.shl
       i32.add
       local.tee $2
       local.get $2
       i32.load
       i32.const 1
       local.get $1
       i32.const 31
       i32.and
       i32.shl
       i32.xor
       i32.store
       local.get $0
       local.get $1
       i32.const 3
       i32.shl
       i32.add
       local.get $4
       f64.store
       local.get $0
       local.get $6
       f64.store
      end
      local.get $1
      i32.const 1
      i32.shr_s
      local.set $1
      br $while-continue|4
     end
    end
    local.get $3
    i32.const 1
    i32.sub
    local.set $3
    br $for-loop|2
   end
  end
  call $~lib/rt/tlsf/maybeInitialize
  local.get $5
  i32.const 16
  i32.sub
  local.set $1
  local.get $5
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $5
  select
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  if
   local.get $1
   i32.load offset=4
   drop
  end
  local.get $1
  call $~lib/rt/tlsf/freeBlock
  local.get $0
  f64.load offset=8
  local.set $4
  local.get $0
  local.get $0
  f64.load
  f64.store offset=8
  local.get $0
  local.get $4
  f64.store
 )
 (func $~lib/util/sort/COMPARATOR<f64>~anonymous|0 (param $0 f64) (param $1 f64) (result i32)
  (local $2 i64)
  (local $3 i64)
  local.get $0
  i64.reinterpret_f64
  local.tee $2
  local.get $2
  i64.const 63
  i64.shr_s
  i64.const 1
  i64.shr_u
  i64.xor
  local.tee $2
  local.get $1
  i64.reinterpret_f64
  local.tee $3
  local.get $3
  i64.const 63
  i64.shr_s
  i64.const 1
  i64.shr_u
  i64.xor
  local.tee $3
  i64.gt_s
  local.get $2
  local.get $3
  i64.lt_s
  i32.sub
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $0
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/typedarray/Float64Array#copyWithin (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $3
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $6
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.tee $4
  local.get $3
  local.get $4
  i32.lt_s
  select
  local.set $5
  local.get $6
  i32.load offset=4
  local.tee $3
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $1
   local.get $4
   i32.add
   local.tee $0
   i32.const 0
   local.get $0
   i32.const 0
   i32.gt_s
   select
  else
   local.get $1
   local.get $4
   local.get $1
   local.get $4
   i32.lt_s
   select
  end
  local.tee $1
  i32.const 3
  i32.shl
  i32.add
  local.get $3
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $2
   local.get $4
   i32.add
   local.tee $0
   i32.const 0
   local.get $0
   i32.const 0
   i32.gt_s
   select
  else
   local.get $2
   local.get $4
   local.get $2
   local.get $4
   i32.lt_s
   select
  end
  local.tee $0
  i32.const 3
  i32.shl
  i32.add
  local.get $5
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $4
   local.get $5
   i32.add
   local.tee $2
   i32.const 0
   local.get $2
   i32.const 0
   i32.gt_s
   select
  else
   local.get $5
   local.get $4
   local.get $5
   local.get $4
   i32.lt_s
   select
  end
  local.get $0
  i32.sub
  local.tee $0
  local.get $4
  local.get $1
  i32.sub
  local.tee $1
  local.get $0
  local.get $1
  i32.lt_s
  select
  i32.const 3
  i32.shl
  call $~lib/memory/memory.copy
  local.get $6
 )
 (func $index/solveArcMoving (result i32)
  (local $0 i32)
  (local $1 f64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 f64)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  (local $10 f64)
  (local $11 i32)
  (local $12 f64)
  (local $13 f64)
  (local $14 f64)
  (local $15 f64)
  (local $16 i32)
  (local $17 f64)
  (local $18 i32)
  global.get $index/output
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  i32.const 6
  local.set $0
  global.get $index/input
  i32.const 5
  call $~lib/typedarray/Float64Array#__uget
  local.set $6
  global.get $index/input
  i32.const 6
  call $~lib/typedarray/Float64Array#__uget
  local.set $7
  global.get $index/input
  i32.const 7
  call $~lib/typedarray/Float64Array#__uget
  local.set $8
  global.get $index/input
  i32.const 8
  call $~lib/typedarray/Float64Array#__uget
  local.set $1
  global.get $index/input
  i32.const 9
  call $~lib/typedarray/Float64Array#__uget
  local.set $12
  global.get $index/input
  i32.const 10
  call $~lib/typedarray/Float64Array#__uget
  local.set $15
  global.get $index/input
  i32.const 11
  call $~lib/typedarray/Float64Array#__uget
  local.set $17
  global.get $index/input
  i32.const 12
  call $~lib/typedarray/Float64Array#__uget
  local.set $13
  global.get $index/input
  i32.const 13
  call $~lib/typedarray/Float64Array#__uget
  local.set $9
  global.get $index/input
  i32.const 14
  call $~lib/typedarray/Float64Array#__uget
  local.set $14
  f64.const -0.5
  global.get $index/input
  i32.const 15
  call $~lib/typedarray/Float64Array#__uget
  f64.mul
  local.set $10
  global.get $index/input
  i32.const 0
  local.get $10
  local.get $10
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  i32.const 1
  f64.const 2
  local.get $9
  f64.mul
  local.get $10
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  i32.const 2
  local.get $9
  local.get $9
  f64.mul
  f64.const 2
  local.get $15
  local.get $7
  f64.sub
  local.tee $7
  f64.mul
  local.tee $15
  local.get $10
  f64.mul
  f64.add
  local.get $1
  local.get $1
  f64.mul
  f64.sub
  local.get $13
  local.get $13
  f64.mul
  f64.add
  local.get $14
  local.get $14
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  i32.const 3
  local.get $15
  local.get $9
  f64.mul
  f64.const 2
  local.get $12
  local.get $6
  f64.sub
  local.tee $6
  f64.mul
  local.get $13
  f64.mul
  f64.add
  f64.const 2
  local.get $17
  local.get $8
  f64.sub
  local.tee $8
  f64.mul
  local.get $14
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  i32.const 4
  local.get $7
  local.get $7
  f64.mul
  local.get $6
  local.get $6
  f64.mul
  f64.add
  local.get $8
  local.get $8
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__uset
  call $index/SolveQuartic
  local.set $18
  global.get $index/output
  call $~lib/rt/pure/__retain
  local.tee $3
  i32.load offset=8
  i32.const 3
  i32.shr_u
  local.set $2
  i32.const 12
  i32.const 3
  call $~lib/rt/tlsf/__alloc
  local.tee $4
  local.get $3
  i32.load
  call $~lib/rt/pure/__retain
  i32.store
  local.get $4
  local.get $3
  i32.load offset=4
  i32.const 0
  local.get $2
  i32.const 0
  local.get $2
  i32.lt_s
  select
  local.tee $5
  i32.const 3
  i32.shl
  i32.add
  i32.store offset=4
  local.get $4
  i32.const 4
  local.get $2
  i32.const 4
  local.get $2
  i32.lt_s
  select
  local.tee $2
  local.get $5
  local.get $2
  local.get $5
  i32.gt_s
  select
  local.get $5
  i32.sub
  i32.const 3
  i32.shl
  i32.store offset=8
  local.get $4
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $3
  call $~lib/rt/pure/__release
  i32.const 0
  global.set $~argumentsLength
  block $~lib/typedarray/SORT<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $4
   call $~lib/rt/pure/__retain
   local.tee $5
   i32.load offset=8
   i32.const 3
   i32.shr_u
   local.tee $3
   i32.const 1
   i32.le_s
   br_if $~lib/typedarray/SORT<~lib/typedarray/Float64Array,f64>|inlined.0
   local.get $5
   i32.load offset=4
   local.set $2
   local.get $3
   i32.const 2
   i32.eq
   if
    local.get $2
    f64.load offset=8
    local.set $1
    local.get $2
    f64.load
    local.set $12
    i32.const 2
    global.set $~argumentsLength
    local.get $1
    local.get $12
    i32.const 1584
    i32.load
    call_indirect (type $f64_f64_=>_i32)
    i32.const 0
    i32.lt_s
    if
     local.get $2
     local.get $12
     f64.store offset=8
     local.get $2
     local.get $1
     f64.store
    end
    br $~lib/typedarray/SORT<~lib/typedarray/Float64Array,f64>|inlined.0
   end
   local.get $3
   i32.const 256
   i32.lt_s
   if
    local.get $2
    local.get $3
    call $~lib/util/sort/insertionSort<f64>
   else
    local.get $2
    local.get $3
    call $~lib/util/sort/weakHeapSort<f64>
   end
  end
  local.get $5
  call $~lib/rt/pure/__release
  loop $for-loop|0
   local.get $11
   i32.const 2
   i32.lt_s
   i32.const 0
   local.get $16
   local.get $18
   i32.lt_s
   select
   if
    global.get $index/output
    local.get $16
    call $~lib/typedarray/Float64Array#__uget
    local.tee $1
    f64.const 0
    f64.le
    i32.eqz
    if
     global.get $index/output
     local.get $0
     local.get $6
     local.get $13
     local.get $1
     f64.mul
     f64.add
     local.get $1
     f64.div
     call $~lib/typedarray/Float64Array#__uset
     global.get $index/output
     local.get $0
     i32.const 1
     i32.add
     local.tee $0
     local.get $7
     local.get $9
     local.get $1
     f64.mul
     f64.add
     local.get $10
     local.get $1
     f64.mul
     local.get $1
     f64.mul
     f64.sub
     local.get $1
     f64.div
     call $~lib/typedarray/Float64Array#__uset
     global.get $index/output
     local.get $0
     i32.const 1
     i32.add
     local.tee $0
     local.get $8
     local.get $14
     local.get $1
     f64.mul
     f64.add
     local.get $1
     f64.div
     call $~lib/typedarray/Float64Array#__uset
     local.get $11
     i32.const 1
     i32.add
     local.set $11
     local.get $0
     i32.const 1
     i32.add
     local.set $0
    end
    local.get $16
    i32.const 1
    i32.add
    local.set $16
    br $for-loop|0
   end
  end
  local.get $11
  i32.const 0
  i32.gt_s
  if
   global.get $index/output
   local.get $0
   i32.const 6
   i32.add
   local.get $0
   local.get $0
   i32.const 3
   i32.add
   call $~lib/typedarray/Float64Array#copyWithin
   call $~lib/rt/pure/__release
  end
  local.get $11
  i32.const 1
  i32.gt_s
  if
   global.get $index/output
   local.get $0
   i32.const 9
   i32.add
   local.get $0
   i32.const 3
   i32.add
   local.get $0
   i32.const 6
   i32.add
   call $~lib/typedarray/Float64Array#copyWithin
   call $~lib/rt/pure/__release
  end
  global.get $index/input
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $11
 )
 (func $index/solveLateralStatic (result i32)
  (local $0 f64)
  (local $1 f64)
  (local $2 f64)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  global.get $index/output
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  global.get $index/input
  i32.const 5
  call $~lib/typedarray/Float64Array#__uget
  local.set $1
  global.get $index/input
  i32.const 6
  call $~lib/typedarray/Float64Array#__uget
  local.set $5
  global.get $index/input
  i32.const 7
  call $~lib/typedarray/Float64Array#__uget
  local.set $0
  global.get $index/input
  i32.const 8
  call $~lib/typedarray/Float64Array#__uget
  global.get $index/input
  i32.const 9
  call $~lib/typedarray/Float64Array#__uget
  local.set $6
  global.get $index/input
  i32.const 10
  call $~lib/typedarray/Float64Array#__uget
  local.set $3
  global.get $index/input
  i32.const 11
  call $~lib/typedarray/Float64Array#__uget
  local.set $4
  global.get $index/input
  i32.const 12
  call $~lib/typedarray/Float64Array#__uget
  local.set $7
  local.get $1
  f64.sub
  local.tee $1
  local.get $1
  f64.mul
  local.get $3
  local.get $0
  f64.sub
  local.tee $0
  local.get $0
  f64.mul
  f64.add
  f64.sqrt
  local.tee $2
  f64.const 0
  f64.eq
  if
   i32.const 0
   return
  end
  local.get $2
  local.get $4
  f64.div
  local.set $2
  local.get $1
  local.get $1
  f64.mul
  local.get $0
  local.get $0
  f64.mul
  f64.add
  local.tee $3
  f64.const 0
  f64.gt
  if
   local.get $1
   f64.const 1
   local.get $3
   f64.sqrt
   f64.div
   local.tee $3
   f64.mul
   local.set $1
   local.get $0
   local.get $3
   f64.mul
   local.set $0
  end
  global.get $index/output
  i32.const 6
  local.get $1
  local.get $4
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 7
  f64.const 3
  local.get $5
  f64.mul
  f64.const 4
  local.get $7
  f64.mul
  f64.sub
  local.get $6
  f64.add
  f64.neg
  local.get $2
  f64.div
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 8
  local.get $0
  local.get $4
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 9
  f64.const -4
  local.get $5
  f64.const 2
  local.get $7
  f64.mul
  f64.sub
  local.get $6
  f64.add
  f64.mul
  local.get $2
  local.get $2
  f64.mul
  f64.div
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  i32.const 1
 )
 (func $index/solveLateralMoving (result i32)
  (local $0 f64)
  (local $1 i32)
  (local $2 i32)
  (local $3 f64)
  (local $4 f64)
  (local $5 f64)
  (local $6 f64)
  (local $7 f64)
  (local $8 f64)
  (local $9 f64)
  (local $10 f64)
  (local $11 f64)
  (local $12 f64)
  (local $13 f64)
  (local $14 f64)
  (local $15 f64)
  global.get $index/output
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  global.get $index/input
  i32.const 5
  call $~lib/typedarray/Float64Array#__uget
  local.set $13
  global.get $index/input
  i32.const 6
  call $~lib/typedarray/Float64Array#__uget
  local.set $11
  global.get $index/input
  i32.const 7
  call $~lib/typedarray/Float64Array#__uget
  local.set $14
  global.get $index/input
  i32.const 8
  call $~lib/typedarray/Float64Array#__uget
  local.set $4
  global.get $index/input
  i32.const 9
  call $~lib/typedarray/Float64Array#__uget
  global.get $index/input
  i32.const 10
  call $~lib/typedarray/Float64Array#__uget
  local.set $0
  global.get $index/input
  i32.const 11
  call $~lib/typedarray/Float64Array#__uget
  local.set $6
  global.get $index/input
  i32.const 12
  call $~lib/typedarray/Float64Array#__uget
  local.set $7
  global.get $index/input
  i32.const 13
  call $~lib/typedarray/Float64Array#__uget
  global.get $index/input
  i32.const 14
  call $~lib/typedarray/Float64Array#__uget
  local.set $8
  global.get $index/input
  i32.const 15
  call $~lib/typedarray/Float64Array#__uget
  local.set $15
  global.get $index/input
  i32.const 0
  local.get $7
  local.get $7
  f64.mul
  local.get $8
  local.get $8
  f64.mul
  f64.add
  local.get $6
  local.get $6
  f64.mul
  f64.sub
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  i32.const 1
  f64.const 2
  local.get $4
  local.get $13
  f64.sub
  local.tee $9
  f64.mul
  local.get $7
  f64.mul
  local.get $0
  local.get $14
  f64.sub
  local.tee $3
  local.get $8
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  i32.const 2
  local.get $9
  local.get $9
  f64.mul
  local.get $3
  local.get $3
  f64.mul
  f64.add
  call $~lib/typedarray/Float64Array#__uset
  i32.const 0
  i32.const 1
  call $index/SolveQuadric
  local.tee $1
  i32.const 0
  i32.gt_s
  local.tee $2
  if
   global.get $index/output
   i32.const 0
   call $~lib/typedarray/Float64Array#__uget
   f64.const 0
   f64.gt
   local.set $2
  end
  i32.const 0
  local.get $1
  i32.const 1
  i32.gt_s
  local.tee $1
  if
   global.get $index/output
   i32.const 1
   call $~lib/typedarray/Float64Array#__uget
   f64.const 0
   f64.gt
   local.set $1
  end
  local.get $1
  i32.eqz
  local.get $2
  select
  if (result f64)
   i32.const 0
   return
  else
   local.get $1
   i32.const 0
   local.get $2
   select
   if (result f64)
    global.get $index/output
    i32.const 0
    call $~lib/typedarray/Float64Array#__uget
    global.get $index/output
    i32.const 1
    call $~lib/typedarray/Float64Array#__uget
    f64.min
   else
    local.get $2
    if (result f64)
     global.get $index/output
     i32.const 0
     call $~lib/typedarray/Float64Array#__uget
    else
     global.get $index/output
     i32.const 1
     call $~lib/typedarray/Float64Array#__uget
    end
   end
  end
  local.tee $3
  f64.mul
  f64.add
  local.set $10
  local.get $4
  local.get $7
  local.get $3
  f64.mul
  f64.add
  local.tee $9
  local.get $13
  f64.sub
  local.tee $4
  local.get $4
  f64.mul
  local.get $0
  local.get $8
  local.get $3
  f64.mul
  f64.add
  local.tee $12
  local.get $14
  f64.sub
  local.tee $0
  local.get $0
  f64.mul
  f64.add
  local.tee $5
  f64.const 0
  f64.gt
  if
   local.get $4
   f64.const 1
   local.get $5
   f64.sqrt
   f64.div
   local.tee $5
   f64.mul
   local.set $4
   local.get $0
   local.get $5
   f64.mul
   local.set $0
  end
  global.get $index/output
  i32.const 6
  local.get $4
  local.get $6
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 7
  f64.const 3
  local.get $11
  f64.mul
  f64.const 4
  local.get $11
  local.get $10
  f64.max
  local.get $15
  f64.add
  local.tee $5
  f64.mul
  f64.sub
  local.get $10
  f64.add
  f64.neg
  local.get $3
  f64.div
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 8
  local.get $0
  local.get $6
  f64.mul
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 9
  local.get $9
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 10
  local.get $10
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 11
  local.get $12
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/output
  i32.const 12
  f64.const -4
  local.get $11
  f64.const 2
  local.get $5
  f64.mul
  f64.sub
  local.get $10
  f64.add
  f64.mul
  local.get $3
  local.get $3
  f64.mul
  f64.div
  call $~lib/typedarray/Float64Array#__uset
  global.get $index/input
  call $~lib/typedarray/Float64Array#fill
  call $~lib/rt/pure/__release
  i32.const 1
 )
 (func $~start
  call $~lib/typedarray/Float64Array#constructor
  global.set $index/input
  call $~lib/typedarray/Float64Array#constructor
  global.set $index/output
 )
 (func $~lib/rt/pure/__collect
  nop
 )
 (func $~lib/rt/pure/decrement (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load
  drop
  local.get $0
  i32.load offset=4
  local.tee $1
  i32.const 268435455
  i32.and
  local.tee $2
  i32.const 1
  i32.eq
  if
   block $__inlined_func$~lib/rt/__visit_members
    block $switch$1$default
     block $switch$1$case$6
      block $switch$1$case$4
       local.get $0
       i32.load offset=8
       br_table $__inlined_func$~lib/rt/__visit_members $__inlined_func$~lib/rt/__visit_members $switch$1$case$4 $switch$1$case$4 $switch$1$case$6 $switch$1$default
      end
      local.get $0
      i32.load offset=16
      local.tee $1
      if
       local.get $1
       call $~lib/rt/pure/__visit
      end
      br $__inlined_func$~lib/rt/__visit_members
     end
     local.get $0
     i32.load offset=20
     call $~lib/rt/pure/__visit
     br $__inlined_func$~lib/rt/__visit_members
    end
    unreachable
   end
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/freeBlock
  else
   local.get $0
   local.get $2
   i32.const 1
   i32.sub
   local.get $1
   i32.const -268435456
   i32.and
   i32.or
   i32.store offset=4
  end
 )
 (func $~lib/rt/pure/__visit (param $0 i32)
  local.get $0
  i32.const 1644
  i32.lt_u
  if
   return
  end
  local.get $0
  i32.const 16
  i32.sub
  call $~lib/rt/pure/decrement
 )
 (func $index/SolveQuadric@varargs (param $0 i32) (param $1 i32) (result i32)
  block $2of2
   block $1of2
    block $0of2
     block $outOfRange
      global.get $~argumentsLength
      br_table $0of2 $1of2 $2of2 $outOfRange
     end
     unreachable
    end
    i32.const 0
    local.set $0
   end
   i32.const 1
   local.set $1
  end
  local.get $0
  local.get $1
  call $index/SolveQuadric
 )
 (func $~setArgumentsLength (param $0 i32)
  local.get $0
  global.set $~argumentsLength
 )
)
