const path = require('path')
const cleanPlugin = require('clean-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')

const mode = 'development'
const { entry, htmlWebpackPlugins } = require('./entry')
console.log(entry);

function resolve (d) {
  return path.resolve(__dirname, d)
}

module.exports = {
  mode,
  entry,
  devtool: mode === 'development' ? 'none' : 'none',
  resolve: {
    alias: {
      '@': resolve('../src')
    }
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
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
    new cleanPlugin([resolve('../dist')], {
      root: resolve('../')
    }),
    ...htmlWebpackPlugins
  ]
}
