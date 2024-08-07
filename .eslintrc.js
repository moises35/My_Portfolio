module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // 'max-len': [ 'error', { code: 120 } ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'brace-style': [ 'error', 'stroustrup', { allowSingleLine: false } ],
    'no-console': [ 'error' ],
    'no-warning-comments': [ 'warn' ],
    curly: [ 'error', 'all' ],
    'prefer-template': [ 'error' ],
    'prefer-const': [ 'error' ],
    'require-await': [ 'error' ],
    quotes: [ 'error', 'single', { allowTemplateLiterals: true } ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'standard/no-callback-literal': [ 'off' ],
    camelcase: [ 'error', { properties: 'always' } ],
    'import/order': [
      'error',
      { groups: [ 'builtin', 'external', 'parent', 'sibling', 'index' ] },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 100,
        multiline: 1,
        // multiline: {
        //   max: 1,
        //   allowFirstLine: false,
        // },
      },
    ],
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline': [ 'error', 'multiline' ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: [ 'const', 'let', 'var' ], next: '*' },
      {
        blankLine: 'any',
        prev: [ 'const', 'let', 'var' ],
        next: [ 'const', 'let', 'var' ],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [ 'return', 'if', 'while', 'for', 'throw' ],
      },
    ],
    'vue/multi-word-component-names': 'off',
  },
}
