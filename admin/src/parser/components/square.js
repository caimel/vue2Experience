require('../../utils/array')
const utils = require('../utils/util')
const component = {
  name: 'square',
  template: `<square {{#if _metadata.slot }}slot="{{_metadata.slot}}"{{/if}}
{{#if _metadata.store.data}}
{{#with _metadata.store.data }}
{{#if info }}:info="{{info.key}}" {{/if}}{{/with}}{{/if}}></square>`,
  events: {},
  parser: function (key, metadata, store) {
    const keyPrefix = 'square'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const info = metadata.info
    if (info) {
      const item = 'info'
      data[item] = {}
      data[item].key = utils.generateId(keyPrefix + '_' + item)
      data[item].value = info
    }
  }
}

module.exports = component
