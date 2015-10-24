'use strict'

function parseResults (data, callback) {
  if (!data) {
    return callback(new Error('Missing required input: data'), null)
  }

  var cheerio = require('cheerio')
  var config = require('../config')
  var $ = cheerio.load(data)
  var passed = parseInt($('.markpassed').text().trim().replace(/^\D+/g, ''), 10)
  var failed = parseInt($('.markfailed').text().trim().replace(/^\D+/g, ''), 10)
  var total = passed + failed
  var resultUrlPath = $('.lastrow a').attr('href')
  var results = {
    passed: passed,
    failed: failed,
    totalChecked: total,
    resultUrl: config.API_BASE_URL + resultUrlPath
  }

  return callback(null, results)
}

module.exports = parseResults
