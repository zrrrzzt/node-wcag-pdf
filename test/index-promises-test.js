'use strict'

const tap = require('tap')
const checkPdf = require('../index')

tap.test('checkPdf requires a fileUrl or a filePath', test => {
  const file = false
  const expectedErrorMessage = 'Missing required input: fileUrl or filePath'
  checkPdf(file)
    .then(console.log)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      return test.end()
    })
})

tap.test('checkPdf requires a fileUrl to exist', function (test) {
  const file = 'http://npmlovesyoudoyoulovenpm.no'
  const expectedErrorMessage = 'File could not be found'
  checkPdf(file)
    .then(console.log)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      return test.end()
    })
})
