'use strict'

const FormData = require('form-data')
const fs = require('fs')
const config = require('../config')

module.exports = (filePath, callback) => {
  if (!filePath) {
    return callback(new Error('Missing required input: filePath'), null)
  }
  let form = new FormData()
  const file = fs.createReadStream(filePath)
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
      let body = ''

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
