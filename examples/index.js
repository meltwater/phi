import path from 'path'

import createExamples from '@meltwater/examplr'

import string from './string'

export const examples = {
  string
}

const envVars = [
  'LOG_LEVEL',
  'LOG_OUTPUT_MODE'
]

const defaultOptions = {}

if (require.main === module) {
  const { runExample } = createExamples({
    examples,
    envVars,
    defaultOptions
  })

  runExample({
    local: path.resolve(__dirname, 'local.json')
  })
}
