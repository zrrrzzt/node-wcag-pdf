'use strict'
// 'test/data/valid.pdf'
// `
// https://helsedirektoratet.no/Documents/Folkehelsearbeid%20i%20kommunen/Nyhetsbrev-folkehelsearbeid-2015-4.pdf
var checkPdf = require('./index')
var file = 'test/data/invalid.pdf'

checkPdf(file, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
