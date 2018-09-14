const HtmlWebpackPlugin = require('html-webpack-plugin')

const filterChunks = HtmlWebpackPlugin.prototype.filterChunks

HtmlWebpackPlugin.prototype.filterChunks = function (chunks, includedChunks, excludedChunks) {
  return filterChunks(chunks, includedChunks, excludedChunks).filter(chunk => {
    const chunkName = chunk.names[0]
    // Skip if the chunks base on the given function
    if (typeof includedChunks === 'function') {
    	return includedChunks(chunkName)
    }
    return true
  })
}
