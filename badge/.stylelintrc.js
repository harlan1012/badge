module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-html/vue',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'selector-class-pattern': ['^([a-z][a-z0-9]*)([-_][a-z0-9]+)*$', { resolveNestedSelectors: false }],
  },
  overrides: [
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
}
