const path = require('path')
const cleanPlugin = require('clean-webpack-plugin')

function resolve (d) {
  return path.resolve(__dirname, d)
}

module.exports = {
  mode: 'production',
  entry: {
    app: './src/entries/app.js',
    entry: './src/entries/entry.js'
  },
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
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
      }
    ]
  },
  plugins: [
    new cleanPlugin(['dist'])
  ]
}
