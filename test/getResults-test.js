'use strict'

var tap = require('tap')
var getResults = require('../lib/getResults')

tap.test('getResults requires an option object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  getResults(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

/*
tap.test('getResults should catch errors', function (test) {
  var options = {
    apiUrl: 'http://yabendabenduhuusnippelapp.no',
    qs: {
      query: '994528130'
    }
  }
  getResults(options, function (error, data) {
    tap.ok(error, 'Error exists')
    test.done()
  })
})

tap.test('Returns error message if dataset not found', function (test) {
  var options = {
    'apiUrl': 'http://hotell.difi.no/api/json/npmlovesyou',
    'qs': {
      query: 'doyoulovenpm'
    }
  }
  var expectedErrorMessage = 'Dataset or folder not found.'
  getResults(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
*/
