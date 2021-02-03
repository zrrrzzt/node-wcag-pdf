'use strict'

const tap = require('tap')
const postFile = require('../lib/postFile')

tap.test('postFile requires a filePath', function (test) {
  const filePath = false
  const expectedErrorMessage = 'Missing required input: filePath'
  postFile(filePath, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('postFile returns data', function (test) {
  const filePath = 'test/data/invalid.pdf'
  postFile(filePath, function (error, data) {
    if (error) {
      throw error
    }
    tap.ok(data, 'Data returned')
    test.done()
  })
})
