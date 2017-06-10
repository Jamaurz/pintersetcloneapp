var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader",
        exclude: /node_modules/
      }
    ]
  }
}
