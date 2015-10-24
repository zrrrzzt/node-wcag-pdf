'use strict'

function parseResults (data, callback) {
  if (!data) {
    return callback(new Error('Missing required input: data'), null)
  }

  var cheerio = require('cheerio')
  var $ = cheerio.load(data)
  var passed = parseInt($('.markpassed').text().trim().replace( /^\D+/g, ''), 10)
  var failed = parseInt($('.markfailed').text().trim().replace( /^\D+/g, ''), 10)
  var total = passed + failed
  var resultUrlPath = $('.lastrow a').attr('href')
  var baseUrl = 'http://checkers.eiii.eu'
  var results = {
    passed: passed,
    failed: failed,
    totalChecked: total,
    resultUrl: baseUrl + resultUrlPath
  }

  return callback(null, results)
}

module.exports = parseResults
