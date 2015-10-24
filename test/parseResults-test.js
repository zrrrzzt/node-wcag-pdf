'use strict'

var tap = require('tap')
var parseResults = require('../lib/parseResults')

tap.test('parseResults requires data', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: data'
  parseResults(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
