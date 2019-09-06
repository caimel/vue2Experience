require('../../utils/array')
const utils = require('../utils/util')

const component = {
  name: 'chart',
  template: `<x-chart {{#if _metadata.slot }}slot="{{_metadata.slot}}"  ref="{{_metadata.ref}}"{{/if}}  
{{#if _metadata.store.data}}
{{#with _metadata.store.data }}
{{#if height }}:height="{{height.key}}" {{/if}}
{{#if width }}:width="{{width.key}}" {{/if}}
{{#if columns }}:columns="{{columns.key}}" {{/if}}
{{#if settings }}:settings="{{settings.key}}" {{/if}}
{{#if extend }}:extend="{{extend.key}}" {{/if}}
{{#if data }}:data="{{data.key}}" {{/if}}
{{#if title }}:title="{{title.key}}" {{/if}}
{{#if initOptions }}:initOptions="{{initOptions.key}}" {{/if}}
{{#if tooltipVisible }}:tooltipVisible="{{tooltipVisible.key}}" {{/if}}
{{#if legendVisible }}:legendVisible="{{legendVisible.key}}" {{/if}}
{{#if theme }}:theme="{{theme.key}}" {{/if}}
{{#if themeName }}:themeName="{{themeName.key}}" {{/if}}
{{#if judgeWidth }}:judgeWidth="{{judgeWidth.key}}" {{/if}}
{{#if widthChangeDelay }}:widthChangeDelay="{{widthChangeDelay.key}}" {{/if}}
{{#if resizeable }}:resizeable="{{resizeable.key}}" {{/if}}
{{#if cancelResizeCheck }}:cancelResizeCheck="{{cancelResizeCheck.key}}" {{/if}}
{{#if resizeDelay }}:resizeDelay="{{resizeDelay.key}}" {{/if}}
{{#if changeDelay }}:changeDelay="{{changeDelay.key}}" {{/if}}
{{#if setOptionOpts }}:setOptionOpts="{{setOptionOpts.key}}" {{/if}}
{{#if notSetUnchange }}:notSetUnchange="{{notSetUnchange.key}}" {{/if}}
{{#if remote }}:remote="{{remote.key}}" {{/if}}
{{#if url }}:url="{{url.key}}" {{/if}}
{{#if params }}:params="{{params.key}}" {{/if}}
{{/with}}{{/if}}
{{#if _metadata.store.methods }}
{{#with _metadata.store.methods}}
{{/with}}{{/if}} {{#each _metadata.store.events}}@{{@key}}="{{this.key}}" {{/each}} ></x-chart>`,
  events: {},
  parser: function (key, metadata, store) {
    const keyPrefix = 'chart'
    const data = {}
    const methods = {}
    const events = {}
    store.data = data
    store.methods = methods
    store.events = events
    const list = ['height', 'width', 'settings', 'columns', 'data',
      'initOptions', 'tooltipVisible', 'legendVisible', 'theme', 'themeName', 'judgeWidth',
      'widthChangeDelay', 'resizeable', 'cancelResizeCheck', 'resizeDelay', 'changeDelay',
      'setOptionOpts', 'notSetUnchange', 'extend']
    list.forEach(function (item) {
      if (metadata[item] !== undefined) {
        data[item] = {}
        data[item].key = utils.generateId(keyPrefix + '_' + item)
        data[item].value = metadata[item]
      }
    })
    const source = metadata.source
    if (source) {
      let item = ''
      switch (source.method) {
        case 'remote':
          item = 'remote'
          data[item] = {}
          data[item].key = utils.generateId(keyPrefix + '_' + item)
          data[item].value = true
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
      }
    }
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
