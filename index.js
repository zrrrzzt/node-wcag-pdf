'use strict'

var getResults = require('./lib/getResults')

function checkPdf (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'), null)
  }

  getResults(options, function (error, data) {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, data)
    }
  })
}

module.exports = checkPdf
