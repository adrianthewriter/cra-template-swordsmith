import React from 'react'

import {
  Sheet,
  Section,
  Box,
  Table,
  Field,
  FieldGroup,
  Toggle,
  MultiToggle,
  Meter,
  RollButton,
} from '@components'
import styles from './CharacterRoot.css'

export default () => (
  <Sheet mode="character">
    <Section id="col1">
      <Box id="fields-test" label="Fields Test" hasToggle>
        <Field
          id="field-test1"
          value="test value"
          className={styles.testStyle}
        />
        <Field
          id="field-test2"
          label="label test"
          value="test value"
          className={styles.testStyle}
        />
        <Field type="metabox" id="field-test2" value="test value" />
        <Field
          type="textbox"
          id="field-test3"
          label="Label"
          value="test value"
        />
        <Toggle id="toggle-test1" label="Toggle Test" />
        <Toggle id="toggle-test2" label="Toggle Test" type="cog" />
        <Toggle id="toggle-test3" type="collapse" />
        <MultiToggle
          id="mutlitoggle-test"
          options={[
            { id: 'character', label: 'Character' },
            { id: 'party', label: 'Party Sheet' },
          ]}
        />

        <Meter
          id="meter-test1"
          set={[
            { value: '0', label: 'X', type: 'clear' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
          ]}
        />

        <FieldGroup id="fieldgroup-test1" />

        <RollButton id="button-test1" roll="/r d100" />
        <RollButton id="button-test2" label="Button" roll="/r d100" />
        <RollButton
          type="text"
          id="button-test2"
          label="Text Button"
          roll="/r d100"
        />
      </Box>
    </Section>
    <Section id="col2">
      <Box id="box-test2" label="Box Test">
        <Table
          repeat
          id="effects"
          header={['<view>', 'Status Effects', 'Duration', 'Details', '<roll>']}
        >
          <Toggle id="view" type="collapse" />

          <Field id="effect-name" />
          <Field id="effect-duration" />
          <Field id="effect-desc" />
          <RollButton id="button-test1" roll="/r d100" />
        </Table>
      </Box>
    </Section>
  </Sheet>
)
