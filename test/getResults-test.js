'use strict'

var tap = require('tap')
var getResults = require('../lib/getResults')

tap.test('getResults requires a fileUrl', function (test) {
  var fileUrl = false
  var expectedErrorMessage = 'Missing required input fileUrl'
  getResults(fileUrl, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('getResults requires a fileUrl', function (test) {
  var fileUrl = 'pysjefæstljåbæssfar'
  var expectedErrorMessage = 'Invalid input: fileUrl must a valid url'
  getResults(fileUrl, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
