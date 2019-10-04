import test from 'ava'

import fromJson from './from-json'

test('parses json', t => {
  t.deepEqual(fromJson('{}'), {})
  t.deepEqual(
    fromJson('{"a": 5, "b": "c"}'),
    { a: 5, b: 'c' }
  )
})
