'use strict'

const tap = require('tap')
const getResults = require('../lib/get-results')

tap.test('getResults requires a fileUrl', function (test) {
  const fileUrl = false
  const expectedErrorMessage = 'Missing required input fileUrl'
  getResults(fileUrl, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('getResults requires a fileUrl', function (test) {
  const fileUrl = 'pysjefæstljåbæssfar'
  const expectedErrorMessage = 'Invalid input: fileUrl must a valid url'
  getResults(fileUrl, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
