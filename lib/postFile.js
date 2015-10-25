'use strict'

function postFile (filePath, callback) {
  if (!filePath) {
    return callback(new Error('Missing required input: filePath'), null)
  }

  var FormData = require('form-data')
  var fs = require('fs')
  var config = require('../config')
  var form = new FormData()
  var file = fs.createReadStream(filePath)
  form.append('file', file)
  form.submit({
    host: 'checkers.eiii.eu',
    path: '/en/pdfcheck/',
    headers: {
      'User-Agent': config.USER_AGENT,
      'Origin': 'http://checkers.eiii.eu',
      'Referer': 'http://checkers.eiii.eu/en/pdfcheck/'
    }
  }, function (error, response) {
    if (error) {
      return callback(error, null)
    } else {
      var body = ''

      response.on('data', function (chunk) {
        body += chunk.toString()
      })

      response.on('end', function () {
        return callback(null, body)
      })

      response.on('error', function (error) {
        console.error(error)
      })
    }
  })
}

module.exports = postFile
