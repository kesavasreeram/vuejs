const base = require('./webpack.base.config')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const config = Object.assign({}, base, {
  plugins: base.plugins || []
})

// You can add the followig change within the vue-loader rule in base config file as well
// only reason for doing this here is to make sure that base config file remains
// generic and any custom changes go in here
config.module.rules
  .filter(x => { return x.loader == 'vue-loader' })
  .forEach(x => x.options.extractCSS = true)

config.plugins.push(
  new ExtractTextWebpackPlugin('assets/styles.css')
)

module.exports = config
