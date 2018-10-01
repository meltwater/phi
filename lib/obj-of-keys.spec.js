import test from 'ava'

import objOfKeys from './obj-of-keys'

test('returns object', t => {
  t.deepEqual(
    objOfKeys('foo', ['a', 'b', 'c']),
    { a: 'foo', b: 'foo', c: 'foo' }
  )
})

test('is curried', t => {
  t.deepEqual(
    objOfKeys('foo')(['a', 'b', 'c']),
    { a: 'foo', b: 'foo', c: 'foo' }
  )
})
