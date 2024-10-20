module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parserOptions: {
    project: [
      "./tsconfig.json",
      "./packages/parking/tsconfig.json",
      "./packages/common/tsconfig.json",
      "./packages/adhoc/tsconfig.json",
      "./packages/onboarding/tsconfig.json",
      "./packages/stacks/helpers/tsconfig.json",
    ],
  },
  extends: [
    'airbnb/base',
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  ignorePatterns: [
    'node_modules/',
    '.sst/',
    '.eslintrc.cjs',
    'sst.config.ts',
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    '@typescript-eslint',
    '@stylistic/ts',
  ],
  rules: {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'linebreak-style': [
      'off',
    ],
    'quotes': [
      'error',
      'single',
    ],
    "semi": "off",
    "@typescript-eslint/semi": "error",
    "no-extra-semi": "error",
    "semi-style": ["error", "last"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    'no-console': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'max-len': [
      'error', {
        'code': 150,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      }
    ],
    'object-curly-newline': [
      'error', {
        'ObjectExpression': { 'multiline': true, 'minProperties': 10, 'consistent': true },
        'ObjectPattern': { 'multiline': true, 'minProperties': 10, 'consistent': true },
        'ImportDeclaration': { 'multiline': true, 'minProperties': 10, 'consistent': true },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 10, 'consistent': true },
      }
    ],
    'import/prefer-default-export': 'off',
    'default-param-last': 'off',
    '@typescript-eslint/require-await': 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
    'space-before-function-paren': ['error', 'always'],
    'no-whitespace-before-property': 'error',
    'no-multi-spaces': 'error',
    'space-before-blocks': ['error', {
      'functions': 'always',
      'keywords': 'always',
      'classes': 'always',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'space-infix-ops': 'error',
    'arrow-spacing': 'error',
    'switch-colon-spacing': 'error',
    'keyword-spacing': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-new': 0,
  },
}