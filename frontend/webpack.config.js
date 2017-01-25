var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: {
    app: './app.js',
    vendor: ['angular', 'angular-ui-router']
  },
  output: {
    path: path.resolve('./frontend/webpack_bundles/'),
    filename: "[name]-[hash].js",
    publicPath: 'http://localhost:8000/frontend/webpack_bundles/',
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new BundleTracker({filename: './frontend/webpack-stats.json'}),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8000/'
    }),
    new CopyWebpackPlugin([
       { from: './**/*.html' },
	   { from: './assets/**/*.html' },
    ], {
      copyUnmodified: false
    }),
    new CleanWebpackPlugin(['webpack_bundles'], {
      root: __dirname,
      verbose: true,
      dry: false,
      exclude: ['shared.js']
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192'},
      {test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/"},
      {test: /\.svg$/, loader: "file"},
      {test: /\.html$/, loader: "ng-cache-loader"}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};