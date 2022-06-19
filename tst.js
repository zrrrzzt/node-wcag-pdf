'use strict'

const checkPdf = require('./index')
// const fileUrl = 'http://www.difi.no/sites/difino/files/difi-rapport-2015-7-digitale-barrierar-norske-nettstader.pdf'
// const fileUrl = 'http://npmlovesyoudoyoulovenpm.no'
const fileUrl = 'https://www.vtfk.no/globalassets/vtfk/dokumenter/politikk-og-samfunnsutvikling/bygger-nye-fk/deling-av-tvangssammenslatte-fylkeskommuner---informasjon-om-og-videre-prosess-for.pdf'

checkPdf(fileUrl)
  .then(console.log)
  .catch(console.error)
