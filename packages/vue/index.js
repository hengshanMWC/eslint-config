const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
module.exports = {
  extends: [
    TS
      ? '@abmao/eslint-config-ts'
      : '@abmao/eslint-config-basic',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
}
