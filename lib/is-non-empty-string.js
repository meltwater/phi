import {
  both
} from 'ramda'

import {
  isNotEmpty,
  isString
} from 'ramda-adjunct'

/**
 * Checks if input value is a `String` of non-zero length.
 *
 * @func isNonEmptyString
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.0.0|v1.0.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {!Boolean}
 * @see RA.isNotString
 * @example
 *
 * PHI.isNonEmptyString('abc') //=> true
 * PHI.isNonEmptyString(1) //=> false
 */
const isNonEmptyString = both(isString, isNotEmpty)

export default isNonEmptyString
