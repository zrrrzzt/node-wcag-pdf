'use strict'

var postFile = require('./lib/postFile')
var filePath = 'test/data/valid.pdf'

postFile(filePath, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
