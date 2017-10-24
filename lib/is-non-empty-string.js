import {
  both
} from 'ramda'

import {
  isNotEmpty,
  isString
} from 'ramda-adjunct'

export default both(isString, isNotEmpty)
