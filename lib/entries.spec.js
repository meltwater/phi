import test from 'ava'

import entries from './entries.js'

test('returns entries', (t) => {
  t.deepEqual(entries({ foo: 'bar', baz: 42 }), [
    ['foo', 'bar'],
    ['baz', 42]
  ])
})
