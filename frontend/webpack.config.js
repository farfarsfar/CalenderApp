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
    filename: "[name]-[hash].js"
  },
  plugins: [
    new BundleTracker({filename: './frontend/webpack-stats.json'}),
    new webpack.optimize.CommonsChunkPlugin
      (/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
  ],
  module: {
    loaders: [
      {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel?presets[]=es2015'},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192'},
      {test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/"},
      {test: /\.svg$/, loader: "file"},
      {test: /\.html$/, loader: "ng-cache-loader"}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
};