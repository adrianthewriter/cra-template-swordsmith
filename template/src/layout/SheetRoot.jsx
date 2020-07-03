import React from 'react'
import c from 'classnames'
import { name } from '../../package.json'

import { Settings, Header, CharacterSheet } from '@layout/parts'
import styles from './SheetRoot.css'

export default () => (
  <div className={c(styles.root, `sheet-${name.replace(/-/g, '')}`) || null}>
    <Settings.SheetMode />
    <Header />
    <CharacterSheet />
  </div>
)
