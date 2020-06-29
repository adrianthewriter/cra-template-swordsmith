import React from 'react'

import { Field } from '@components'
import styles from './Header.css'

export default () => (
  <div className={styles.header}>
    <h1>Character Sheet</h1>
    <Field id="character-name" label="Name" />
    <Field id="player-name" label="Player" />
  </div>
)
