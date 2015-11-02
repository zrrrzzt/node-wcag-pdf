'use strict'

var getResults = require('./lib/getResults')
var postFile = require('./lib/postFile')
var parseResults = require('./lib/parseResults')

function checkPdf (file, callback) {
  if (!file) {
    return callback(new Error('Missing required input: fileUrl or filePath'), null)
  }

  var requiredAction = file.indexOf('http') !== -1 ? getResults : postFile

  requiredAction(file, function (error, data) {
    if (error) {
      return callback(error, null)
    } else {
      if (/The page could not be downloaded/.test(data)) {
        return callback(new Error('File could not be found'), null)
      } else {
        parseResults(data, function (err, result) {
          if (err) {
            return callback(err, null)
          } else {
            return callback(null, result)
          }
        })
      }
    }
  })
}

module.exports = checkPdf
