import ramda from 'ramda'
const { on, splitWhenever, then, whereAny } = ramda
export { on, splitWhenever, then, whereAny }
export {
  F,
  T,
  __,
  add,
  addIndex,
  adjust,
  all,
  allPass,
  always,
  and,
  andThen,
  any,
  anyPass,
  ap,
  aperture,
  append,
  apply,
  applySpec,
  applyTo,
  ascend,
  assoc,
  assocPath,
  binary,
  bind,
  both,
  call,
  chain,
  clamp,
  clone,
  comparator,
  complement,
  compose,
  composeWith,
  concat,
  cond,
  construct,
  constructN,
  converge,
  countBy,
  curry,
  curryN,
  dec,
  defaultTo,
  descend,
  difference,
  differenceWith,
  dissoc,
  dissocPath,
  divide,
  drop,
  dropLast,
  dropLastWhile,
  dropRepeats,
  dropRepeatsWith,
  dropWhile,
  either,
  empty,
  endsWith,
  eqBy,
  eqProps,
  equals,
  evolve,
  filter,
  find,
  findIndex,
  findLast,
  findLastIndex,
  flatten,
  flip,
  forEach,
  forEachObjIndexed,
  fromPairs,
  groupBy,
  groupWith,
  gt,
  gte,
  has,
  hasIn,
  hasPath,
  head,
  identical,
  identity,
  ifElse,
  inc,
  includes,
  indexBy,
  indexOf,
  init,
  innerJoin,
  insert,
  insertAll,
  intersection,
  intersperse,
  into,
  invert,
  invertObj,
  invoker,
  is,
  isEmpty,
  isNil,
  join,
  juxt,
  keys,
  keysIn,
  last,
  lastIndexOf,
  length,
  lens,
  lensIndex,
  lensPath,
  lensProp,
  lift,
  liftN,
  lt,
  lte,
  map,
  mapAccum,
  mapAccumRight,
  mapObjIndexed,
  match,
  mathMod,
  max,
  maxBy,
  mean,
  median,
  memoizeWith,
  mergeAll,
  mergeDeepLeft,
  mergeDeepRight,
  mergeDeepWith,
  mergeDeepWithKey,
  mergeLeft,
  mergeRight,
  mergeWith,
  mergeWithKey,
  min,
  minBy,
  modulo,
  move,
  multiply,
  nAry,
  negate,
  none,
  not,
  nth,
  nthArg,
  o,
  objOf,
  of,
  omit,
  once,
  or,
  otherwise,
  over,
  pair,
  partial,
  partialRight,
  partition,
  path,
  pathEq,
  pathOr,
  pathSatisfies,
  paths,
  pick,
  pickAll,
  pickBy,
  pipe,
  pipeWith,
  pluck,
  prepend,
  product,
  project,
  prop,
  propEq,
  propIs,
  propOr,
  propSatisfies,
  props,
  range,
  reduce,
  reduceBy,
  reduceRight,
  reduceWhile,
  reduced,
  reject,
  remove,
  repeat,
  replace,
  reverse,
  scan,
  sequence,
  set,
  slice,
  sort,
  sortBy,
  sortWith,
  split,
  splitAt,
  splitEvery,
  splitWhen,
  startsWith,
  subtract,
  sum,
  symmetricDifference,
  symmetricDifferenceWith,
  tail,
  take,
  takeLast,
  takeLastWhile,
  takeWhile,
  tap,
  test,
  thunkify,
  times,
  toLower,
  toPairs,
  toPairsIn,
  toString,
  toUpper,
  transduce,
  transpose,
  traverse,
  trim,
  tryCatch,
  type,
  unapply,
  unary,
  uncurryN,
  unfold,
  union,
  unionWith,
  uniq,
  uniqBy,
  uniqWith,
  unless,
  unnest,
  until,
  update,
  useWith,
  values,
  valuesIn,
  view,
  when,
  where,
  whereEq,
  without,
  xor,
  xprod,
  zip,
  zipObj,
  zipWith
} from 'ramda'
export {
  Identity,
  Y,
  allEqual,
  allEqualTo,
  allIdentical,
  allIdenticalTo,
  allP,
  allSettledP,
  allUnique,
  anyP,
  appendFlipped,
  argsPass,
  async,
  cata,
  catchP,
  ceil,
  compact,
  concatAll,
  concatRight,
  contained,
  curryRight,
  curryRightN,
  defaultWhen,
  delayP,
  dispatch,
  divideNum,
  dropArgs,
  ensureArray,
  escapeRegExp,
  filterIndexed,
  findOr,
  firstP,
  flattenDepth,
  flattenPath,
  flattenProp,
  floor,
  fnull,
  inRange,
  included,
  invoke,
  invokeArgs,
  isArray,
  isArrayLike,
  isAsyncFunction,
  isBigInt,
  isBoolean,
  isDate,
  isEmptyArray,
  isEmptyString,
  isError,
  isEven,
  isFalse,
  isFalsy,
  isFinite,
  isFloat,
  isFunction,
  isGeneratorFunction,
  isIndexed,
  isInteger,
  isInteger32,
  isInvalidDate,
  isIterable,
  isMap,
  isNaN,
  isNaturalNumber,
  isNegative,
  isNegativeZero,
  isNilOrEmpty,
  isNonEmptyArray,
  isNonEmptyString,
  isNonNegative,
  isNonPositive,
  isNotArray,
  isNotArrayLike,
  isNotAsyncFunction,
  isNotBoolean,
  isNotDate,
  isNotEmpty,
  isNotFinite,
  isNotFloat,
  isNotFunction,
  isNotGeneratorFunction,
  isNotInteger,
  isNotMap,
  isNotNaN,
  isNotNil,
  isNotNilOrEmpty,
  isNotNull,
  isNotNumber,
  isNotObj,
  isNotObjLike,
  isNotObject,
  isNotObjectLike,
  isNotPair,
  isNotPlainObj,
  isNotPlainObject,
  isNotPrimitive,
  isNotRegExp,
  isNotSet,
  isNotString,
  isNotUndefined,
  isNotValidDate,
  isNotValidNumber,
  isNull,
  isNumber,
  isObj,
  isObjLike,
  isObject,
  isObjectLike,
  isOdd,
  isPair,
  isPlainObj,
  isPlainObject,
  isPositive,
  isPositiveZero,
  isPrimitive,
  isPromise,
  isPrototypeOf,
  isRegExp,
  isSafeInteger,
  isSentinelValue,
  isSet,
  isSparseArray,
  isString,
  isSymbol,
  isThenable,
  isTrue,
  isTruthy,
  isUndefined,
  isValidDate,
  isValidNumber,
  lastP,
  lengthEq,
  lengthGt,
  lengthGte,
  lengthLt,
  lengthLte,
  lengthNotEq,
  lensEq,
  lensIso,
  lensNotEq,
  lensNotSatisfy,
  lensSatisfies,
  lensTraverse,
  liftF,
  liftFN,
  list,
  mapIndexed,
  mergePath,
  mergePaths,
  mergeProp,
  mergeProps,
  nand,
  neither,
  noneP,
  nonePass,
  noop,
  nor,
  notAllPass,
  notAllUnique,
  notBoth,
  notEqual,
  omitBy,
  omitIndexes,
  overlaps,
  padCharsEnd,
  padCharsStart,
  padEnd,
  padStart,
  pathNotEq,
  pathOrLazy,
  pickIndexes,
  propNotEq,
  rangeStep,
  reduceIndexed,
  reduceP,
  reduceRightP,
  rejectP,
  renameKeyWith,
  renameKeys,
  renameKeysWith,
  repeatStr,
  replaceAll,
  resetToDefault,
  resolveP,
  round,
  seq,
  sequencing,
  sign,
  skipTake,
  sliceFrom,
  sliceTo,
  sortByProps,
  spreadPath,
  spreadProp,
  stubArray,
  stubNull,
  stubObj,
  stubObject,
  stubString,
  stubUndefined,
  subtractNum,
  thenCatchP,
  thenP,
  toArray,
  toInteger32,
  toUinteger32,
  trimCharsEnd,
  trimCharsStart,
  trimEnd,
  trimLeft,
  trimRight,
  trimStart,
  trunc,
  unzipObjWith,
  viewOr,
  weave,
  weaveLazy,
  zipObjWith
} from 'ramda-adjunct'
export * from './lib/index.js'
