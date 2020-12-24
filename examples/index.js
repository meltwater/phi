import path from 'path'

import examplr from '@meltwater/examplr'

import nOf from './n-of.js'

const { createExamples } = examplr

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
