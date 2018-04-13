var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js'
  },
  module:{
    rules: [{
      test: /.jsx?$/,
      loader:'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015','react']
      }
    },
    {
     test: /\.css$/,
     loader: "style-loader!css-loader"
   },
   { test: /\.(woff|woff2|eot|ttf|svg)$/,loader: 'url-loader'},

 ]
  }
}
