// import { fieldsToFieldsMap } from './common'

const buttonMap = {
  create: {
    btnType: 'primary',
    icon: 'el-icon-edit',
    funcs: {
      submit: function (model) {
        console.log('exec [craete:confirm]')
        console.log(JSON.stringify(model))
      }
    }
  },
  update: {
    btnType: 'primary',
    icon: 'el-icon-edit',
    funcs: {
      submit: function (model) {
        console.log('exec [update:confirm]')
        console.log(JSON.stringify(model))
      }
    }
  },
  read: {
    btnType: 'primary',
    icon: 'el-icon-view',
    funcs: {
      after: function () {
        console.log('exec [read:after]')
      }
    }
  },
  delete: {
    btnType: 'primary',
    icon: 'el-icon-delete',
    funcs: {
      confirm: function (rows) {
        console.log('exec [delete:confirm]')
        console.log(JSON.stringify(rows))
      },
      cancel: function (rows) {
        console.log('exec [update:cancel]')
        console.log(JSON.stringify(rows))
      }
    }
  },
  simple: {
    btnType: 'primary',
    icon: 'el-icon-sort',
    funcs: {
      trigger: function (rows) {
        console.log('exec [enable:trigger]')
        console.log(JSON.stringify(rows))
      },
      triggerWithConfirm: function (rows) {
        console.log('exec [enable:trigger]')
        console.log(JSON.stringify(rows))
      }
    }
  }
}

/**
 * @param domain  meta.locale
 * @param fields
 * @param tools
 * @param form
 * @returns {Array}
 */
export function parseToolbar (domain, fields, tools, form) {
  const toolbar = []
  const formItems = form.items
  const formTabsItems = form.tabsItems
  const formRules = form.rules
  tools.forEach(function (tool) {
    // const includes = tool.includes
    // const items = []
    // if (fields[tool.action] !== undefined) {
    //   fields[tool.action].forEach(function (_item) {
    //     if (includes.contain(_item.field)) {
    //       items.push(_item)
    //     }
    //   })
    // }
    const button = buttonMap[tool.type]
    if (buttonMap[tool.type] === undefined) {
      console.warn(`The Type [${tool.type}] is not supported `)
    } else {
      const item = {
        type: tool.type,
        label: tool.label,
        domain: domain,
        btnType: button.btnType,
        icon: button.icon,
        items: formItems,
        tabsItems: formTabsItems,
        rules: formRules,
        funcs: button.funcs,
        url: tool.url
        // confirm: tool.confirm,
        // select: tool.select,
        // model: {},
        // name: tool.name,
        // action: tool.action,
        // controller: tool.controller

      }
      toolbar.push(item)
    }
  })
  return toolbar
}
