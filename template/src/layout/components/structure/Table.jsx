import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'

import styles from './Table.css'

const Table = ({ id, repeat, header, ...props }) => (
  <div
    className={c(styles.table, `sheet-table--${id}`, props.className) || null}
  >
    {header && (
      <div className={styles.tableheader}>
        {header.map((item, index) => {
          switch (item) {
            case '<roll>':
              return <span className={styles.roll} />
            case '<view>':
              return <span className={styles.view} />
            default:
              return <span>{item}</span>
          }
        })}
      </div>
    )}
    {repeat && (
      <fieldset className={`repeating_${id}`}>
        <div className={styles.tablerow}>{props.children}</div>
      </fieldset>
    )}
    {!repeat && <div className={styles.tablerow}>{props.children}</div>}
  </div>
)

Table.propTypes = {
  id: PropTypes.string.isRequired,
  repeat: PropTypes.bool,
  header: PropTypes.arrayOf(PropTypes.string),
}

Table.defaultProps = {
  repeat: false,
  header: false,
  className: null,
}

export default Table
