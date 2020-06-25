import React from 'react'
import PropTypes from 'prop-types'

import styles from './FieldStyles.css'

const Toggle = ({ id, label, type, value, multiple, checked, ...props }) => {
  if (props.hidden) {
    return (
      <input
        type="hidden"
        name={`attr_${id}-toggle`}
        value={value ? value : checked ? 'checked' : ''}
        className={styles.toggle}
      />
    )
  } else {
    return (
      <label
        className={[styles.toggle, type && styles[`toggle-${type}`]]
          .filter((x) => x) // Removes blanks
          .join(' ')}
      >
        {multiple && (
          <input
            type="radio"
            name={`attr_${id}-toggle`}
            value="clear"
            // checked={checked}
          />
        )}
        <input
          type={multiple ? 'radio' : 'checkbox'}
          name={`attr_${id}-toggle`}
          value={value ? value : 'checked'}
          // checked={checked}
        />
        <span>{label}</span>
      </label>
    )
  }
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
}

Toggle.defaultProps = {
  label: false,
  type: null,
  value: false,
  checked: false,
  hidden: false,
  multiple: false,
  className: null,
}

export default Toggle
