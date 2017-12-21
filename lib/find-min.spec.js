import test from 'ava'

import findMin from './find-min'

test('finds minimum', t => {
  t.is(findMin([10, 0, 4, 5]), 0)
  t.is(findMin([10, 4, 5]), 4)
  t.is(findMin([-1, 10, 0, -4, 5]), -4)
})
