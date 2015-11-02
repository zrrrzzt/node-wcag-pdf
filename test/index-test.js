'use strict'

var tap = require('tap')
var checkPdf = require('../index')

tap.test('checkPdf requires a fileUrl or a filePath', function (test) {
  var file = false
  var expectedErrorMessage = 'Missing required input: fileUrl or filePath'
  checkPdf(file, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('checkPdf requires a fileUrl to exist', function (test) {
  var file = 'http://npmlovesyoudoyoulovenpm.no'
  var expectedErrorMessage = 'File could not be found'
  checkPdf(file, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
