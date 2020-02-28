import { chain, curryN, map, zipObj } from 'ramda'

/**
 * Returns an object created from a list with
 * keys derived from each element.
 *
 * @func objFromListWith
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/2.5.0|v2.5.0}
 * @category Object
 * @sig (a -> k) -> [a] -> {k: a}
 * @param {!Function} fn Function to map element to key
 * @param {!Array} list List of elements to include in object
 * @return {!Object} The new object
 * @see {@link https://github.com/ramda/ramda/wiki/Cookbook#make-an-object-out-of-a-list-with-keys-derived-form-each-element|Ramda Cookbook}
 * @example
 *
 * PHI.objFromListWith(
 *   R.prop('id'),
 *   [{ id: 'foo', name: 'John' }, { id: 'bar', name: 'Jane' }]
 * )
 * //=> { foo: { id: 'foo', name: 'John' }, bar: { id: 'bar', name: 'Jane' } }
 */
const objFromListWith = curryN(2, (fn, list) => chain(zipObj, map(fn))(list))

export default objFromListWith
