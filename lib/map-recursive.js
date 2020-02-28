import { curryN, ifElse, map } from 'ramda'

import { isObj } from 'ramda-adjunct'

/**
 * Like map, but acts recursively on nested objects.
 *
 * @func mapRecursive
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/2.3.0|v2.3.0}
 * @category Object
 * @sig (a -> b) -> {k: a} -> {k: b}
 * @param {!Function} fn Function to map key to value
 * @param {!Object} obj The object to map
 * @return {!Object} The mapped object
 * @see R.map
 * @example
 *
 * PHI.mapRecursive(R.toUpper, {a: 'b', c: {d: 'e'}}) //=> {a: 'B', c: {d: 'E'}}
 */
const mapRecursive = curryN(2, (fn, obj) =>
  map(ifElse(isObj, mapRecursive(fn), fn))(obj)
)

export default mapRecursive
