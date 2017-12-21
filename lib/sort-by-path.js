import {
  curry,
  sortBy,
  path
} from 'ramda'

/**
 * Sorts the list by the supplied property path.
 *
 * @func sortByPath
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category List
 * @sig [Idx] -> [a] -> [a]
 * @param {!Array.<string|number>} path The property path to sort by
 * @param {!Array} arr The list to sort
 * @return {Array} The sorted list
 * @example
 *
 * const sortByABC = PHI.sortByPath(['a', 'b', 'c'])
 * sortByABC([{a: {b: {c: 'joe'}}}, {a: {b: {c: 'alice'}}}])
 * //=> [{a: {b: {c: 'alice'}}}, {a: {b: {c: 'joe'}}}]
 */
const sortByPath = curry(
  (pa, arr) => sortBy(path(pa))(arr)
)

export default sortByPath
