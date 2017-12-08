import test from 'ava'

import sleepP from './sleep-p'

test('sleeps', async t => {
  const now = new Date()
  await sleepP(2000)
  const then = new Date()
  t.true(then - now < 2100)
  t.true(then - now > 1999)
})

test('sleeps and returns null', async t => {
  const result = await sleepP()
  t.is(null, result)
})

test('sleeps for 0 by default', async t => {
  const now = new Date()
  await sleepP()
  const then = new Date()
  t.true(then - now < 100)
  t.true(then - now > 0)
})
