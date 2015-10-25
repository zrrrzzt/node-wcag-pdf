'use strict'

var wreck = require('wreck')
var config = require('../config')
var pkg = require('../package.json')

function getResults (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'))
  }

  var querystring = require('querystring')
  var apiEndpoint = config.API_BASE_URL + '/en/pdfcheck/?'
  var resultUrl = apiEndpoint + querystring.stringify({url: options.url})
  var requestOptions = {
    headers: {
      'User-Agent': 'node-wcag-pdf v' + pkg.version
    }
  }

  wreck.get(resultUrl, requestOptions, function (error, response, payload) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, payload.toString())
    }
  })
}

module.exports = getResults
