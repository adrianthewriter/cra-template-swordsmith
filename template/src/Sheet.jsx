import React from 'react'
import styles from './Sheet.css'

import LayoutRoot from '@layout'
import TemplatesRoot from '@templates'

const isProduction = process.env.NODE_ENV === 'production'

export default () => (
  <>
    <div className={styles.root}>
      <LayoutRoot />
    </div>
    {/* {isProduction ? <TemplatesRoot /> : null} */}
  </>
)
