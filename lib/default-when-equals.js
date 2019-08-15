import {
  curryN,
  equals
} from 'ramda'

import {
  defaultWhen
} from 'ramda-adjunct'

/**
 * Returns the second argument if the third argument
 * is equal (in `R.equals` terms) to the first argument,
 * otherwise returns the third argument.
 *
 * @func defaultWhenEquals
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category Function
 * @sig * -> a -> b -> a | b
 * @param {*} checkVal The value to check equality against
 * @param {*} defaultVal The value to return if the other arguments are equal
 * @param {*} val The value to return if it is not equal to `checkVal`
 * @return {*} Either `val` or `defaultVal`
 * @see {@link https://char0n.github.io/ramda-adjunct/2.5.0/RA.html#.defaultWhen|RA.defaultWhen}
 * @example
 *
 * const defaultWhenEqualsZero = PHI.defaultWhenEquals('zero', 0)
 * defaultWhenEqualsZero('zero') //=> 0
 * defaultWhenEqualsZero(0) //=> 0
 * defaultWhenEqualsZero('one') //=> 'one'
 * defaultWhenEqualsZero(1) //=> 1
 */
const defaultWhenEquals = curryN(3, (checkVal, defaultVal, val) => (
  defaultWhen(equals(checkVal))(defaultVal, val)
))

export default defaultWhenEquals
