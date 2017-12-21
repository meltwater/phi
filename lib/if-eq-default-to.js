import {
  compose,
  curry,
  defaultTo,
  equals,
  when
} from 'ramda'

import {
  stubNull
} from 'ramda-adjunct'

/**
 * Returns the second argument if the third argument
 * is equal (in `R.equals` terms) to the first argument,
 * otherwise returns the third argument.
 *
 * @func ifEqDefaultTo
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category Function
 * @sig * -> a -> b -> a | b
 * @param {*} checkVal The value to check equality against
 * @param {*} defaultVal The value to return if the other arguments are equal
 * @param {*} val The value to return if it is not equal to `checkVal`
 * @return {*} Either `val` or `defaultVal`
 * @see {@link http://ramdajs.com/docs/#defaultTo|R.defaultTo}
 * @example
 *
 * const ifZeroDefaultToNum = PHI.ifEqDefaultTo('zero', 0)
 * ifZeroDefaultToNum('zero') //=> 0
 * ifZeroDefaultToNum(0) //=> 0
 * ifZeroDefaultToNum('one') //=> 'one'
 * ifZeroDefaultToNum(1) //=> 1
 */
const ifEqDefaultTo = curry((checkValue, defaultValue, val) => compose(
  defaultTo(defaultValue),
  when(equals(checkValue), stubNull)
)(val))

export default ifEqDefaultTo
