const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');

module.exports = function setupDevServer(devServer) {
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app
  ];
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  const clientCompiler = webpack(clientConfig);
  devServer.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  );
  devServer.use(require('webpack-hot-middleware')(clientCompiler));
}
