const path = require('path');

const config = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  // following rules in module property are used for eslint
  module: {
    rules: [
      {
        enforce: 'pre',  // makes sure that the source files are checked before loading for other loaders
        test: /(\.js$)/, // File extensions you want to test
        loader: 'eslint-loader', // loader
        exclude: /node_modules/  // which modules are excluded
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
};

module.exports = config;
