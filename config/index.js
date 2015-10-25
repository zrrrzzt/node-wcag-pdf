'use strict'

var pkg = require('../package.json')

var config = {
  API_BASE_URL: 'http://checkers.eiii.eu',
  USER_AGENT: 'node-wcag-pdf v' + pkg.version
}

module.exports = config
