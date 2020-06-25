import React from 'react'

import { Field, Toggle, MultiToggle, Meter } from '@components'
import styles from './LayoutRoot.css'

export default () => (
  <>
    <h1>Layout Root</h1>
    <Field
      id="test"
      label="Label"
      value="test value"
      className={styles.testStyle}
    />
    <Field id="field-test1" value="test value" className={styles.testStyle} />
    <Field type="metabox" id="field-test2" value="test value" />
    <Field type="textbox" id="field-test3" label="Label" value="test value" />
    <Toggle id="toggle-test1" label="Toggle Test" />
    <Toggle id="toggle-test2" label="Toggle Test" type="cog" />
    <Toggle id="toggle-test3" type="collapse" />
    <MultiToggle
      id="multitoggle-test1"
      options={['Test 1', 'Test 2', 'Test 3']}
    />
    <MultiToggle
      id="multitoggle-test2"
      options={['Test 1', 'Test 2', 'Test 3', 'Test 4']}
    />

    <Meter
      id="meter-test1"
      set={[
        { value: '0', label: 'X', type: 'clear' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
      ]}
    />
  </>
)
