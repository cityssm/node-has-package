export const packageNameContainsColonError =
  'Package name should not include ":" character.'

export const scopedPackageNameSlashError =
  'Scoped package names should include one and only one "/".'

export const nonScopedPackageNameSlashError =
  'Package names should not include "/".'

/**
 * Tests if a package name is valid.
 * @param packageName - The name of the package to test.
 * @returns An error message if the package name is invalid, otherwise an empty string.
 */
export function testIfPackageNameIsValid(packageName: string): string {
  // Ex. node:fs
  if (packageName.includes(':')) {
    return packageNameContainsColonError
  }

  const slashCount = (packageName.match(/\//g) ?? []).length

  // Path within scoped package
  if (slashCount !== 1 && packageName.startsWith('@')) {
    return scopedPackageNameSlashError
  }

  // Path within non-scoped package
  if (!packageName.startsWith('@') && slashCount > 0) {
    return nonScopedPackageNameSlashError
  }

  return ''
}
