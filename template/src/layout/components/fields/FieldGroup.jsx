import React from 'react'
import c from 'classnames'

import styles from './FieldStyles.css'

export default ({ id, label, value, placeholder, ...props }) => {
  if (label) {
    return (
      <label className={c(styles.fieldgroup, props.className) || null}>
        <span title={props.tooltip ? props.tooltip : null}>{label}</span>
        <div>
          <input
            type="text"
            name={`attr_${id}`}
            value={value}
            placeholder={placeholder}
          />
          <span className={styles.sep}>/</span>
          <input
            type="text"
            name={`attr_${id}_max`}
            value={value}
            placeholder={placeholder}
          />
        </div>
      </label>
    )
  } else {
    return (
      <div className={c(styles.fieldgroup, props.className) || null}>
        <input
          type="text"
          name={`attr_${id}`}
          value={value}
          placeholder={placeholder}
        />
        <span className={styles.sep}>/</span>
        <input
          type="text"
          name={`attr_${id}_max`}
          value={value}
          placeholder={placeholder}
        />
      </div>
    )
  }
}
