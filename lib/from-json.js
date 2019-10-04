import {
  unary
} from 'ramda'

/**
 * Parses a JSON string to an object.
 *
 * @func fromJson
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/3.5.0|v3.5.0}
 * @category String
 * @sig String -> Object
 * @param {!String} json String to parse as JSON
 * @return {!Object} The new object
 * @see PHI.toJson
 * @example
 *
 * PHI.fromJson('{"a":2}')
 * //=> { a: 2 }
 */
export const fromJson = unary(JSON.parse)

export default fromJson
