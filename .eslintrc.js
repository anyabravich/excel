module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google', 'prettier'],
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
  },
};
