import React from 'react'

import {
  Sheet,
  Section,
  Box,
  Table,
  Drawer,
  Field,
  FieldGroup,
  Toggle,
  Meter,
  Button,
} from 'swordsmith'
import styles from './CharacterRoot.css'

export default () => (
  <Sheet mode="character">
    <Section id="col1">
      <Box id="example" label="Example Character" hasToggle isBoxed>
        <FieldGroup id="name" label="Details">
          <Field id="character-name" label="Name" />
          <Field id="character-level" label="Level" className={styles.level} />
        </FieldGroup>

        <FieldGroup id="health" label="Health">
          <Field label="Healthy" />
          <Field label="Injured" />
          <Field label="Critical" end />
          <Field label="Max" id="health_max" start />
        </FieldGroup>

        <FieldGroup id="mana" label="Mana">
          <Field id="mana" label="Current" />
          <Field id="mana_max" label="Maximum" />
        </FieldGroup>

        <Table
          repeat
          id="abilities"
          header={['<view>', 'Ability', 'Act', 'Cost']}
        >
          <Toggle type="collapse" id="ability-drawer" value="hidden" />
          <Field id="ability-name" />
          <Field id="ability-act" />
          <Field id="ability-cost" />

          <Drawer id="ability-drawer">
            <div className={styles.buttonrow}>
              <Button type="button" id="ability-attack" roll="/r d100">
                Roll to Hit
              </Button>
              <Button type="button" id="ability-damage" roll="/r 1d6">
                Roll Damage
              </Button>
            </div>
            <Field
              type="textbox"
              id="ability-desc"
              placeholder="Ability details..."
            />
          </Drawer>
        </Table>
      </Box>
    </Section>
  </Sheet>
)
