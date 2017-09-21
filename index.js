'use strict'

const getResults = require('./lib/get-results')
const postFile = require('./lib/postFile')
const parseResults = require('./lib/parse-results')

module.exports = (file, callback) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      const error = new Error('Missing required input: fileUrl or filePath')
      return callback ? callback(error, null) : reject(error)
    }

    const requiredAction = file.indexOf('http') !== -1 ? getResults : postFile

    requiredAction(file, (error, data) => {
      if (error) {
        return callback ? callback(error, null) : reject(error)
      } else {
        if (/The page could not be downloaded/.test(data)) {
          const error = new Error('File could not be found')
          return callback ? callback(error, null) : reject(error)
        } else {
          const result = parseResults(data)
          return callback ? callback(null, result) : resolve(result)
        }
      }
    })
  })
}
