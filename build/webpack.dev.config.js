const path = require('path')
const env = 'development'
const merge = require('webpack-merge')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const utils = require('./utils')
const baseConfig = require('./webpack.base.config')
const { entry, htmlWebpackPlugins } = require('./entry')(env)

const webpackConfig = merge(baseConfig, {
  entry,
  mode: env,
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    publicPath: '/static/',
    port: 9000,
    open: false,
    host: '0.0.0.0',
    // hot: true
  },
  module: {
    rules: utils.styleLoaders(env)
  },
  output: {
    publicPath: ''
  },
  plugins: [
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    ...htmlWebpackPlugins,
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = webpackConfig
