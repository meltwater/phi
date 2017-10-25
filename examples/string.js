import { isNonEmptyString } from '../lib'

export default ({log}) => (check = '') => {
  log.debug({check}, 'Input')
  const result = isNonEmptyString(check)
  if (!result) throw new Error('Check was not true.')
  return result
}
