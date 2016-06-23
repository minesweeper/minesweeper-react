"use strict";

var webpack = require('webpack');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');

module.exports = {
  entry: __dirname + "/src/index.jsx",
  output: {
    path: __dirname,
    filename: "scripts.js"
  },

  resolve: {
    modulesDirectories: ["node_modules"],
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
