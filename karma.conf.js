var webpack = require('webpack'),
    wpcfg   = require('./frontend/webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    webpack: wpcfg,
    webpackMiddleware: {
      stats: {
        colors: true,
        chunks: false,
        modules: false,
        chunkModules: false,
        assets: false
      },
      noInfo: true
    },
    preprocessors: {
      'frontend/app/**/*': ['webpack']
    },
    files: [
      'frontend/app/tests.entry.js'
    ],
    frameworks: ['mocha', 'chai'],
    port: 9876,
    colors: true,
    
    browsers: [
      'PhantomJS'
    ],
    logLevel: config.LOG_WARN,
    captureTimeout: 30000,
    plugins: [
      require('karma-mocha'),
      require("karma-chai"),
      require("karma-phantomjs-launcher"),
      require("karma-firefox-launcher"),
      require("karma-webpack"),
    ]
  })
};