import React from 'react'

import styles from './FieldStyles.css'

export default ({ id, value, placeholder, ...props }) => {
  return (
    <label
      title={props.tooltip ? props.tooltip : null}
      className={
        props.className ? `${props.className} ${styles.meta}` : `${styles.meta}`
      }
    >
      <textarea name={`attr_${id}`} placeholder={placeholder}>
        {value}
      </textarea>
    </label>
  )
}
