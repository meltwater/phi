import test from 'ava'

import assocWith from './assoc-with'

const f = (x) => 2 * x.n

test('returns association', (t) => {
  t.deepEqual(assocWith(f, 'x', { n: 3, y: 2 }), { n: 3, y: 2, x: 6 })
})

test('is curried', (t) => {
  t.deepEqual(assocWith(f)('x')({ n: 3, y: 2 }), { n: 3, y: 2, x: 6 })
})
