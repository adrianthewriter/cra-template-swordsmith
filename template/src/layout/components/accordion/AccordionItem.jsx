import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import { Toggle } from '@components'
import styles from './AccordionStyles.css'

const AccordionItem = ({ id, title, ...props }) => (
  <div
    className={
      c(styles['accordion-item'], `sheet-accordion-${id}`, props.className) ||
      null
    }
  >
    <h2>
      <Toggle multiple id={'accordion'} label={title} value={id} />
    </h2>
    <div className={c(styles['accordion-content']) || null}>
      {props.children}
    </div>
  </div>
)

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
}

AccordionItem.defaultProps = {
  className: null,
}

export default AccordionItem
