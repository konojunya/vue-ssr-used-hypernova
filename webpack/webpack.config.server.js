const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, '../frontend/server.js'),
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../frontend/dist'),
  },
  plugins: [
    new NodemonPlugin({
      watch: path.resolve(__dirname, '../frontend/dist'),
      verbose: true,
      script: path.resolve(__dirname, '../frontend/dist/server.js'),
      ext: 'js',
      legacyWatch: true,
    }),
  ],
  watchOptions: {
    poll: true,
  },
});