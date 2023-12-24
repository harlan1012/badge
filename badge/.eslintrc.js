module.exports = {
  extends: ['alloy', 'alloy/vue'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'h' }],
  },
}
