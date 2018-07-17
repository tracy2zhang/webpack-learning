// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const fallback = 'style-loader'

exports.styleLoaders = env => {
  const generateLoaders = (type, options) => {
    const sourceMap = { sourceMap: env !== 'production' }
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
          publicPath: '../'
        }
      },
      {
        loader: 'css-loader',
        options: {
          minimize: env === 'production',
          ...sourceMap
        }
      },
      'postcss-loader'
    ]
    if (type !== 'css') {
      loaders.push({
        loader: `${type}-loader`,
        options: { ...options, ...sourceMap }
      })
    }
    return loaders
    // return ExtractTextPlugin.extract({
    //   use: loaders,
    //   fallback,
    //   publicPath: '../'
    // })
  }
  return ['css', 'less'].map(type => {
    return {
      test: new RegExp(`\\.${type}$`),
      use: generateLoaders(type)
    }
  })
}
