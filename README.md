#Checks if a number is perfect.

[![Build Status](https://travis-ci.org/all4u1089/perfect-number.svg?branch=master)](https://travis-ci.org/all4u1089/perfect-number)
[![Coverage Status](https://coveralls.io/repos/github/all4u1089/perfect-number/badge.svg?branch=master)](https://coveralls.io/github/all4u1089/perfect-number?branch=master)
[![Stable Version](https://img.shields.io/npm/v/perfect-number.svg)](https://www.npmjs.com/package/perfect-number)
[![Download Status](https://img.shields.io/npm/dt/perfect-number.svg)](https://www.npmjs.com/package/perfect-number) [![License](https://img.shields.io/github/license/all4u1089/perfect-number.svg)](https://github.com/all4u1089/perfect-number/blob/master/LICENSE)

## Requirement

* Node 6

## Installation

`npm install --save perfect-number`

## Usage

```javascript
var check = require('perfect-number');

check.isPerfectNumber(5, (err,value) => {
  console.log(value);//false
});

check.isPerfectNumber(6, (err,value) => {
  console.log(value);//true
});
```

## Test

`npm test`

## Contributing

ThanhPX

# Release History

* 1.0.0 Initial release
* 1.0.3 Update README

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
