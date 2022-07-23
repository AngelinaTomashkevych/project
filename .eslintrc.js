module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'react/require-default-props': 'error',
    semi: 'off',
  },
};
