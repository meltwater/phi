import test from 'ava'

import sortByProp from './sort-by-prop.js'

test('sorts by prop', (t) => {
  t.deepEqual(sortByProp('name', [{ name: 'joe' }, { name: 'alice' }]), [
    { name: 'alice' },
    { name: 'joe' }
  ])
})

test('is curried', (t) => {
  t.deepEqual(sortByProp('name')([{ name: 'joe' }, { name: 'alice' }]), [
    { name: 'alice' },
    { name: 'joe' }
  ])
})
