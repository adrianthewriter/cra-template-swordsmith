const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('../../package.json')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const { rollup } = require('rollup')
const json = require('@rollup/plugin-json')
const { terser } = require('rollup-plugin-terser')

const isProduction = process.env.NODE_ENV === 'production' || false

class RenderScriptsPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('RenderScriptsPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        'RenderScriptsPlugin', // <-- Set a meaningful name here for stacktraces
        async (data, cb) => {
          if (isProduction) {
            const bundle = await rollup({
              input: path.resolve('src/scripts/index.js'),
              plugins: [json(), terser()],
            })
            const { output } = await bundle.generate({ format: 'es' })
            const sheetWorkers = output[0].code.replace(/\r?\n|\r/g, '')

            // Append the sheetworker script after the html
            data.html += `\n<script type="text/worker">${sheetWorkers}</script>`
          }

          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}

module.exports = RenderScriptsPlugin
