module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": [2, "tab"],
    "no-tabs": 0,
    "no-useless-escape": 0,
    // "semi": [2, "never"], this rules is for remove semicolon on eslint
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
