import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './RollButton.css'

const RollButton = ({ id, label, roll, desc, type, ...props }) => (
  <button
    type="roll"
    name={`roll_${id}`}
    title={desc}
    value={roll}
    className={c(styles[type], props.className) || null}
  >
    {label && <span>{label}</span>}
  </button>
)

RollButton.propTypes = {
  id: PropTypes.string.isRequired,
  roll: PropTypes.string.isRequired,
}

RollButton.defaultProps = {
  type: 'button',
  label: false,
  desc: '',
  className: null,
}

export default RollButton
