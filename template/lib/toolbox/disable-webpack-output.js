const { name } = require('../../package.json')
const isProduction = process.env.NODE_ENV === 'production' || false

module.exports = class DisableWebpackOutputPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'DisableWebpackOutputPlugin',
      (compilation, callback) => {
        // Stop file output in production
        if (isProduction) {
          Object.keys(compilation.assets)
            .filter((asset) => !asset.includes(name))
            .forEach((asset) => {
              delete compilation.assets[asset]
            })
        }

        callback()
      }
    )
  }
}
