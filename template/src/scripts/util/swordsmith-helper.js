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

  __util() {
    return {
      parseValues: (values, singleRowOnly = false) => {
        let attrSet = {}
        let fieldSet = {}

        values = Object.entries(values)

        // Parse the 'attrSet'
        attrSet = values.filter(([key, val]) => {
          return !key.includes('repeating_')
        })
        attrSet = Object.fromEntries(attrSet)

        // Parse the 'fieldSet'
        values
          .filter(([key, val]) => {
            return key.includes('repeating_')
          })
          .forEach(([key, val]) => {
            let match, section, rowId, field

            match = key.match(
              /^repeating_([A-Za-z0-9-]+)_?(-[A-Za-z0-9-]+)?_([A-Za-z0-9-_]+)$/
            )
            section = match[1] ? match[1] : false
            rowId = match[2] ? match[2] : false
            field = match[3] ? match[3] : false

            if (!fieldSet[section]) fieldSet[section] = []
            if (fieldSet[section].length) {
              let row = fieldSet[section].filter((row) => {
                return row.rowId === rowId
              })[0]

              if (!row) fieldSet[section].push({ rowId, [field]: val })
              if (row && !row[field]) {
                row[field] = val
              }
            } else {
              fieldSet[section].push({ rowId, [field]: val })
            }
          })

        // Squash section arrays if 'singleRowOnly' flag is passed
        if (singleRowOnly) {
          fieldSet = Object.entries(fieldSet)
          fieldSet = fieldSet.map(([key, val]) => {
            if (val.length === 1) val = val[0]
            return [key, val]
          })
          fieldSet = Object.fromEntries(fieldSet)
        }

        return { attrSet, fieldSet }
      },
    }
  }

  __toolbox() {
    return {
      /**
       * setAttrs()
       * @param {Object} attrs - The attributes to set.
       * @param {String} [sectionName] - The name of the repeating table these attributes apply to.
       * @param {Function} [func] - A callback function to run after setAttrs() completes.
       */
      setAttrs: (attrs, ...args) => {
        let sectionName, func

        if (args.length === 1 && _.isFunction(args[0])) {
          func = args[0]
        } else if (args.length === 1 && _.isString(args[0])) {
          sectionName = args[0]
        } else if (
          args.length === 2 &&
          _.isString(args[0]) &&
          _.isFunction(args[1])
        ) {
          sectionName = args[0]
          func = args[1]
        }

        if (sectionName) {
          attrs = Object.entries(attrs)
          attrs = attrs.map(([key, val]) => {
            return [`repeating_${sectionName}_${key}`, val]
          })
          attrs = Object.fromEntries(attrs)
        }

        if (!func) {
          setAttrs(attrs)
        } else {
          setAttrs(attrs, func)
        }
      },
    }
  }

  listen(triggers, section = false) {
    if (!triggers) {
      throw new Error(
        "'listen()' must be called with an 'triggers' argument in the form of a String or an Array<String>."
      )
    }

    // If there are no 'ctx.triggers', reset 'ctx'
    if (!this.ctx || !this.ctx.triggers.length) this.resetCtx()

    // Coerce 'triggers' into an Array
    if (triggers && _.isString(triggers)) triggers = triggers.split(' ')

    // Parse the 'triggers' into an Object
    triggers = triggers.map((trigger) => {
      trigger = trigger.split(':')
      return {
        event: trigger[0] ? trigger[0] : _.noop(),
        attr: trigger[1] ? trigger[1] : _.noop(),
        section: section ? section : _.noop(),
      }
    })

    // Add each 'trigger' to 'ctx'
    triggers.forEach((trigger) => {
      this.ctx.addTrigger(trigger)
    })

    // Return 'this' for chaining
    return this
  }

  getAttrs(attrs) {
    if (!attrs) {
      throw new Error(
        "'getAttrs()' must be called with an 'attrs' argument in the form of a String or an Array<String>."
      )
    }

    // Coerce 'attrs' into an Array
    if (attrs && _.isString(attrs)) attrs = attrs.split(' ')

    // Add each 'attr' to 'ctx'
    attrs.forEach((attr) => {
      this.ctx.addAttr(attr)
    })

    // Return 'this' for chaining
    return this
  }

  getFields(fields, section, parseOnly = false) {
    if (!fields) {
      throw new Error(
        "'getFields()' must be called with an 'fields' argument in the form of a String or an Array<String>."
      )
    }

    if (!section) {
      throw new Error(
        "'getFields()' must be called with an 'section' argument in the form of a String."
      )
    }

    // Coerce 'fields' into an Array
    if (fields && _.isString(fields)) fields = fields.split(' ')

    // Parse the 'fields' into an Object
    fields = fields.map((field) => {
      return {
        field: field,
        section: section,
      }
    })

    // If the 'parseOnly' flag is set, return the 'fields' object
    if (parseOnly) return fields

    // Otherwise, add each 'field' to 'ctx'
    fields.forEach((field) => {
      this.ctx.addField(field)
    })

    // Return 'this' for chaining
    return this
  }

  then(func) {
    if (!_.isFunction(func)) {
      throw new Error("'.then()' must receive a function.")
    }

    // Collect the data
    let triggers, attrNames, fieldNames
    triggers = this.ctx.getTriggers()
    attrNames = this.ctx.attrs
    fieldNames = this.ctx.fields.map(({ section, field }) => {
      return `repeating_${section}_${field}`
    })

    // Execute the operation
    on(triggers.join(' '), (e) => {
      getAttrs(_.union(attrNames, fieldNames), (values) => {
        const { attrSet, fieldSet } = this.util.parseValues(values)

        try {
          _.partial(func, {
            e,
            gameId: this.gameId,
            version: this.version,
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
    return this.triggers.map((trigger) => {
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
