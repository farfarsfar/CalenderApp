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
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    preprocessors: {
      'frontend/app/app.js': ['webpack'],
      'frontend/app/tests.entry.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      'frontend/app/app.js',
      'frontend/app/tests.entry.js'
    ],
    frameworks: ['jasmine'],
    port: 9876,
    browsers: [
      'Chrome'
    ],
    logLevel: config.LOG,
    plugins: [
      require('karma-coverage'),
      require('karma-spec-reporter'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require("karma-phantomjs-launcher"),
      require("karma-firefox-launcher"),
      require("karma-webpack"),
    ]
  })
};