import test from 'ava'

import fromNdjson from './from-ndjson'

test('ignores whitespace', t => {
  t.deepEqual(fromNdjson(''), [])
  t.deepEqual(fromNdjson('   '), [])
  t.deepEqual(fromNdjson('\n\n\n\n'), [])
  t.deepEqual(fromNdjson('  \n\n\n\n   '), [])
  t.deepEqual(fromNdjson('\n\n{}\n\n'), [{}])
  t.deepEqual(fromNdjson('\n\n{}\n{"a": 4}\n'), [{}, { a: 4 }])
})

test('parses ndjson', t => {
  t.deepEqual(fromNdjson('{}'), [{}])
  t.deepEqual(fromNdjson('{"a": 5, "b": "c"}\n{"d": 8}'), [
    { a: 5, b: 'c' },
    { d: 8 }
  ])
})
