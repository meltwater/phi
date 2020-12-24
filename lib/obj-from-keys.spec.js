import test from 'ava'
import { toUpper } from 'ramda'

import objFromKeys from './obj-from-keys.js'

test('returns empty object', (t) => {
  t.deepEqual(
    objFromKeys((x) => x, []),
    {}
  )
})

test('returns new object with integer keys', (t) => {
  t.deepEqual(
    objFromKeys((x) => x + 3, [2, 3, 4]),
    { 2: 5, 3: 6, 4: 7 }
  )
})

test('returns new object with keys', (t) => {
  t.deepEqual(objFromKeys(toUpper, ['a', 'b', 'c']), { a: 'A', b: 'B', c: 'C' })
})

test('is curried', (t) => {
  t.deepEqual(objFromKeys(toUpper)(['a', 'b', 'c']), { a: 'A', b: 'B', c: 'C' })
})
