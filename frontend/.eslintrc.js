module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  plugins: ['react', 'prettier', 'jsdoc'],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true
    }],
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/valid-types': 0,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
};
