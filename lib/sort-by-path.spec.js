import test from 'ava'

import sortByPath from './sort-by-path'

test('sorts by path', (t) => {
  t.deepEqual(
    sortByPath(
      ['a', 'b', 'c'],
      [{ a: { b: { c: 'joe' } } }, { a: { b: { c: 'alice' } } }]
    ),
    [{ a: { b: { c: 'alice' } } }, { a: { b: { c: 'joe' } } }]
  )
})

test('is curried', (t) => {
  t.deepEqual(
    sortByPath(['a', 'b', 'c'])([
      { a: { b: { c: 'joe' } } },
      { a: { b: { c: 'alice' } } }
    ]),
    [{ a: { b: { c: 'alice' } } }, { a: { b: { c: 'joe' } } }]
  )
})
