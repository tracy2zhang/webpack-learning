const path = require('path')

function resolve (d) {
  return path.resolve(__dirname, d)
}

module.exports = {
  resolve: {
    alias: {
      'src': resolve('../src')
    }
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].js'
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
            presets: [
              [
                '@babel/preset-env', {
                  'modules': false
                }
              ]
            ],
            cacheDirectory: true,
            plugins: [
              'lodash',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-syntax-object-rest-spread',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties'
            ]
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
