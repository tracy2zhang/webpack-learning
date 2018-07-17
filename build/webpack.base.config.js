const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function resolve (d) {
  return path.resolve(__dirname, d)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('../src')
    }
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'images/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: 'font/[name].[hash:7].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    // extract css into its own file
    // new ExtractTextPlugin({
    //   filename: 'css/[name].[md5:contenthash:hex].css'
    // })
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ]
}
