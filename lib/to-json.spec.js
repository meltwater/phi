import test from 'ava'

import toJson from './to-json'

test('serializes to json', t => {
  t.is(toJson({}), '{}')
  t.is(toJson({ a: 4 }), '{"a":4}')
})
