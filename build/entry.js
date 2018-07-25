const glob = require('glob')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  const entry = {}
  const htmlWebpackPlugins = []
  const entries = glob.sync('./src/entries/*.js')
  entries.forEach(e => {
    const chunkname = path.basename(path.resolve(e), '.js')
    entry[chunkname] = e
    htmlWebpackPlugins.push(new htmlWebpackPlugin({
      title: `${chunkname} App`,
      filename: `${chunkname}.html`,
      inject: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      template: './index.html',
      // chunks: [chunkname],
      chunks: function (chunk) {
        return chunk.split('-').includes(chunkname)
      },
      chunksSortMode: 'dependency',
      minify: env === 'production'
    }))
  })

  return {
    entry,
    htmlWebpackPlugins
  }
}
