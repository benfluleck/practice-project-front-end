const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname,
  entry: "./js/Clientapp.jsx",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }

    ]
  }
};
