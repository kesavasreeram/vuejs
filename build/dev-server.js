const webpack = require('webpack')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')
const path = require('path')
const MFS = require('memory-fs') //memory file system module

module.exports = function setupDevServer(devServer, onUpdate) {
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ]
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  const clientCompiler = webpack(clientConfig)
  devServer.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  )
  devServer.use(require('webpack-hot-middleware')(clientCompiler))

  // for server side rendering
  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  const outputPath = path.join(serverConfig.output.path, 'server/main.js')
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, () => {
    onUpdate(mfs.readFileSync(outputPath, 'utf-8'))
  })
}
