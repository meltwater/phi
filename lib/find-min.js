import {
  apply
} from 'ramda'

/**
 * Finds the minimum value in a list.
 *
 * Returns `Infinity` for empty lists.
 *
 * @func findMin
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category List
 * @sig [a] -> a
 * @param {!Array.<number>} arr The list to search
 * @return {!number} The minimum value
 * @example
 *
 * PHI.findMin([5, 4, -7, -2, 10, 5]) //=> -7
 */
const findMin = apply(Math.min)

export default findMin
