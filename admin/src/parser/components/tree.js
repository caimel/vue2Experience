require('../../utils/array')
const utils = require('../utils/util')
const chalk = require('chalk')

const component = {
  name: 'tree',
  template: `<x-tree {{#if _metadata.slot }}slot="{{_metadata.slot}}" ref="{{_metadata.ref}}" {{/if}}
{{#if _metadata.store.data}}{{#with _metadata.store.data }}
{{#if props }}:props="{{props.key}}" {{/if}}
{{#if data }}:data="{{data.key}}" {{/if}}
{{#if remote }}:remote="{{remote.key}}" {{/if}}
{{#if url }}:url="{{url.key}}" {{/if}}
{{#if showCheckbox}} :show-checkbox="{{showCheckbox.key}}"{{/if}}
{{#if lazy }}:lazy="{{lazy.key}}" {{/if}}
{{/with}}{{/if}}
{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{#if load }}:load="{{load.key}}" {{/if}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></x-tree>`,
  events: {
    'node-click': ['nodeData', 'node', 'vueComponent'],
    'check-change': ['nodeData', 'checked', 'hasChildrenChecked'],
    'check': ['nodeData', 'checkedObject'],
    'node-contextmenu': ['event', 'nodeData', 'node', 'vueComponent'],
    'current-change': ['nodeData', 'node']
  },
  parser: function (key, metadata, store) {
    const keyPrefix = 'tree'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const list = ['props', 'showCheckbox']
    list.forEach(function (item) {
      if (metadata[item]) {
        data[item] = {}
        data[item].key = utils.generateId(keyPrefix + '_' + item)
        data[item].value = metadata[item]
      }
    })
    if (metadata.source) {
      let item = ''
      switch (metadata.source.method) {
        case 'static':
          item = 'data'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = metadata.source.data
          if (!metadata.source.data) {
            console.warn(chalk.red('prop [data] is undefined'))
          }
          break
        case 'remote':
          item = 'remote'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = true
          item = 'url'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = metadata.source.url
          if (!metadata.source.url) {
            console.warn(chalk.red('prop [url] is undefined'))
          }
          item = 'params'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          if (metadata.source.params) {
            data[item].value = metadata.source.params
          } else {
            data[item].value = {}
          }
          break
        case 'lazy':
          // Todo
          console.warn('树组件 method [lazy] 暂未实现。')
          break
      }
    }
    if (!metadata.events) return
    for (let item in component.events) {
      if (metadata.events[item]) {
        events[item] = {}
        events[item].key = utils.generateId(keyPrefix + '_' + item)
        events[item].value = metadata.events[item]
        events[item].params = component.events[item]
      }
    }
  }
}

module.exports = component
