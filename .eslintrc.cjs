module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'comma-dangle': 'off',
    'max-len': ['warn', { code: 130 }],
  },
}
