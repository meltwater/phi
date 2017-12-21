import {
  assocPath,
  curry,
  path
} from 'ramda'

/**
 * Maps over the value at the end of a path.
 *
 * @func mapPath
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category Object
 * @sig [k] -> (a -> b) -> {k: a} -> {k: b}
 * @param {!Array.<string|number>} path The path to map
 * @param {!Function} fn The function that transforms the value
 * @param {!Object} obj The object with the path to map
 * @return {!Object} The object with the mapped path
 * @example
 *
 * PHI.mapPath(['a', 'b', 'c'], R.inc, {a: {b: {c: 3}}}) //=> {a: {b: {c: 4}}}
 * PHI.mapPath(['a', 'z'], R.always(10), {a: {b: {c: 3}}}) //=> {a: {z: 10, b: {c: 3}}}
 */
const mapPath = curry((pa, fn, obj) =>
  assocPath(pa, fn(path(pa, obj)), obj)
)

export default mapPath
