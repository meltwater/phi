import test from 'ava'
import { toUpper } from 'ramda'

import mapRecursive from './map-recursive'

test('maps flat object', t => {
  const obj = {x: 'a', y: 'b'}
  t.deepEqual(mapRecursive(toUpper, obj), {
    x: 'A',
    y: 'B'
  })
})

test('maps nested object', t => {
  const obj = {
    x: 'a',
    y: 'b',
    z: {
      t: 'h',
      g: {
        u: {
          j: 'c',
          k: 'd'
        }
      }
    }
  }

  const mappedObj = {
    x: 'A',
    y: 'B',
    z: {
      t: 'H',
      g: {
        u: {
          j: 'C',
          k: 'D'
        }
      }
    }
  }
  t.deepEqual(mapRecursive(toUpper, obj), mappedObj)
})
