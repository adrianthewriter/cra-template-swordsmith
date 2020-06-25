import React from 'react'
import PropTypes from 'prop-types'

import TextField from './fields/TextField'
import TextBox from './fields/TextBox'
import MetaBox from './fields/MetaBox'

const Field = ({ id, type, value, ...props }) => {
  if (props.hidden) {
    return (
      <input
        type="hidden"
        name={`attr_${id}`}
        value={props.checked ? 'checked' : value}
      />
    )
  } else if (props.displayOnly) {
    return (
      <span name={`attr_${id}`} className={props.className}>
        {value}
      </span>
    )
  } else if (type === 'text') {
    return <TextField id={id} value={value} {...props} />
  } else if (type === 'textbox') {
    return <TextBox id={id} value={value} {...props} />
  } else if (type === 'metabox') {
    return <MetaBox id={id} value={value} {...props} />
  }
}

Field.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'textbox', 'metabox']),
}

Field.defaultProps = {
  type: 'text',
  value: '',
  label: false,
  tooltip: false,
  placeholder: null,
  checked: false,
  className: null,

  hidden: false,
  displayOnly: false,
}

export default Field
