import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './SheetMode.css'

const SheetMode = ({ mode, children, ...props }) => {
  return (
    <div
      className={c(styles.mode, `sheet-mode--${mode}`, props.className) || null}
    >
      {children}
    </div>
  )
}

SheetMode.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default SheetMode
