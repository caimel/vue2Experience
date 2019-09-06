import '@/utils/array'

const ruleTrigger = 'blur'

const constraintsFunc = {
  blank: function (prop) {
    const rule = {}
    rule.required = false
    if (prop.constraints.blank) rule.required = true
    rule.message = `请输入[${prop.name}]`
    rule.trigger = ruleTrigger
    return rule
  },
  nullable: function (prop) {
    const rule = {}
    rule.required = false
    if (prop.constraints.nullable) rule.required = true
    rule.message = `请输入[${prop.name}]`
    rule.trigger = ruleTrigger
    return rule
  },
  required: function (prop) {
    const rule = {}
    rule.required = true
    rule.message = `请输入[${prop.name}]`
    rule.trigger = ruleTrigger
    return rule
  },
  size: function (prop) {
    const rule = {}
    rule.required = true
    rule.message = `请输入[${prop.name}]`
    rule.trigger = ruleTrigger
    return rule
  },
  range: function (prop) {
    const rule = {}
    rule.type = prop.type
    rule.trigger = ruleTrigger
    rule.message = '请输出'
    if (prop.constraints.range.min) {
      rule.min = prop.constraints.range.min
      rule.message += `[大于${rule.min}]`
    }
    if (prop.constraints.range.max) {
      rule.max = prop.constraints.range.max
      rule.message += `[小于${rule.max}]`
    }
    return rule
  },
  mobile: function (prop) {
    const rule = {}
    rule.type = 'regexp'
    rule.pattern = /^((13[0-9])|(14[579])|(15([0-3]|[5-9]))|16[6]|17[0135678]|(18[0-9])|19[89])\d{8}$/
    rule.message = `请输入手机号码`
    rule.trigger = ruleTrigger
    return rule
  },
  matches: function (prop) {
    const rule = {}
    rule.type = 'regexp'
    rule.pattern = prop.constraints.matches
    rule.message = `请输入符合规则的值`
    rule.trigger = ruleTrigger
    return rule
  }

}

const ingoreProps = ['unique']

function parseRules (name, constraints) {
  const rules = []
  for (var key in constraints) {
    if (ingoreProps.contain(key)) continue
    if (typeof constraintsFunc[key] === 'function') {
      rules.push(constraintsFunc[key]({name: name, constraints: constraints}))
    } else {
      console.warn(`The constraint [${key}] is not supported `)
    }
  }
  return rules
}

//  解析属性约束
export function parseConstraints (fields) {
  const rules = {}
  fields.forEach(function (field) {
    rules[field.propertyName] = parseRules(field.locale, field.constraints)
  })
  return rules
}
