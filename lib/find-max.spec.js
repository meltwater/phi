import test from 'ava'

import findMax from './find-max'

test('finds maximum', t => {
  t.is(findMax([10, 0, 4, 5]), 10)
  t.is(findMax([-10, 4, 5]), 5)
  t.is(findMax([-1, 42, 0, 4, 5]), 42)
})
