import { fieldsToFieldsMap } from './common'
import { constant } from './constant'
import { parseConstraints } from './constraint'

export function parseForm (fields, tabs) {
  const form = {
    items: [],
    tabsItems: {},
    rules: []
  }
  form.rules = parseConstraints(fields)
  const fieldsMap = fieldsToFieldsMap(fields)
  tabs.forEach(function (tab) {
    const items = []
    tab.fields.forEach(function (fieldKeyList) {
      fieldKeyList.forEach(function (fieldKey) {
        const field = fieldsMap[fieldKey]
        if (field === undefined) {
          console.warn(`The field [${fieldKey}] not found! `)
        } else {
          const item = {}
          item.label = field.locale
          item.prop = field.propertyName
          item.placeholder = ''
          if (!field.widget) {
            const _widget = constant.DEFAULT_WIDGETS[field.type] // 根据type 类型映射widget
            if (_widget) {
              item.widget = _widget
            } else {
              console.warn(`The field [${fieldKey}] not be set,use default widget [${constant.DEFAULT_WIDGET}]`)
              item.widget = constant.DEFAULT_WIDGET
            }
          } else {
            item.widget = field.widget
          }
          items.push(item)
        }
      })
    })
    if (tab.label === 'default') {
      form.items = form.items.concat(items)
    } else {
      if (form.tabsItems[tab.label] === undefined) form.tabsItems[tab.label] = []
      form.tabsItems[tab.label] = form.tabsItems[tab.label].concat(items)
    }
  })
  return form
}
