'use strict'

const cheerio = require('cheerio')
const config = require('../config')

module.exports = data => {
  if (!data) {
    throw new Error('Missing required input: data')
  }

  const $ = cheerio.load(data)
  const passed = parseInt($('.markpassed').text().trim().replace(/^\D+/g, ''), 10)
  const failed = parseInt($('.markfailed').text().trim().replace(/^\D+/g, ''), 10)
  const total = passed + failed
  const valid = failed === 0
  const resultUrlPath = $('.lastrow a').attr('href')
  const resultUrl = resultUrlPath ? config.API_BASE_URL + resultUrlPath : ''
  return {
    pdfIsValid: valid,
    passed: passed,
    failed: failed,
    totalChecked: total,
    resultUrl: resultUrl
  }
}
