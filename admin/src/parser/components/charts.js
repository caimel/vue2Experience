require('../../utils/array')
const utils = require('../utils/util')

const component = {
  name: 'charts',
  template: `<x-chart-boxes {{#if _metadata.slot }}slot="{{_metadata.slot}}"  ref="{{_metadata.ref}}"{{/if}}  
{{#if _metadata.store.data}}
{{#with _metadata.store.data }}
{{#if minWidth }}:minWidth="{{minWidth.key}}" {{/if}}
{{#if minHeight }}:minHeight="{{minHeight.key}}" {{/if}}
{{#if items }}:items="{{items.key}}" {{/if}}
{{/with}}{{/if}}
{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></x-chart-boxes>`,
  events: {},
  parser: function (key, metadata, store) {
    const keyPrefix = 'charts'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const list = ['minWidth', 'minHeight', 'items']
    list.forEach(function (item) {
      if (metadata[item]) {
        data[item] = {}
        data[item].key = utils.generateId(keyPrefix + '_' + item)
        data[item].value = metadata[item]
      }
    })
    for (let item in component.events) {
      if (metadata.events && metadata.events[item]) {
        events[item] = {}
        events[item].key = utils.generateId(keyPrefix)
        events[item].value = metadata.events[item]
        events[item].params = component.events[item]
      }
    }
  }
}

module.exports = component
