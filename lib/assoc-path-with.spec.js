import test from 'ava'

import assocPathWith from './assoc-path-with'

const f = x => 2 * x.n

test('returns association', t => {
  t.deepEqual(assocPathWith(f, ['x', 'z'], { n: 3, y: 2 }), {
    n: 3,
    y: 2,
    x: { z: 6 }
  })
})

test('is curried', t => {
  t.deepEqual(assocPathWith(f)(['x', 'z'])({ n: 3, y: 2 }), {
    n: 3,
    y: 2,
    x: { z: 6 }
  })
})
