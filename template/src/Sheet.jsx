import React from 'react'
import styles from './Sheet.css'

import LayoutRoot from '@layout'

export default () => (
  <div
    className={[
      styles.root,
      `sheet-${require('../package.json').name.replace('-', '')}`,
    ].join(' ')}>
    <LayoutRoot />
  </div>
)
