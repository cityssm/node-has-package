import fs from 'node:fs/promises'
import path from 'node:path'

import { testIfPackageNameIsValid } from './utilities.js'

/**
 * Tests whether a package is installed and available to be imported.
 * @param packageName - The name of the package to check.
 * @returns `true` if the package is found.
 * @throws {Error} if the package name is invalid.
 */
export default async function hasPackage(
  packageName: string
): Promise<boolean> {
  const validPackageNameError = testIfPackageNameIsValid(packageName)
  if (validPackageNameError !== '') {
    throw new Error(validPackageNameError)
  }

  const cwd = process.cwd()

  const dependencyPath = path.join(
    cwd,
    'node_modules',
    ...packageName.split('/'),
    'package.json'
  )

  try {
    await fs.access(dependencyPath, fs.constants.R_OK)
    return true
  } catch {
    return false
  }
}
