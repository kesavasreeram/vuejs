const base = require('./webpack.base.config')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: (base.plugins || []).concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/[name].js'
    })
  ])
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

// minify your javascript code
if (typeof process.env.NODE_ENV !== 'undefined' && (process.env.NODE_ENV === 'production')) {
  config.plugins.push(
    new webpack.DefinePlugin({ // libraries will read this parameter and optimize their compilation script for production
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}
module.exports = config
