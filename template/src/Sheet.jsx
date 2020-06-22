import React from 'react'
import styles from './Sheet.css'

import LayoutRoot from '@layout'

export default () => (
  <>
    <div className={styles.root}>
      <LayoutRoot />
    </div>
    {/* {isProduction ? <TemplatesRoot /> : null} */}
  </>
)
