module.exports = {
  root: true,
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:jsdoc/recommended'],
  plugins: ['prettier', 'jsdoc'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'jsdoc/require-param-type': 0,
    'sort-imports': ['error', { ignoreCase: true }],
  },
  overrides: [
    {
      files: ['src/database/migrations/**'],
      rules: {
        'jsdoc/require-returns': 0,
        'jsdoc/require-param-description': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
