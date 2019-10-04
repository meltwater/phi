import {
  join,
  map,
  pipe,
  unary
} from 'ramda'

/**
 * Serializes an array of objects to an NDJSON string.
 *
 * @func toNdjson
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/3.5.0|v3.5.0}
 * @category String
 * @sig String -> Array
 * @param {!String} ndjson Array to serialize to NDJSON
 * @return {!Array} The new ndjson string
 * @see PHI.fromNdjson
 * @example
 *
 * PHI.toNdjson([{ a: 2 }, { b: "3" }])
 * //=> '{"a":2}\n{"b":3}'
 */
export const toNdjson = pipe(
  map(unary(JSON.stringify)),
  join('\n')
)

export default toNdjson
