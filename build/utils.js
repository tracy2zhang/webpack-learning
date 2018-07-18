const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const fallback = 'style-loader'

exports.styleLoaders = env => {
  const generateLoaders = (type, options) => {
    const sourceMap = { sourceMap: env !== 'production' }
    const loaders = [
      'css-hot-loader',
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
  }
  return ['css', 'less'].map(type => {
    const loaders = generateLoaders(type)
    return {
      test: new RegExp(`\\.${type}$`),
      use: loaders
    }
  })
}
