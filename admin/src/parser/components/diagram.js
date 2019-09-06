require('../../utils/array')
const utils = require('../utils/util')

const component = {
  name: 'diagram',
  template: `<x-diagram {{#if _metadata.slot }}slot="{{_metadata.slot}}" ref="{{_metadata.ref}}" {{/if}}
{{#each _metadata.store.data}}
:{{@key}}="{{this.key}}"
{{/each}}

{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></x-diagram>`,
  events: {},
  parser: function (key, metadata, store) {
    const keyPrefix = 'diagram'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const list = ['nodes', 'links', 'form', 'width', 'height']
    list.forEach(function (item) {
      if (metadata[item] !== undefined) {
        data[item] = {}
        data[item].key = utils.generateId(keyPrefix + '_' + item)
        data[item].value = metadata[item]
      }
    })
    for (let item in component.events) {
      if (metadata.events && metadata.events[item]) {
        events[item] = {}
        events[item].key = utils.generateId(keyPrefix + '_' + item)
        events[item].value = metadata.events[item]
        events[item].params = component.events[item]
      }
    }
  }
}

module.exports = component
