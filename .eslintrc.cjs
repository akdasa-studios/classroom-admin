/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      'typescript': true,
      'node': true,
    }
  },
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
  },
  ignorePatterns: ['dist/**'],
}
