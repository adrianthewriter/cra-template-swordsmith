import SwordsmithSheetWorkers from './util/swordsmith-helper'

const sheet = new SwordsmithSheetWorkers()

sheet
  .listen('sheet:opened')
  .getAttrs(['sheet_ver', 'character_name', 'character-name'])
  .then(({ version, attrSet, setAttrs }) => {
    // Prepare the data
    const shortName = attrSet['character_name']
    const longName = attrSet['character-name'] || shortName
    const curVersion = attrSet['sheet_ver']
    const newVersion = version

    // Bail if the sheet isn't brand new
    if (curVersion && curVersion != '') {
      setAttrs({ ['sheet_ver']: newVersion })
      return false
    }

    // Set initial sheet values
    setAttrs(
      {
        ['sheet_ver']: newVersion,
        ['sheet_mode']: 'character',
        ['character-name']: longName != '' ? longName : shortName,
        ['character-level']: 1,
      },
      () => {
        console.log('Your new character was created! Have fun!')
      }
    )
  })
