var testConfig = require('../../build/webpack.test.config.js')

module.exports = function (config) { // this will run from the console using karma
  config.set({ // setting up karma configuration to run the tests
    browsers: ['PhantomJS'], // we need a headless brower to run the tests
    frameworks: ['mocha', 'sinon-chai'],
    files: ['./index.js'], // files we will load in the browser
    preprocessors: {
      './index.js': ['webpack'] // which preprocessors need to run based on the files and their content
    },
    plugins: [
      'karma-mocha',
      'karma-sinon-chai',
      'karma-phantomjs-launcher',
      'karma-webpack'
    ],
    webpack: testConfig,
    webpackMiddleware: {
      noInfo: true // we do not want webpack middle ware to show its logs in the test console.
    }
  })
}
