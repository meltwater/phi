import test from 'ava'

import mapPath from './map-path'

test('maps existing path', t => {
  t.deepEqual(
    mapPath(['a', 'b', 'c'], x => x + 2, {q: 3, a: {b: {c: 6}}}),
    {q: 3, a: {b: {c: 8}}})
})

test('maps non-existing path', t => {
  t.deepEqual(
    mapPath(['a', 'b', 'c'], x => 'foo', {q: 3, a: {z: {c: 6}}}),
    {q: 3, a: {b: {c: 'foo'}, z: {c: 6}}})
})

test('is curried', t => {
  t.deepEqual(
    mapPath(['a', 'b', 'c'])(x => x + 2)({q: 3, a: {b: {c: 6}}}),
    {q: 3, a: {b: {c: 8}}})
})
