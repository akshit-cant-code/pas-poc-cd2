module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:security/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    jest: 'readonly',
    $: 'readonly',
    it: 'readonly',
    describe: 'readonly',
    expect: 'readonly',
    beforeEach: 'readonly',
    afterEach: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'security'],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-array-index-key': 0,
    'class-methods-use-this': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-script-url': 0,
    'security/detect-object-injection': 0,
    'security/detect-non-literal-fs-filename': 0,
    'security/detect-unsafe-regex': 0,
    'prettier/prettier': 0
  }
};
