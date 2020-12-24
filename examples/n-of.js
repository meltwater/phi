import { nOf } from '../index.js'

export default ({ log }) => (x = 'foo', n = 5) => {
  const num = parseInt(n)
  log.debug({ x, n: num }, 'Input')
  if (isNaN(num)) throw new Error(`Not a number, got ${n}.`)
  const result = nOf(x, num)
  return result
}
