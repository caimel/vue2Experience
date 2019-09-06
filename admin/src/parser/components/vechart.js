require('../../utils/array')
const utils = require('../../utils/utils')

const component = {
  name: 'vechart',
  template: `<ve-chart {{#if _metadata.slot }}slot="{{_metadata.slot}}"  ref="{{_metadata.ref}}"{{/if}}
height="98%"  
{{#if _metadata.store.data}}
{{#with _metadata.store.data }}
{{#if settings }}:settings="{{settings.key}}" {{/if}}
{{#if data }}:data="{{data.key}}" {{/if}}
{{/with}}{{/if}}
{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></ve-chart>`,
  events: {},
  parser: function (key, metadata, store) {
    const keyPrefix = 'vechart'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const settings = metadata.settings
    if (settings) {
      const item = 'settings'
      data[item] = {}
      data[item].key = utils.generateUuId(keyPrefix)
      data[item].value = settings
    }
    const _data = metadata.data
    if (_data) {
      const item = 'data'
      data[item] = {}
      data[item].key = utils.generateUuId(keyPrefix)
      data[item].value = _data
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
