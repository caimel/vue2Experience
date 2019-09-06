const partials = [
  { name: 'x-panel',
    scope: 'layout',
    template:
      `<x-panel :items="{{ metadata.data }}" {{#if slot }}slot="{{slot}}" {{/if}}>
{{#each metadata.items }}{{#each columns}}
{{#if child }}{{> x-layout layout = child  slot = slot }}{{else}}{{d_curly_brackets slot}}{{/if}}
{{/each}}{{/each}}
</x-panel>`
  },
  { name: 'x-tabs',
    scope: 'layout',
    template:
      `<x-tabs :items="{{metadata.data}}" {{#if slot }}slot="{{slot}}" {{/if}}>
{{#each metadata.items}}
{{d_curly_brackets slots.label}}
{{#if slots.content.child }}{{> x-layout layout = slots.content.child  slot = slots.content.slot }}
{{else}}{{d_curly_brackets slots.content.slot}}{{/if}}
{{/each}}
</x-tabs>`
  },
  { name: 'x-collapse',
    scope: 'layout',
    template:
      `<x-collapse :items="{{metadata.data}}" {{#if slot }}slot="{{slot}}" {{/if}}>
{{#each metadata.items}}
{{d_curly_brackets slots.title}}
{{#if slots.content.child }}{{> x-layout layout = slots.content.child  slot = slots.content.slot }}
{{else}}{{d_curly_brackets slots.content.slot}}{{/if}}
{{/each}}
</x-collapse>`
  },
  { name: 'x-card',
    scope: 'layout',
    template:
      `<x-card {{#if slot }}slot="{{slot}}" {{/if}} :slots="{{metadata.data.slots}}" {{#if metadata.item.header }}header="{{metadata.item.header}}" {{/if}}>
{{#if metadata.item.slots.header }}{{d_curly_brackets metadata.item.slots.header}}{{/if}}
{{#if metadata.item.slots.content.child }}{{> x-layout layout = metadata.item.slots.content.child  slot = metadata.item.slots.content.slot }}
{{else}}{{d_curly_brackets metadata.item.slots.content.slot}}{{/if}}
</x-card>`
  },
  {
    name: 'x-layout',
    scope: 'layout',
    template:
      `{{#if layout}}{{#equal layout.container 'panel'}}{{> x-panel metadata = layout.metadata }}{{/equal}}
{{#equal layout.container 'tabs'}}{{> x-tabs  metadata = layout.metadata }}{{/equal}}
{{#equal layout.container 'collapse'}}{{> x-collapse  metadata = layout.metadata }}{{/equal}}
{{#equal layout.container 'card'}}{{> x-card  metadata = layout.metadata }}{{/equal}}{{/if}}`
  },
  {
    name: 'vue-template',
    scope: 'template',
    template: `{{> x-layout layout = layout }}`
  },
  {
    name: 'template-wrapper',
    scope: 'component',
    template: `<template {{#if slot }}slot="{{slot}}">{{content}}</template>`
  }
]

module.exports = partials
