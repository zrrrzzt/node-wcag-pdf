'use strict'

module.exports = (data, callback) => {
  if (!data) {
    return callback(new Error('Missing required input: data'), null)
  }

  var cheerio = require('cheerio')
  var config = require('../config')
  var $ = cheerio.load(data)
  var passed = parseInt($('.markpassed').text().trim().replace(/^\D+/g, ''), 10)
  var failed = parseInt($('.markfailed').text().trim().replace(/^\D+/g, ''), 10)
  var total = passed + failed
  var valid = failed === 0
  var resultUrlPath = $('.lastrow a').attr('href')
  var resultUrl = resultUrlPath ? config.API_BASE_URL + resultUrlPath : ''
  var results = {
    pdfIsValid: valid,
    passed: passed,
    failed: failed,
    totalChecked: total,
    resultUrl: resultUrl
  }

  return callback(null, results)
}
