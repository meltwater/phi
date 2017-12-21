import {
  curry,
  sortBy,
  prop
} from 'ramda'

/**
 * Sorts the list by the supplied property.
 *
 * @func sortByProp
 * @memberOf PHI
 * @since {@link https://phi.meltwaterlabs.com/1.1.0|v1.1.0}
 * @category List
 * @sig Idx -> [a] -> [a]
 * @param {!(string|number)} prop The property to sort by
 * @param {!Array} arr The list to sort
 * @return {!Array} The sorted list
 * @example
 *
 * const sortByFirstItem = PHI.sortByProp(0)
 * const pairs = [[-1, 1], [-2, 2], [-3, 3]]
 * sortByFirstItem(pairs) //=> [[-3, 3], [-2, 2], [-1, 1]]
 *
 * const sortByName = PHI.sortByProp('name')
 * const people = [{name: 'joe'}, {name: 'alice'}]
 * sortByName(people) //=> [{name: 'alice'}, {name: 'joe'}]
 */
const sortByProp = curry(
  (p, arr) => sortBy(prop(p))(arr)
)

export default sortByProp
