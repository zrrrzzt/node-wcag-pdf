[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/zrrrzzt/node-wcag-pdf.svg?branch=master)](https://travis-ci.org/zrrrzzt/node-wcag-pdf)
# node-wcag-pdf
Check the Accessibility of a PDF Document using eiii.

You can check a pdf by url or path to file.

## Installation

From npm

```sh
$ npm install wcag-pdf
```
From GiHub

```sh
$ git clone git@github.com:zrrrzzt/node-wcag-pdf.git
```

cd into directory and run the setup script

```sh
$ npm run setup
```

## Usage

To check a pdf by url

```javascript
'use strict'

var checkPdf = require('wcag-pdf')
var fileUrl = 'http://www.difi.no/sites/difino/files/difi-rapport-2015-7-digitale-barrierar-norske-nettstader.pdf'

checkPdf(file, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

returns

```javascript
{ pdfIsValid: true,
  passed: 0,
  failed: 0,
  totalChecked: 0,
  resultUrl: '' }
```

if the pdf is not valid the result might look like this

```javascript
{ pdfIsValid: false,
  passed: 4,
  failed: 4,
  totalChecked: 8,
  resultUrl: 'http://checkers.eiii.eu/en/pdfcheck/?url=https%3A//helsedirektoratet.no/Documents/Folkehelsearbeid%2520i%2520kommunen/Nyhetsbrev-folkehelsearbeid-2015-4.pdf' }
```

check a pdf by file


```javascript
'use strict'

var checkPdf = require('node-wcag-pdf')
var filePath = 'test/data/invalid.pdf'

checkPdf(file, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

returns

```javascript
{ pdfIsValid: false,
  passed: 4,
  failed: 4,
  totalChecked: 8,
  resultUrl: '' }
```