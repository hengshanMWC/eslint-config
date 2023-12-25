const { isPackageExists } = require('local-pkg')

const TS = isPackageExists('typescript')
module.exports = {
  extends: [
    '@antfu/eslint-config-react',
    TS
      ? '@abmao/eslint-config-ts'
      : '@abmao/eslint-config-basic',
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
  },
}
