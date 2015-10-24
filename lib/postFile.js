'use strict'

function postFile (file, callback) {
  if (!file) {
    return callback(new Error('Missing required input: file'), null)
  }
}

module.exports = postFile
