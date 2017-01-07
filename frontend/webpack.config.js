var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    entry: './assets/js/index',
    output: {
        path: path.resolve('./frontend/webpack_bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [
        new BundleTracker({filename: './frontend/webpack-stats.json'})
    ],
    module: {
        loaders: [
            {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel?presets[]=es2015'},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url?limit=8192'},
            {test: /\.(otf|eot|ttf)$/, loader: "file?prefix=font/"},
            {test: /\.svg$/, loader: "file"}
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    }
};