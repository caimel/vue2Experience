import { constant } from './constant'
import { fieldsToFieldsMap } from './common'

export function parseSearch (fields, search) {
  const fieldsMap = fieldsToFieldsMap(fields)
  const form = {
    items: []
  }
  switch (search.type) {
    case 'standard':
      const items = []
      search.fields.forEach(function (f) {
        const fieldKey = f.name
        const field = fieldsMap[fieldKey]
        if (field === undefined) {
          console.warn(`The field [${fieldKey}]  not found! `)
        } else {
          const item = {}
          item.op = f.op
          item.label = field.locale
          item.prop = field.propertyName
          item.placeholder = ''
          if (!field.widget) {
            console.warn(`The field [${fieldKey}] not be set,use default widget [${constant.DEFAULT_WIDGET}]`)
            item.widget = constant.DEFAULT_WIDGET
          } else {
            item.widget = field.widget
          }
          items.push(item)
        }
      })
      form.items.push(items)
      break
    default:
      console.warn(`The Search Type [${search.type}]  not supported!`)
      break
  }
  return form
}
