'use strict'

var wreck = require('wreck')
var config = require('../config')

function getResults (fileUrl, callback) {
  if (!fileUrl) {
    return callback(new Error('Missing required input fileUrl'))
  }

  var querystring = require('querystring')
  var apiEndpoint = config.API_BASE_URL + '/en/pdfcheck/?'
  var resultUrl = apiEndpoint + querystring.stringify({url: fileUrl})
  var requestOptions = {
    headers: {
      'User-Agent': config.USER_AGENT
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
