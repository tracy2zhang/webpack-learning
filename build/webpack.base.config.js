const path = require('path')

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
        test: /\.js$/,
        // include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            cacheDirectory: true,
            plugins: ['lodash', 'transform-runtime', require('babel-plugin-transform-object-rest-spread')]
          }
        }
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
  }
}
