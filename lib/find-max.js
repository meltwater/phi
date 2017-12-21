import {
  apply
} from 'ramda'

/**
 * Finds the maximum value in a list.
 *
 * @func findMax
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category List
 * @sig [a] -> a
 * @param {!Array.<number>} arr The list to search
 * @return {Array} The maximum value
 * @example
 *
 * PHI.findMax([5, 4, -7, -2, 10, 5]) //=> 10
 */
const findMax = apply(Math.max)

export default findMax
