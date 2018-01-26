import test from 'ava'

import nOf from './n-of'

test('returns empty array', t => {
  t.deepEqual(
    nOf('foo', 0),
    []
  )
})

test('returns array', t => {
  t.deepEqual(
    nOf('foo', 5),
    ['foo', 'foo', 'foo', 'foo', 'foo']
  )
})

test('is curried', t => {
  t.deepEqual(
    nOf('foo')(5),
    ['foo', 'foo', 'foo', 'foo', 'foo']
  )
})
