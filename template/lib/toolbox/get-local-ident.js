/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict'

const { camelCase } = require('change-case')
const loaderUtils = require('loader-utils')

module.exports = function getLocalIdent(
  context,
  localIdentName,
  localName,
  options
) {
  // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
  const fileNameOrFolder = context.resourcePath.match(
    /index\.module\.(css|scss|sass)$/
  )
    ? '[folder]'
    : '[name]'

  // Check if this is a css module or not
  let isModule =
    context.resourcePath.match(/\.module\.(css|scss|sass)$/) !== null

  // Use loaderUtils to find the file or folder name
  let className = loaderUtils
    .interpolateName(
      context,
      isModule ? `${fileNameOrFolder}_${localName}` : `${localName}`,
      options
    )
    .replace(/\.module/, '') // remove '.module' from the classname

  // Find the selector name and the module name
  let match = className.match(/^([a-z0-9-]+)+_*([a-z0-9-]+)*$/i)
  let selectorName = match && match[2] ? match[2] : match[1]
  let moduleName = match && match[2] ? match[1] : null

  // Finalize the class name
  className =
    isModule && moduleName
      ? `sheet-${camelCase(moduleName)}-${selectorName}`
      : `sheet-${selectorName}`

  // Return the class name
  return className
}
