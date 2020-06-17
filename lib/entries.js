/**
 * Shortcut for `Object.entries`.
 *
 * Returns an array whose elements are arrays corresponding to
 * the enumerable property `[key, value]` pairs found directly upon an object.
 *
 * @func entries
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category Object
 * @sig {k: v} -> [[k, v]]
 * @param {!Object} arr The object for which to return entries
 * @return {!Array} The array of entries
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries|Object.entries}
 * @example
 *
 * PHI.entries({foo: 'bar', baz: 42})
 * //=> [['foo', 'bar'], ['baz', 42]]
 */
const entries = (obj) => Object.entries(obj)

export default entries
