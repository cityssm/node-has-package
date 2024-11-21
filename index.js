import fs from 'node:fs/promises';
import path from 'node:path';
export default async function hasPackage(packageName) {
    const cwd = process.cwd();
    const dependencyPath = path.join(cwd, 'node_modules', ...packageName.split('/'), 'package.json');
    try {
        await fs.access(dependencyPath);
        return true;
    }
    catch {
        return false;
    }
}
