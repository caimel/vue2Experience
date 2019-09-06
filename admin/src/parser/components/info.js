require('../../utils/array')
const utils = require('../../utils/utils')

const component = {
  name: 'info',
  template: `<x-info {{#if _metadata.slot }}slot="{{_metadata.slot}}" ref="{{_metadata.ref}}"{{/if}}  
{{#if _metadata.store.data}}
{{#with _metadata.store.data }}
{{#if items }}:items="{{items.key}}" {{/if}}
{{/with}}{{/if}}
{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></x-info>`,
  events: {},
  parser: function (key, metadata, store) {
    const keyPrefix = 'info'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const items = metadata.items
    if (items) {
      const item = 'items'
      data[item] = {}
      data[item].key = utils.generateUuId(keyPrefix)
      data[item].value = items
    }
    for (let item in component.events) {
      if (metadata.events && metadata.events[item]) {
        events[item] = {}
        events[item].key = utils.generateUuId(keyPrefix)
        events[item].value = metadata.events[item]
        events[item].params = component.events[item]
      }
    }
  }
}

module.exports = component
