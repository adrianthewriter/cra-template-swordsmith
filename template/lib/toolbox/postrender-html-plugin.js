const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production' || false

class PostRenderHtmlPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('PostRenderHtmlPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'PostRenderHtmlPlugin', // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          if (isProduction) {
            // Extract the inner html
            let match = data.html.match(/<body>(.*)<\/body>/)
            let innerHtml = match[1]

            // Set data.html with new value
            data.html = innerHtml
          }
          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}

module.exports = PostRenderHtmlPlugin
