import React from 'react'
import PropTypes from 'prop-types'

import styles from './FieldStyles.css'

const Meter = ({ id, set, maximum, ...props }) => (
  <div className={styles.meter}>
    {maximum && <input type="hidden" name={`attr_${id}_max`} value={maximum} />}

    {set.map((item, index) => (
      <React.Fragment key={index}>
        <input
          type="radio"
          name={`attr_${id}`}
          value={item.value ? item.value : null}
          checked={index === 0 ? 'checked' : null}
        />
        <span className={item.type === 'clear' ? styles.clear : undefined}>
          {item.label && item.label}
        </span>
      </React.Fragment>
    ))}
  </div>
)

Meter.propTypes = {
  id: PropTypes.string.isRequired,
}

Meter.defaultProps = {
  set: [],
  maximum: false,
  className: null,
}

export default Meter
