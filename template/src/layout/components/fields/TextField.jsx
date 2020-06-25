import React from 'react'

import './FieldStyles.css'

export default ({ id, label, value, placeholder, ...props }) => {
  if (label) {
    return (
      <label className={props.className}>
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
        className={props.className}
      />
    )
  }
}
