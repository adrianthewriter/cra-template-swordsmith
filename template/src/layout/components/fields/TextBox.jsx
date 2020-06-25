import React from 'react'

import './FieldStyles.css'

export default ({ id, label, value, placeholder, ...props }) => {
  if (label) {
    return (
      <label className={props.className}>
        <span title={props.tooltip ? props.tooltip : null}>{label}</span>
        <textarea name={`attr_${id}`} placeholder={placeholder}>
          {value}
        </textarea>
      </label>
    )
  } else {
    return (
      <textarea
        name={`attr_${id}`}
        placeholder={placeholder}
        className={props.className}
      >
        {value}
      </textarea>
    )
  }
}
