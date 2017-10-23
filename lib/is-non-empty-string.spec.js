import test from 'ava'

import isNonEmptyString from './is-non-empty-string'

test('checks non empty string', t => {
  t.true(isNonEmptyString('foo'))
})

test('checks empty string', t => {
  t.false(isNonEmptyString(''))
})

test('checks undefined', t => {
  t.false(isNonEmptyString())
  t.false(isNonEmptyString(undefined))
})

test('checks null', t => {
  t.false(isNonEmptyString(null))
})
