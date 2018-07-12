import {
  curry,
  map,
  zipObj
} from 'ramda'

/**
 * Returns an object created from a list of keys with
 * values derived from them.
 *
 * @func objFromKeys
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/2.2.0|v2.2.0}
 * @category Object
 * @sig (k -> a) -> [k] -> {k: a}
 * @param {!Function} fn Function to map key to value
 * @param {!(string|number)} keys Keys to include in object
 * @return {!Object} The new object
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#make-an-object-out-of-keys-with-values-derived-from-them|Ramda Cookbook}
 * @example
 *
 * PHI.objFromKeys(R.toUpper, ['a', 'b', 'c'])
 * //=> {a: 'A', b: 'B', c: 'C'}
 */
const objFromKeys = curry((fn, keys) =>
  zipObj(keys, map(fn, keys))
)

export default objFromKeys
