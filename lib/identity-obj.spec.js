import test from 'ava'

import identityObj from './identity-obj'

test('returns empty object', t => {
  t.deepEqual(identityObj([]), {})
})

test('returns identity object', t => {
  t.deepEqual(identityObj(['foo', 'bar', 3]), { foo: 'foo', bar: 'bar', 3: 3 })
})

test('returns identity object with duplicates', t => {
  t.deepEqual(identityObj(['foo', 'bar', 3, 'bar']), {
    foo: 'foo',
    bar: 'bar',
    3: 3
  })
})
