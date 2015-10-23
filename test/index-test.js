'use strict'

var tap = require('tap')
var checkPdf = require('../index')

tap.test('checkPdf requires an option object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  checkPdf(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
