import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './FieldStyles.css'

const RadioToggle = ({ id, label, value, checked, ...props }) => (
  <label className={c(styles.toggle, props.className) || null}>
    <input type="radio" name={`attr_${id}`} value={value} />
    <span>{label}</span>
  </label>
)

RadioToggle.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

RadioToggle.defaultProps = {
  label: false,
  value: false,
  checked: false,
  className: null,
}

export default RadioToggle
