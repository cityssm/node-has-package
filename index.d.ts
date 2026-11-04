/**
 * Tests whether a package is installed and available to be imported.
 * @param packageName - The name of the package to check.
 * @returns `true` if the package is found.
 * @throws {Error} if the package name is invalid.
 */
export default function hasPackage(packageName: string): Promise<boolean>;
