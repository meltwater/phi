import test from 'ava'

import defaultWhenEquals from './default-when-equals.js'

test('returns value', (t) => {
  t.is(defaultWhenEquals(5, 'foo', 10), 10)
})

test('returns default', (t) => {
  t.is(defaultWhenEquals(5, 'foo', 5), 'foo')
})

test('is curried', (t) => {
  t.is(defaultWhenEquals(5)('foo')(10), 10)
})
