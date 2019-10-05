import test from 'ava'

import toNdjson from './to-ndjson'

test('serializes to ndjson', t => {
  t.is(toNdjson([]), '\n')
  t.is(toNdjson([{}]), '{}\n')
  t.is(toNdjson([{}, {}]), '{}\n{}\n')
  t.is(toNdjson([{ a: 1 }, { b: 'c' }]), '{"a":1}\n{"b":"c"}\n')
})
