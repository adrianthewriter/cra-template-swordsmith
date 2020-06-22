import { name, version } from '../../../package.json'

/**
 * @class
 * Utility class to help with writing roll20 sheetworker scripts.
 *
 * @param {string} gameId - The name of the game this character sheet is for in kabab case (e.g. 'the-last-book').
 * @param {string} ver - The semantic verson number for the character sheet.
 * @example
 *
 * ```js
 * const sheet = new SwordsmithSheetWorkers('awesome-game', '1.0.0')
 *
 * sheet
 *   .listen('sheet:opened')
 *   .getAttrs([ 'some_attribute', 'some_other_attribute ])
 *   .then(({ attrSet, setAttrs }) => {
 *     ...
 *   })
 * ```
 */
export default class SwordsmithSheetWorkers {
  constructor(gameId = name, ver = version) {
    this.__gameId = gameId
    this.__version = ver
    this.__context = new SwordsmithContext()

    this.toolbox = this.__toolbox()
    this.util = this.__util()

    return this
  }

  get gameId() {
    return this.__gameId
  }

  get version() {
    return this.__version
  }

  get ctx() {
    return this.__context
  }

  resetCtx() {
    this.__context = new SwordsmithContext()
  }

  then(func) {
    if (!_.isFunction(func)) {
      throw new Error("'.then()' must receive a function.")
    }

    // Collect the data
    let triggers, attrs, fields
    triggers = this.ctx.getTriggers()
    attrNames = this.ctx.attrs
    fieldNames = this.ctx.fields.map(({ section, field }) => {
      return `repeating_${section}_${field}`
    })

    // Execute the operation
    on(triggers.join(' '), e => {
      getAttrs(_.union(attrNames, fieldNames), values => {
        const { attrSet, fieldSet } = this.util.parseValues(values)

        try {
          _.partial(func, {
            e,
            attrSet,
            fieldSet,
            setAttrs: _.partial(this.toolbox.setAttrs),
          })()
        } catch (err) {
          throw new Error(
            `SheetWorker failed in 'on(${triggers.join(' ')})'`,
            err
          )
        }
      })
    })

    // End the chain
    this.resetCtx()
    return false
  }
}

/**
 * @class
 * The SwordsmithContext class used internally by SworsmithSheetWorkers.
 */
class SwordsmithContext {
  constructor() {
    this.__triggers = []
    this.__attrs = []
    this.__fields = []

    return this
  }

  getTriggers() {
    return this.triggers.map(trigger => {
      let { event, attr, section } = trigger
      if (section && attr) {
        return `${event}:repeating_${section}:${attr}`
      } else if (section && !attr) {
        return `${event}:repeating_${section}`
      } else {
        return `${event}:${attr}`
      }
    })
  }

  get triggers() {
    return this.__triggers
  }

  get attrs() {
    return this.__attrs
  }

  get fields() {
    return this.__fields
  }

  addTrigger(trigger) {
    this.__triggers.push(trigger)
  }

  addAttr(attr) {
    this.__attrs.push(attr)
  }

  addField(field) {
    this.__fields.push(field)
  }
}
