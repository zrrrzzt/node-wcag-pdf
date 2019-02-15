'use strict'

const tap = require('tap')
const fs = require('fs')
const parseResults = require('../lib/parse-results')

tap.test('parseResults requires data', test => {
  const data = false
  const expectedErrorMessage = 'Missing required input: data'
  tap.throws(() => {
    parseResults(data)
  }, { message: expectedErrorMessage })
  test.done()
})

tap.test('parseResults reports not valid for result_fail.html', function (test) {
  const result = fs.readFileSync('test/data/result_fail.html').toString()
  const data = parseResults(result)
  tap.equal(data.pdfIsValid, false)
  test.done()
})

tap.test('parseResults reports valid for result_pass.html', function (test) {
  const result = fs.readFileSync('test/data/result_pass.html').toString()
  const data = parseResults(result)
  tap.equal(data.pdfIsValid, true)
  test.done()
})
