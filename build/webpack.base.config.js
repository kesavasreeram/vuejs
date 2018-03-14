const path = require('path')

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },

  module: {
    rules: [
      { // this rule is used for eslint
        enforce: 'pre',  // makes sure that the source files are checked before loading for other loaders
        test: /(\.js$)|(\.vue$)/, // File extensions you want to test
        loader: 'eslint-loader', // loader
        exclude: /node_modules/  // which modules are excluded
      },
      { // this rule is used to parse .vue files
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
}

module.exports = config