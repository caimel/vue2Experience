// 将fields Array 转换成Map 方便查找
export function fieldsToFieldsMap (fields) {
  const map = {}
  fields.forEach(function (field) {
    map[field.propertyName] = field
  })
  return map
}
