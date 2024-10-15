import { Linter } from 'eslint';

const config: Linter.Config = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows modern ECMAScript features
        sourceType: 'module', // Allows the use of imports
    },
    rules: {
        // Customize your server-side linting rules here
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'error', // Disallow usage of any type
    },
};

export default config;