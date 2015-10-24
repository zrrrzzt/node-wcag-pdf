'use strict'

var getResults = require('./lib/getResults')
var parseResults = require('./lib/parseResults')

function checkPdf (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'), null)
  }

  getResults(options, function (error, data) {
    if (error) {
      return callback(error, null)
    } else {
      parseResults(data, function (err, result) {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, result)
        }
      })
    }
  })
}

module.exports = checkPdf
