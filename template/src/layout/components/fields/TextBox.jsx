import React from 'react'
import c from 'classnames'

import './FieldStyles.css'

export default ({ id, label, value, placeholder, ...props }) => {
  if (label) {
    return (
      <label className={c(props.className) || null}>
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
        className={c(props.className) || null}
      >
        {value}
      </textarea>
    )
  }
}
