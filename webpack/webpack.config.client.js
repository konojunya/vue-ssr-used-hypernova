const path = require('path');
const merge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  target: 'web',
  entry: path.resolve(__dirname, '../frontend/client.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../public/frontend'),
    publicPath: '/frontend/',
  },
  plugins: [new AssetsPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8000,
    watchOptions: {
      poll: true,
    },
  },
});