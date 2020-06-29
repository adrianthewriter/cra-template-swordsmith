import React from 'react'
import styles from './Sheet.css'
import c from 'classnames'
import { name } from '../package.json'

import { Settings, Header, CharacterSheet, Accordion } from '@layout'

export default () => (
  <div className={c(styles.root, `sheet-${name.replace(/-/g, '')}`) || null}>
    <Settings.SheetMode />
    <Accordion />
    <Header />
    <CharacterSheet />
  </div>
)
