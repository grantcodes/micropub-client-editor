const webpack = require('webpack')

var options = {
  mode: 'production',
  target: 'web',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js',
    library: 'PostrchildEditorBase',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  optimization: {
    minimize: false,
  },
}

module.exports = options
