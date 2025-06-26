# Has Package

[![NPM Version](https://img.shields.io/npm/v/%40cityssm%2Fhas-package)](https://www.npmjs.com/package/@cityssm/has-package)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-has-package.svg/?label=active+issues&show_trend=true&token=DR3479iXPgrcY5n3e5515lA-)](https://app.deepsource.com/gh/cityssm/node-has-package/)
[![codecov](https://codecov.io/gh/cityssm/node-has-package/graph/badge.svg?token=YG1D26SPQF)](https://codecov.io/gh/cityssm/node-has-package)

**Tests if a package is available to be imported. Useful for checking if optional dependencies are installed.**

Unlike other packages that test whether a package is available by importing it,
this package **checks the file system** for the corresponding `package.json` file.
This avoids any package code from running during the check.

## Installation

```sh
npm install @cityssm/has-package
```

## Usage

```javascript
import hasPackage from '@cityssm/has-package'

/*
 * Test for an existing package
 */

let packageExists = await hasPackage('eslint')
console.log(packageExists)
// => true

/*
 * Test for an nonexisting package
 */

packageExists = await hasPackage('@cityssm/non-existing-package')
console.log(packageExists)
// => false
```
