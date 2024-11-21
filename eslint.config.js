import cityssmConfig, { tseslint } from 'eslint-config-cityssm';
export const config = tseslint.config(...cityssmConfig, {
    rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off'
    }
});
export default config;
