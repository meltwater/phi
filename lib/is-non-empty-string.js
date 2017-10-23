import {
  complement,
  either,
  isEmpty
} from 'ramda'

import {
  isNotString
} from 'ramda-adjunct'

export default complement(either(isNotString, isEmpty))
