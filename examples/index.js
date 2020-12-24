import path from 'path'

import { createExamples } from '@meltwater/examplr'

import nOf from './n-of.js'

export const examples = {
  nOf
}

const envVars = ['LOG_LEVEL', 'LOG_FILTER', 'LOG_OUTPUT_MODE']

const defaultOptions = {}

const { runExample } = createExamples({
  examples,
  envVars,
  defaultOptions
})

runExample({
  local: path.resolve('examples', 'local.json')
})
