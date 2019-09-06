const renders = {
  edit: function (createElement, emitEventHandler, item) {
    return createElement('x-edit-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {
        'submit-success': () => emitEventHandler(`submit-success#${item.id}`)
      }
    })
  },
  confirm: function (createElement, emitEventHandler, item) {
    return createElement('x-confirm-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {
        'confirm-success': () => emitEventHandler(`confirm-success#${item.id}`)
      }
    })
  },
  trigger: function (createElement, emitEventHandler, item) {
    return createElement('x-trigger-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      // props: {
      //   item: item
      // },
      on: {
        'trigger-success': () => emitEventHandler(`trigger-success#${item.id}`)
      }
    })
  },
  checks: function (createElement, emitEventHandler, item) {
    return createElement('x-checks-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {
        'checks-change': () => emitEventHandler(`checks-change#${item.id}`)
      }
    })
  },
  click: function (createElement, emitEventHandler, item) {
    return createElement('click-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {
        'click': () => emitEventHandler(`click#${item.id}`)
      }
    })
  },
  routerLink: function (createElement, emitEventHandler, item) {
    return createElement('router-link-button', {
      ref: item.id,
      refInFor: true,
      props: item
    })
  },
  dialogRouterLink: function (createElement, emitEventHandler, item) {
    return createElement('dialog-router-link-button', {
      ref: item.id,
      refInFor: true,
      props: item
    })
  },
  emitEvent: function (createElement, emitEventHandler, item) {
    return createElement('emit-event-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {
        'emit-event': (args, val) => {
          emitEventHandler(`emit-event`, item.id, args, val)
          emitEventHandler(`emit-event#${item.id}`, args, val)
        }
      }
    })
  },
  exportHtmlTable: function (createElement, emitEventHandler, item) {
    return createElement('export-html-table-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {}
    })
  },
  exportTable: function (createElement, emitEventHandler, item) {
    return createElement('export-table-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {}
    })
  },
  dialogIframe: function (createElement, emitEventHandler, item) {
    return createElement('dialog-iframe-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {}
    })
  },
  reapeatCountDownTimer: function (createElement, emitEventHandler, item) {
    return createElement('reapeat-count-down-timer-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {'expired': () => emitEventHandler(`expired#${item.id}`)}
    })
  },
  'dialog-component-link-button': function (createElement, emitEventHandler, item) {
    return createElement('dialog-component-link-button', {
      ref: item.id,
      refInFor: true,
      props: item,
      on: {'component-link': () => emitEventHandler(`component-link#${item.id}`)}
    })
  }
}
export default renders
