module.exports = {
  plugins: {
    '@guanghe-pub/postcss-px-to-viewport': {
      viewportWidth: 750,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: true,
    },
  },
}
