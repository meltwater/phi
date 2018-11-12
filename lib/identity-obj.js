import {
  identity
} from 'ramda'

import {
  objFromKeys
} from './'

/**
 * Returns an object containing the provided keys
 * with each key equal to its value.
 *
 * @func identityObj
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/2.6.0|v2.6.0}
 * @category Object
 * @sig [k] -> {k: k}
 * @param {!Array} keys Keys to include in object
 * @return {!Object} The new object
 * @example
 *
 * PHI.identityObj(['a', 'b', 4])
 * //=> { a: 'a', b: 'b', 4: 4 }
 */
const identityObj = objFromKeys(identity)

export default identityObj
