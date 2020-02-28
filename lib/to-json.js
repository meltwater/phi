import { unary } from 'ramda'

/**
 * Serializes an object to a JSON string.
 *
 * @func toJson
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/3.5.0|v3.5.0}
 * @category String
 * @sig String -> Array
 * @param {!String} json Array to serialize to json
 * @return {!Array} The new json string
 * @see PHI.fromJson
 * @example
 *
 * PHI.toJson({ a: 2 })
 * //=> '{"a":2}'
 */
export const toJson = unary(JSON.stringify)

export default toJson
