require('../../utils/array')
const utils = require('../utils/util')

const component = {
  name: 'grid',
  template: `<x-table {{#if _metadata.slot }}slot="{{_metadata.slot}}" ref="{{_metadata.ref}}" {{/if}} 
{{#if _metadata.store.data}}
{{#with _metadata.store.data }}
{{#if loadColumns }}:loadColumns="{{loadColumns.key}}" {{/if}}
{{#if columnsUrl }}:columnsUrl="{{columnsUrl.key}}" {{/if}}
{{#if columns }}:columns="{{columns.key}}" {{/if}}
{{#if autoLoad }}:autoLoad="{{autoLoad.key}}" {{/if}}
{{#if data }}:data="{{data.key}}" {{/if}}
{{#if url }}:url="{{url.key}}" {{/if}}
{{#if showPagination }}:showPagination="{{showPagination.key}}" {{/if}}
{{/with}}{{/if}}
{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></x-table>`,
  events: {
    'row-click': ['row', 'event', 'column'],
    'row-dblclick': ['row', 'event'],
    'columns-change': ['columns']
  },
  parser: function (key, metadata, store) {
    const keyPrefix = 'grid'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const cols = metadata.columns
    if (cols) {
      let item = ''
      switch (cols.method) {
        case 'static':
          item = 'columns'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = cols.data
          break
        case 'remote':
          item = 'loadColumns'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = true
          item = 'columnsUrl'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = cols.url
          item = 'columnsUrlParams'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          if (cols.params) {
            data[item].value = cols.params
          } else {
            data[item].value = {}
          }
          break
      }
    }
    const source = metadata.source
    if (source) {
      let item = ''
      switch (source.method) {
        case 'static':
          item = 'data'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = source.data
          break
        case 'remote':
          item = 'url'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = source.url
          item = 'params'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          if (source.params) {
            data[item].value = source.params
          } else {
            data[item].value = {}
          }
          item = 'autoLoad'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = source.autoLoad
      }
    }
    for (let item in component.events) {
      if (metadata.events && metadata.events[item]) {
        events[item] = {}
        events[item].key = utils.generateId(keyPrefix + '_' + item)
        events[item].value = metadata.events[item]
        events[item].params = component.events[item]
      }
    }
    const pagination = metadata.pagination
    if (!pagination) { // showPagination default is true
      const item = 'showPagination'
      data[item] = {}
      data[item].key = utils.generateId(keyPrefix + '_' + item)
      data[item].value = pagination
    }
  }
}

module.exports = component
