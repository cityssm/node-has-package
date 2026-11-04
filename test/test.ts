/* eslint-disable node-test/no-async-describe */

import assert from 'node:assert'
import { describe, it } from 'node:test'

import hasPackage from '../index.js'
import {
  nonScopedPackageNameSlashError,
  packageNameContainsColonError,
  scopedPackageNameSlashError
} from '../utilities.js'

await describe('has-package', async () => {
  await it('Returns `true` for an existing, unscoped package', async () => {
    const doesPackageExist = await hasPackage('eslint-config-cityssm')
    assert.strictEqual(doesPackageExist, true)
  })

  await it('Returns `true` for an existing scoped package', async () => {
    const doesPackageExist = await hasPackage('@types/node')
    assert.strictEqual(doesPackageExist, true)
  })

  await it('Returns `false` for an unavailable, unscoped package', async () => {
    const doesPackageExist = await hasPackage('unavailable-package')
    assert.strictEqual(doesPackageExist, false)
  })

  await it('Returns `false` for an unavailable scoped package', async () => {
    const doesPackageExist = await hasPackage('@cityssm/unavailable-package')
    assert.strictEqual(doesPackageExist, false)
  })

  await it('Throws error for `node:fs` package', async () => {
    await assert.rejects(
      async () => {
        await hasPackage('node:fs')
      },
      {
        message: packageNameContainsColonError,
        name: 'Error'
      }
    )
  })

  await it('Throws error for path within package', async () => {
    await assert.rejects(
      async () => {
        await hasPackage('eslint/lib/eslint/eslint')
      },
      {
        message: nonScopedPackageNameSlashError,
        name: 'Error'
      }
    )
  })

  await it('Throws error for path within scoped package', async () => {
    await assert.rejects(
      async () => {
        await hasPackage('@babel/code/lib/index')
      },
      {
        message: scopedPackageNameSlashError,
        name: 'Error'
      }
    )
  })
})
