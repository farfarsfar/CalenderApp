var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: {
    app: './app.js',
    vendor: ['angular']
  },
  output: {
    path: path.resolve('./frontend/webpack_bundles/'),
    filename: "[name]-[hash].js",
    publicPath: 'http://localhost:8000/frontend/webpack_bundles/',
  },
  plugins: [
    new BundleTracker({filename: './frontend/webpack-stats.json'})
  ],
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