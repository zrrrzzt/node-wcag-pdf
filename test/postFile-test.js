'use strict'

var tap = require('tap')
var postFile = require('../lib/postFile')

tap.test('postFile requires a file', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: file'
  postFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
