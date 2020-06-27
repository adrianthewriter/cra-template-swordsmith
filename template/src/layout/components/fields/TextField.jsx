import React from 'react'
import c from 'classnames'

import './FieldStyles.css'

export default ({ id, label, value, placeholder, ...props }) => {
  if (label) {
    return (
      <label className={c(props.className) || null}>
        <span title={props.tooltip ? props.tooltip : null}>{label}</span>
        <input
          type="text"
          name={`attr_${id}`}
          value={value}
          placeholder={placeholder}
        />
      </label>
    )
  } else {
    return (
      <input
        type="text"
        name={`attr_${id}`}
        value={value}
        placeholder={placeholder}
        className={c(props.className) || null}
      />
    )
  }
}
