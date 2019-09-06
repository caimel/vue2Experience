require('../../utils/array')
const chalk = require('chalk')
const utils = require('../utils/util')

const config = {
  constructor: {
    panel: function (metadata, key, store, parseMetadata) {
      console.log(chalk.blue(`Parse Layout [panel]...`))
      const keyPrefix = 'panel'
      const dataKey = utils.generateId(keyPrefix + '_')
      metadata[key] = dataKey
      const _data = []
      store.data[dataKey] = {}
      store.data[dataKey].key = dataKey
      store.data[dataKey].value = _data
      metadata.items.forEach(function (item) {
        const _item = {}
        _item.style = item.style
        _item.equally = item.equally
        _item.cols = []
        if (item.columns) {
          let flexs = 0
          item.columns.map(function (v) {
            if (v.style && v.style.flex) {
              flexs += v.style.flex
            }
          })
          item.columns.forEach(function (col) {
            const _col = {}
            if (col.style.flex) {
              _col.span = Math.floor(24 * col.style.flex / flexs)
            }
            _col.slot = col.slot
            _item.cols.push(_col)
            if (col.child) {
              parseMetadata(col.child, store)
            }
          })
        } else {
          console.warn('prop [columns] is not exist !')
        }
        _data.push(_item)
      })
    },
    tabs: function (metadata, key, store, parseMetadata) {
      console.log(chalk.blue(`Parse Layout [tabs]...`))
      const keyPrefix = 'tabs'
      const dataKey = utils.generateId(keyPrefix + '_')
      metadata[key] = dataKey
      const _data = metadata.items
      store.data[dataKey] = {}
      store.data[dataKey].key = dataKey
      store.data[dataKey].value = _data
      metadata.items.forEach(function (item) {
        if (item.slots) {
          if (item.slots.content) {
            if (item.slots.content.child) {
              parseMetadata(item.slots.content.child, store)
            }
          }
        }
      })
    },
    collapse: function (metadata, key, store, parseMetadata) {
      console.log(chalk.blue(`Parse Layout [collapse]...`))
      const keyPrefix = 'collapse'
      const dataKey = utils.generateId(keyPrefix + '_')
      metadata[key] = dataKey
      const _data = metadata.items
      store.data[dataKey] = {}
      store.data[dataKey].key = dataKey
      store.data[dataKey].value = _data
      metadata.items.forEach(function (item) {
        if (item.slots) {
          if (item.slots.content) {
            if (item.slots.content.child) {
              parseMetadata(item.slots.content.child, store)
            }
          }
        }
      })
    },
    card: function (metadata, key, store, parseMetadata) {
      console.log(chalk.blue(`Parse Layout [card]...`))
      //     const dataKey = 'card_' + uuidv1().toString().replace(/-/g, '')
      const keyPrefix = 'card'
      const dataKey = utils.generateId(keyPrefix + '_')
      metadata[key] = {}
      metadata[key].slots = dataKey
      const slots = metadata.item.slots
      const _data = {
        header: slots.header ? slots.header : 'header',
        content: slots.content.slot ? slots.content.slot : 'content'
      }
      store.data[dataKey] = {}
      store.data[dataKey].key = dataKey
      store.data[dataKey].value = _data
      if (metadata.item) {
        if (metadata.item.slots) {
          if (metadata.item.slots.content) {
            if (metadata.item.slots.content.child) {
              parseMetadata(metadata.item.slots.content.child, store)
            }
          }
        }
      }
    }
  },
  ignoreLayoutTypes: []
}

exports.parseMetadata = function (layout, store) {
  if (!store.data) store.data = {}
  if (!store.methods) store.methods = {}
  if (!store.events) store.events = {}
  const componentKey = 'container'
  const metadataKey = 'metadata'
  const key = 'data'
  // Object.assign(layout, layout)
  const type = layout[componentKey]
  if (!type) {
    console.warn(`This is not a component and metadata not be parse !`)
    return
  }
  if (!config.ignoreLayoutTypes.contain(type)) {
    if (!layout[metadataKey]) console.log(chalk.red(`[${metadataKey}] is undefined `))
    config.constructor[type](layout[metadataKey], key, store, this.parseMetadata)
  }
}
