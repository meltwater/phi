import {
  __ as _,
  assoc,
  curry,
  reduceRight
} from 'ramda'

/**
 * Returns an object containing the provided keys
 * with all keys assigned the same provided value.
 *
 * @func objOfKeys
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category Object
 * @sig a -> [k] -> {k: a}
 * @param {*} val Value to assign to each property
 * @param {!(string|number)} keys Keys to include in object
 * @return {!Object} The new object
 * @see PHI.nOf
 * @example
 *
 * const objOfFoo = objOfKeys('foo')
 * objOfFoo(['a', 'b'])
 * //=> {a: 'foo', b: 'foo'}
 */
const objOfKeys = curry((val, keys) =>
  reduceRight(assoc(_, val, _), {}, keys)
)

export default objOfKeys
