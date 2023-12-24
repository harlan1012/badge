module.exports = {
  '**/*': ['npx prettier --write .'],
  '**/*.{js,jsx,ts,tsx,vue}': ['eslint .', 'npx prettier --write .'],
  'src/**/*.{css,less,vue}': ['stylelint --fix'],
}
