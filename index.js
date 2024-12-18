import fs from 'node:fs/promises';
import path from 'node:path';
function testIfPackageNameIsValid(packageName) {
    // node:fs
    if (packageName.includes(':')) {
        return 'Package name should not include ":" character.';
    }
    const slashCount = (packageName.match(/\//g) ?? []).length;
    // Path within scoped package
    if (packageName.startsWith('@') && slashCount !== 1) {
        return 'Scoped package names should include one and only one "/".';
    }
    // Path within non-scoped package
    if (!packageName.startsWith('@') && slashCount > 0) {
        return 'Package names should not include "/".';
    }
    return "";
}
/**
 * Tests whether a package is installed and available to be imported.
 * @param packageName - The name of the package to check.
 * @returns `true` if the package is found.
 */
export default async function hasPackage(packageName) {
    const validPackageNameError = testIfPackageNameIsValid(packageName);
    if (validPackageNameError !== '') {
        throw new Error(validPackageNameError);
    }
    const cwd = process.cwd();
    const dependencyPath = path.join(cwd, 'node_modules', ...packageName.split('/'), 'package.json');
    try {
        await fs.access(dependencyPath, fs.constants.R_OK);
        return true;
    }
    catch {
        return false;
    }
}
