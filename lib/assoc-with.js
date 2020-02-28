import { assoc, curryN } from 'ramda'

/**
 * Calls function on an object and assigns the result to a key.
 * Delegates to assoc.
 *
 * @func assocWith
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/3.4.0|v3.4.0}
 * @category Function
 * @sig String -> f ->  -> a | b
 *
 * @sig ({k: a} -> a) -> k -> {k: a}
 * @param {!Function} f The function to class on obj to get the value
 * @param {!String} k The key to assign the value
 * @param {!Object} obj The object to pass to assoc
 * @return {!Object} The object with the new association
 * @see {@link https://ramdajs.com/docs/#assoc#|R.assoc}
 * @example
 *
 * const assocWithKeys = PHI.assocWith(keys)
 * assocWithKeys('ks', { a: 1, b: 2 }) //=> { a: 1, b: 2, ks: ['a', b] }
 */
export const assocWith = curryN(3, (f, k, obj) => assoc(k, f(obj), obj))

export default assocWith
