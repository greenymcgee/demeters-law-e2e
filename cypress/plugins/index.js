require('./preprocess')

const cypressEslint = require('cypress-eslint-preprocessor')
const prettier = require('prettier')

module.exports = (on) => {
  on('file:processor', cypressEslint)
  on('file:processor', prettier)
}
