import assert from 'node:assert';
import { describe, it } from 'node:test';
import hasPackage from '../index.js';
await describe('has-package', async () => {
    await it('Returns `true` for an existing package', async () => {
        const exists = await hasPackage('eslint-config-cityssm');
        assert.strictEqual(exists, true);
    });
    await it('Returns `true` for an existing package with organization', async () => {
        const exists = await hasPackage('@types/node');
        assert.strictEqual(exists, true);
    });
    await it('Returns `false` for an unavailable package', async () => {
        const exists = await hasPackage('@cityssm/unavailable-package');
        assert.strictEqual(exists, false);
    });
    await it('Throws error for `node:fs` package', async () => {
        let shouldFail = false;
        try {
            await hasPackage('node:fs');
            shouldFail = true;
            assert.fail('Should have thrown error.');
        }
        catch (error) {
            if (shouldFail) {
                assert.fail(error);
            }
        }
    });
    await it('Throws error for path within package', async () => {
        let shouldFail = false;
        try {
            await hasPackage('eslint/lib/eslint/eslint');
            shouldFail = true;
            assert.fail('Should have thrown error.');
        }
        catch (error) {
            if (shouldFail) {
                assert.fail(error);
            }
        }
    });
    await it('Throws error for path within scoped package', async () => {
        let shouldFail = false;
        try {
            await hasPackage('@babel/code/lib/index');
            shouldFail = true;
            assert.fail('Should have thrown error.');
        }
        catch (error) {
            if (shouldFail) {
                assert.fail(error);
            }
        }
    });
});
