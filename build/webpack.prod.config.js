const path = require('path')
const webpack = require('webpack')
const env = 'production'
const cleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require('webpack-manifest-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
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
    /* config.plugin('hash-module-ids') */
    new webpack.HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    // extract css into its own file
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    ...htmlWebpackPlugins,
    // inline the manifest chunk to html, same name with runtimeChunk
    new InlineManifestWebpackPlugin('manifest'),
    // generate a manifest.json file in your root output directory
    // with a mapping of all source file names to their corresponding output file
    new ManifestPlugin(),
    // analysis the bundles
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      minSize: 30000,
      maxSize: 0,
      chunks: 'all',
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // name: true
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      name () {
        return 'manifest'
      }
    },
    noEmitOnErrors: true
  }
})

module.exports = webpackConfig
