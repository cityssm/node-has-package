import assert from 'node:assert';
import { describe, it } from 'node:test';
import hasPackage from '../index.js';
await describe('has-package', async () => {
    await it('Returns `true` for an existing package', async () => {
        const exists = await hasPackage('eslint-config-cityssm');
        assert(exists === true);
    });
    await it('Returns `true` for an existing package with organization', async () => {
        const exists = await hasPackage('@types/node');
        assert(exists === true);
    });
    await it('Returns `false` for an unavailable package', async () => {
        const exists = await hasPackage('@cityssm/unavailable-package');
        assert(exists === false);
    });
});
