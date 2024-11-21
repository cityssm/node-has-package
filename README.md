# Has Package

**Tests if a package is available to be imported. Useful for checking optional dependencies.**

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
