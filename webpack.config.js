var path = require('path')
var webpack = require('webpack')
require('babel-polyfill')

module.exports = {
  entry: __dirname + '/app/index.js', 
  output: {
    path: path.resolve(__dirname + '/dist'), 
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/, /server/], use: 'babel-loader'},
      {test: /\.css/, use: ['style-loader', 'css-loader']},
      {test: /\.pug$/, use: 'html-loader'}
    ] 
  },
  resolve: {
    extensions: ['.js']
  }, 
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
