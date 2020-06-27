import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './SheetSection.css'

const SheetSection = ({ id, children, ...props }) => {
  return (
    <div className={c(styles.sec, `sheet-sec--${id}`, props.className) || null}>
      {children}
    </div>
  )
}

SheetSection.propTypes = {
  id: PropTypes.string.isRequired,
}

export default SheetSection
