import fs from 'node:fs/promises';
import path from 'node:path';
/**
 * Tests whether a package is installed and available to be imported.
 * @param packageName - The name of the package to check.
 * @returns `true` if the package is found.
 */
export default async function hasPackage(packageName) {
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
