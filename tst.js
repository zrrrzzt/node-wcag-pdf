'use strict'

const checkPdf = require('./index')
const fileUrl = 'http://www.difi.no/sites/difino/files/difi-rapport-2015-7-digitale-barrierar-norske-nettstader.pdf'

checkPdf(fileUrl)
  .then(console.log)
  .catch(console.error)
