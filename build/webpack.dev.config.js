const path = require('path')
const env = 'development'
const merge = require('webpack-merge')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const utils = require('./utils')
const baseConfig = require('./webpack.base.config')
const { entry, htmlWebpackPlugins } = require('./entry')(env)

const webpackConfig = merge(baseConfig, {
  entry,
  mode: env,
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    port: 9000,
    open: false,
    host: '0.0.0.0'
  },
  module: {
    rules: utils.styleLoaders(env)
  },
  output: {
    publicPath: ''
  },
  plugins: [
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    ...htmlWebpackPlugins,
    new FriendlyErrorsWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = webpackConfig
