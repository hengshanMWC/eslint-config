module.exports = {
  extends: [
    '@antfu/eslint-config-basic',
  ],
  rules: {
    'no-console': 'off',
    curly: 'off',
    'no-new-func': 0,
    'no-fallthrough': 'off',
    'n/prefer-global/process': 'off',
    indent: 'off',
    'max-attributes-per-line': 'off',
    'arrow-parens': 'off',
    'promise/param-names': 'off',
    'jsdoc/check-alignment': 'off',
    'brace-style': 'off',
    '@stylistic/ts/brace-style@typescript-eslint/ban-types': 'off',
    '@stylistic/ts/brace-style': 'off',
    'html/singleline-max-attributes': 'off',
    '@stylistic/js/no-tabs': 'off',
    'antfu/if-newline': 'off',
  },
}
