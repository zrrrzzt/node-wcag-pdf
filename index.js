'use strict'

const getResults = require('./lib/get-results')
const postFile = require('./lib/postFile')
const parseResults = require('./lib/parseResults')

module.exports = (file, callback) => {
  if (!file) {
    return callback(new Error('Missing required input: fileUrl or filePath'), null)
  }

  const requiredAction = file.indexOf('http') !== -1 ? getResults : postFile

  requiredAction(file, (error, data) => {
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
