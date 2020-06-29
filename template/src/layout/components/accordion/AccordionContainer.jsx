import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import { AccordionItem, Toggle } from '@components'
import styles from './AccordionStyles.css'

const AccordionContainer = (props) => (
  <div className={c(styles['accordion-container'], props.className) || null}>
    <Toggle hidden id={'accordion'} />
    {props.children}
  </div>
)

AccordionContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(AccordionItem),
    PropTypes.objectOf(AccordionItem),
  ]),
}

AccordionContainer.defaultProps = {
  className: null,
}

export default AccordionContainer
