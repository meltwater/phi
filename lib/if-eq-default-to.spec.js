import test from 'ava'

import ifEqDefaultTo from './if-eq-default-to'

test('returns value', t => {
  t.is(ifEqDefaultTo(5, 'foo', 10), 10)
})

test('returns default', t => {
  t.is(ifEqDefaultTo(5, 'foo', 5), 'foo')
})

test('is curried', t => {
  t.is(ifEqDefaultTo(5)('foo')(10), 10)
})
