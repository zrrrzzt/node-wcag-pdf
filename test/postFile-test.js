'use strict'

var tap = require('tap')
var postFile = require('../lib/postFile')

tap.test('postFile requires a filePath', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: filePath'
  postFile(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
