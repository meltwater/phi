import test from 'ava'

import nOf from './n-of'

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
