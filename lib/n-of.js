import {
  curry
} from 'ramda'

/**
 * Returns an array of length n filled with the value provided.
 *
 * @func nOf
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category Array
 * @sig a -> Number -> [a]
 * @param {*} val Value to assign to each element
 * @param {!number} n The length of the array
 * @return {!Array} The new array
 * @see PHI.objOfKeys
 * @example
 *
 * const nOfFoo = nOf('foo')
 * nOfFoo(5)
 * //=> ['foo', 'foo', 'foo', 'foo', 'foo']
 */
const nOf = curry((val, n) =>
  Array(n).fill(val)
)

export default nOf
