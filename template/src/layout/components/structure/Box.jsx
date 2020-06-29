import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './Box.css'

import { Toggle } from '@components'

const Box = ({ id, label, hasToggle, children, ...props }) => (
  <div className={c(styles.box, `sheet-${id}`, props.className) || null}>
    {label && hasToggle && <Toggle hidden id={id} />}
    {label && (
      <h2>
        <span>{label}</span>
        {hasToggle && <Toggle type="collapse" id={id} />}
      </h2>
    )}

    <div className={styles.boxcontent}>{children}</div>
  </div>
)

Box.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'textbox', 'metabox']),
}

Box.defaultProps = {
  type: 'text',
  value: '',
  label: false,
  tooltip: false,
  placeholder: null,
  checked: false,
  className: null,

  hidden: false,
  displayOnly: false,
}

export default Box
