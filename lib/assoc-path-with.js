import {
  assocPath,
  curryN
} from 'ramda'

/**
 * Calls function on an object and assigns the result to a key.
 * Delegates to assocPath.
 *
 * @func assocPathWith
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/3.4.0|v3.4.0}
 * @category Function
 * @sig String -> f ->  -> a | b
 *
 * @sig ({k: a} -> a) -> [k] -> {k: a}
 * @param {!Function} f The function to class on obj to get the value
 * @param {!String} [k] The path to assign the value
 * @param {!Object} obj The object to pass to assocPath
 * @return {!Object} The object with the new association
 * @see {@link https://ramdajs.com/docs/#assocPath#|R.assocPath}
 * @example
 *
 * const assocPathWithKeys = PHI.assocPathWith(keys)
 * assocPathWithKeys(['z', 'ks'], { a: 1, b: 2 }) //=> { a: 1, b: 2, { z: { ks: ['a', 'b'] } } }
 */
export const assocPathWith = curryN(3, (f, p, obj) => (
  assocPath(p, f(obj), obj))
)

export default assocPathWith
