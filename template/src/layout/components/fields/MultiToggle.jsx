import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './FieldStyles.css'

const MultiToggle = ({ id, options, selected, ...props }) => {
  selected = selected || options[0].toLowerCase()

  if (props.hidden) {
    return (
      <input
        type="hidden"
        name={`attr_${id}-toggle`}
        value={selected}
        className={c(styles.multitoggle, props.className) || null}
      />
    )
  } else {
    return (
      <>
        {/* <input
          type="hidden"
          name={`attr_${id}-toggle`}
          value={selected}
          className={styles.multitoggle}
        /> */}
        <label className={c(styles.multitoggle, props.className) || null}>
          {options.map((item, index) => (
            <input
              key={index}
              className={styles[`multitoggle-${index + 1}-${options.length}`]}
              type="radio"
              name={`attr_${id}-toggle`}
              value={item.toLowerCase()}
              checked={selected === item.toLowerCase()}
            />
          ))}

          {options.map((item, index) => (
            <span
              key={index}
              className={styles[`multitoggle-${index + 1}-${options.length}`]}
            >
              {item}
            </span>
          ))}
        </label>
      </>
    )
  }
}

MultiToggle.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

MultiToggle.defaultProps = {
  selected: null,
  hidden: false,
  className: null,
}

export default MultiToggle
