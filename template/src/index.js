import React from 'react'
import ReactDOM from 'react-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import Sheet from './layout/SheetRoot'
import Templates from './templates'

if (process.env.NODE_ENV !== 'production') {
  ReactDOM.render(<Sheet />, document.querySelector('.charactersheet'))
}

export default () => {
  const html = renderToStaticMarkup(
    <>
      <Sheet />
      <Templates />
    </>
  )
  return html
}
