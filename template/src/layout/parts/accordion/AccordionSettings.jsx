import React from 'react'

import { AccordionItem, MultiToggle } from '@components'

import styles from './AccordionRoot.css'

export default () => (
  <AccordionItem id="settings" title="Sheet Settings">
    <div>
      <h3>General Settings</h3>
      <div className={styles.label}>
        <span>Sheet Mode</span>
        <MultiToggle
          id="sheet_mode"
          options={[
            { id: 'character', label: 'Character' },
            { id: 'party', label: 'Party Sheet' },
          ]}
        />
      </div>
    </div>
  </AccordionItem>
)
