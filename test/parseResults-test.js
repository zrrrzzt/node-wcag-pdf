'use strict'

var tap = require('tap')
var fs = require('fs')
var parseResults = require('../lib/parseResults')

tap.test('parseResults requires data', function (test) {
  var data = false
  var expectedErrorMessage = 'Missing required input: data'
  parseResults(data, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('parseResults reports not valid for result_fail.html', function (test) {
  var data = fs.readFileSync('test/data/result_fail.html').toString()
  parseResults(data, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.valid, false)
    test.done()
  })
})

tap.test('parseResults reports valid for result_pass.html', function (test) {
  var data = fs.readFileSync('test/data/result_pass.html').toString()
  parseResults(data, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.valid, true)
    test.done()
  })
})
