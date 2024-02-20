const path = require('path');
var nodeExternals = require('webpack-node-externals');

const slsw = require('serverless-webpack');
module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
