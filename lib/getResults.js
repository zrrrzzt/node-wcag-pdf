'use strict'

var wreck = require('wreck')
var pkg = require('../package.json')

function getResults (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'))
  }

  var querystring = require('querystring')
  var apiEndpoint = 'http://checkers.eiii.eu/en/pdfcheck/?'
  var resultUrl = apiEndpoint + querystring.stringify(options.qs)
  var reqOptions = {
    headers: {
      user_agent: 'node-wcag-pdf ' + pkg.version
    }
  }

  wreck.get(resultUrl, reqOptions, function (error, response, payload) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, payload.toString())
    }
  })
}

module.exports = getResults
