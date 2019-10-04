import {
  compose,
  map,
  pipe,
  reject,
  split,
  trim,
  unary
} from 'ramda'
import {
  isEmptyString
} from 'ramda-adjunct'

/**
 * Parses an NDJSON string to an array of objects.
 *
 * @func fromNdjson
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/3.5.0|v3.5.0}
 * @category String
 * @sig String -> Array
 * @param {!String} ndjson String to parse as NDJSON
 * @return {!Array} The new array of objects
 * @see PHI.toNdjson
 * @example
 *
 * PHI.fromNdjson('{"a":2}\n{"b":3}')
 * //=> [{ a: 2 }, { b: "3" }]
 */
export const fromNdjson = pipe(
  trim,
  split('\n'),
  reject(compose(isEmptyString, trim)),
  map(unary(JSON.parse))
)

export default fromNdjson
