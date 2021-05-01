'use strict'

const tap = require('tap')
const checkPdf = require('../index')

tap.test('checkPdf requires a fileUrl or a filePath', test => {
  const file = false
  const expectedErrorMessage = 'Missing required input: fileUrl or filePath'
  checkPdf(file, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('checkPdf requires a fileUrl to exist', function (test) {
  const file = 'http://npmlovesyoudoyoulovenpm.no'
  const expectedErrorMessage = 'File could not be found'
  checkPdf(file, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})
