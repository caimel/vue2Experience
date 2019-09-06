require('../../utils/array')
const utils = require('../utils/util')

const component = {
  name: 'toolbar',
  template: `<x-toolbar {{#if _metadata.slot }}slot="{{_metadata.slot}}" ref="{{_metadata.ref}}" {{/if}} 
{{#if _metadata.store.data}}
{{#with _metadata.store.data }}
{{#if children }}:children="{{children.key}}" {{/if}}
{{#if remote }}:remote="{{remote.key}}" {{/if}}
{{#if url }}:url="{{url.key}}" {{/if}}
{{/with}}{{/if}}
{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></x-toolbar>`,
  events: {},
  parser: function (key, metadata, store) {
    const keyPrefix = 'toolbar'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const items = metadata.children
    if (items) {
      let item = ''
      switch (items.method) {
        case 'static':
          item = 'children'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = items.data
          break
        case 'remote':
          item = 'remote'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = true
          item = 'url'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = items.url
          // static 仍然保留，toolbar的 children 将会被合并
          item = 'children'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = items.data
          break
      }
    }
    const source = metadata.source
    if (source) {
      let item = ''
      switch (source.method) {
        case 'static':
          item = 'model'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = source.data
          break
        case 'remote':
          item = 'url'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = source.url
      }
    }
    // toolbar 有别于其他的events 处理
    for (let item in metadata.events) {
      events[item] = {}
      events[item].key = utils.generateId(keyPrefix)
      events[item].value = metadata.events[item]
      // events[item].params = supportEvents.toolbar[item]
    }
  }
}

module.exports = component
