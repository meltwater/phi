/**
 * Returns a promise which resolves after the specified number of milliseconds.
 * This should not be relied on for ms accurate timing:
 * the promise may resolve later then requested, but should not resolve before.
 *
 * @func sleeP
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category Function
 * @sig t -> Promise null
 * @param {Number} ms Number of milliseconds to sleep (default 0)
 * @return {!Promise} Promise which resolves to null after specified delay
 * @example
 *
 * PHI.sleeP(100) //=> Promise(null)
 */
const sleeP = (ms = 0) =>
  new Promise(resolve => setTimeout(() => resolve(null), ms))

export default sleeP
