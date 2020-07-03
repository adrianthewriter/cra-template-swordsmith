import React from 'react'

import { Field } from 'swordsmith'

const SheetMode = () => <Field hidden id="sheet_mode" value="character" />

/**
 * Sheet Settings:
 * Insert at the top of the sheet so they can be accessed globally by styles
 *
 * Ex:
 *  import { Settings, CharacterSheet } from '@layout'
 *
 *  export default () => (
 *    <>
 *      <Settings.SheetMode />
 *      ...
 *      <CharacterSheet />
 *    </>
 *  )
 */
export default {
  SheetMode,
}
