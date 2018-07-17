const path = require('path')
const env = 'production'
const cleanWebpackPlugin = require('clean-webpack-plugin')
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
    ...htmlWebpackPlugins
  ]
})

module.exports = webpackConfig
