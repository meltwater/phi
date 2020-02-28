import test from 'ava'
import { prop } from 'ramda'

import objFromListWith from './obj-from-list-with'

test('returns empty object', t => {
  t.deepEqual(
    objFromListWith(x => x, []),
    {}
  )
})

test('returns new object with keys', t => {
  t.deepEqual(
    objFromListWith(prop('id'), [
      { id: 'foo', name: 'John' },
      { id: 'bar', name: 'Jane' }
    ]),
    { foo: { id: 'foo', name: 'John' }, bar: { id: 'bar', name: 'Jane' } }
  )
})

test('is curried', t => {
  t.deepEqual(
    objFromListWith(prop('id'))([
      { id: 'foo', name: 'John' },
      { id: 'bar', name: 'Jane' }
    ]),
    { foo: { id: 'foo', name: 'John' }, bar: { id: 'bar', name: 'Jane' } }
  )
})
