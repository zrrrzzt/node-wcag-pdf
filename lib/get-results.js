'use strict'

const axios = require('axios')
const validUrl = require('valid-url')
const querystring = require('querystring')
const config = require('../config')
axios.defaults.headers.common['User-Agent'] = config.USER_AGENT
const apiEndpoint = config.API_BASE_URL + '/en/pdfcheck/?'

module.exports = (fileUrl, callback) => {
  if (!fileUrl) {
    return callback(new Error('Missing required input fileUrl'))
  }

  if (!validUrl.isWebUri(fileUrl)) {
    return callback(new Error('Invalid input: fileUrl must a valid url'))
  }
  const resultUrl = apiEndpoint + querystring.stringify({url: fileUrl})
  axios.get(resultUrl)
    .then(result => callback(null, result.data))
    .catch(error => callback(error, null))
}
