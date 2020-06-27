import React from 'react'
import c from 'classnames'

import styles from './FieldStyles.css'

export default ({ id, value, placeholder, ...props }) => {
  return (
    <label
      title={props.tooltip ? props.tooltip : null}
      className={c(styles.meta, props.className) || null}
    >
      <textarea name={`attr_${id}`} placeholder={placeholder}>
        {value}
      </textarea>
    </label>
  )
}
