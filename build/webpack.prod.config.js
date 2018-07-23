const path = require('path')
const env = 'production'
const cleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const merge = require('webpack-merge')
const utils = require('./utils')
const baseConfig = require('./webpack.base.config')
const { entry, htmlWebpackPlugins } = require('./entry')(env)

const webpackConfig = merge(baseConfig, {
  entry,
  mode: env,
  devtool: false,
  module: {
    rules: utils.styleLoaders(env)
  },
  plugins: [
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..')
    }),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    ...htmlWebpackPlugins
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  }
})

module.exports = webpackConfig
