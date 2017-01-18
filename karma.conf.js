var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    webpack: {
      module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'},
          {test: /\.css$/, loader: "style!css"},
          {test: /\.less$/, loader: "style!css!less"},
          {test: /\.html$/, loader: "ng-cache-loader"}
        ]
      },
      resolve: {
        modulesDirectories: [
          "",
          "node_modules"
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    preprocessors: {
      'frontend/app/**/*': ['webpack'],
      'frontend/app/**/*.js': ['coverage']
    },
    reporters: ['progress'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    files: [
      'frontend/app/tests.entry.js'
    ],
    frameworks: ['mocha'],
    port: 9876,
    colors: true,
    browsers: [
      'PhantomJS'
    ],
    logLevel: config.LOG_INFO,
    plugins: [
      require('karma-coverage'),
      require('karma-spec-reporter'),
      require('karma-mocha'),
      require("karma-chai"),
      require("karma-phantomjs-launcher"),
      require("karma-firefox-launcher"),
      require("karma-webpack"),
    ]
  })
};