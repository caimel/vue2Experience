import './array'
const buttonsMap = {
  create: {
    btnType: 'primary',
    icon: 'el-icon-edit'
  },
  update: {
    btnType: 'primary',
    icon: 'el-icon-edit'
  },
  read: {
    btnType: 'primary',
    icon: 'el-icon-view'
  },
  delete: {
    btnType: 'primary',
    icon: 'el-icon-delete'
  },
  simple: {
    btnType: 'primary',
    icon: 'el-icon-sort'
  }
}

const funcsMap = {
  create: {
    submit: function (model) {
      console.log('exec [craete:confirm]')
      console.log(JSON.stringify(model))
    }
  },
  update: {
    submit: function (model) {
      console.log('exec [update:confirm]')
      console.log(JSON.stringify(model))
    }
  },
  delete: {
    confirm: function (rows) {
      console.log('exec [delete:confirm]')
      console.log(JSON.stringify(rows))
    },
    cancel: function (rows) {
      console.log('exec [update:cancel]')
      console.log(JSON.stringify(rows))
    }
  },
  read: {
    after: function () {
      console.log('exec [read:after]')
    }
  },
  enable: {
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

export function parseButtons (buttonsData, fields) {
  const buttons = []
  buttonsData.forEach(function (val) {
    const includes = val.includes
    const items = []
    if (fields[val.action] !== undefined) {
      fields[val.action].forEach(function (_item) {
        if (includes.contain(_item.field)) {
          items.push(_item)
        }
      })
    }
    const button = {
      label: val.label,
      type: val.type,
      btnType: buttonsMap[val.type].btnType,
      icon: buttonsMap[val.type].icon,
      name: val.name,
      action: val.action,
      funcs: funcsMap[val.action],
      confirm: val.confirm,
      select: val.select,
      model: {},
      items: items,
      rules: fields.rules,
      controller: val.controller
    }
    buttons.push(button)
  })
  return buttons
}

export function parseFields (fields, sorts) {
  const gridItems = []
  const creatFormItems = []
  const editFormItems = []
  const detailFormItems = []
  const rules = {}
  fields.forEach(function (val) {
    if (val.display) {
      const column = { prop: val.propertyName, label: val.locale, hidden: val.hidden }
      if (sorts.contain(column.prop)) column.sortable = true
      gridItems.push(column)
      const item = {}
      item.label = val.locale
      item.field = val.propertyName
      item.placeholder = ''
      item.widget = widget(val)
      detailFormItems.push(item)
    }
    if (val.editable) {
      const item = {}
      item.label = val.locale
      item.field = val.propertyName
      item.prop = val.propertyName
      item.placeholder = ''
      item.widget = widget(val)
      creatFormItems.push(item)
      editFormItems.push(item)
    }
    rules[val.propertyName] = parseRules(val)
  })
  return {
    gridItems: gridItems,
    create: creatFormItems,
    update: editFormItems,
    read: detailFormItems,
    rules: rules
  }
}

export function parseFormItems (formItemsData) {
  const items = []
  // const rules = []
  formItemsData.forEach(function (val) {
    const item = {
      widget: 'input',
      label: '登陆名',
      field: 'loginName',
      hidden: false,
      placeholder: '请输入用户名'
    }
    items.push(item)
    // rules.push(rule)
  })
  return items
}

function widget (val) {
  let wd = ''
  switch (val.type) {
    case 'int':
      wd = 'number'
      break
    case 'long':
      wd = 'number'
      break
    case 'String':
      wd = 'input'
      break
    default:
      wd = 'input'
  }
  return wd
}

function parseRules (val) {
  const rules = []
  if (!val.nullable || val.blank) {
    const rule = {}
    /*
     switch (val.type) {
       case 'int':
         rule.type = 'integer'
         break;
       case 'long':
         rule.type = 'number'
         break;
       case 'String':
         rule.type = 'string'
         break;
     } */
    rule.required = true
    rule.message = `请输入[${val.locale}]`
    rule.trigger = 'blur'
    rules.push(rule)
  }
  if ((val.min !== undefined && val.min !== null) || (val.max !== undefined && val.min !== null)) {
    const rule = {}
    rule.type = 'integer'
    rule.trigger = 'blur'
    if (val.min !== undefined) {
      rule.min = val.min
      rule.message = `必须是整数类型且数值必须大于${val.min}`
    }
    if (val.max !== undefined) {
      rule.max = val.max
      rule.message = `必须是整数类型且数值必须小于${val.max}`
    }
    if (val.min !== undefined && val.max !== undefined) {
      rule.message = `必须是整数类型且数值必须在${val.min}到${val.max}`
    }
    rules.push(rule)
  }
  /*
  if (val.url !== 'false') {
    console.log('url:' + typeof (val.url))
    const rule = {}
    rule.trigger = 'blur'
    rule.type = 'url'
    rules.push(rule)
  } */
  if (val.mobile !== undefined) {
    const rule = {}
    rule.trigger = 'blur'
    rule.type = 'regexp'
    rule.pattern = /^((13[0-9])|(14[579])|(15([0-3]|[5-9]))|16[6]|17[0135678]|(18[0-9])|19[89])\d{8}$/
    rules.push(rule)
  }
  /*
  if (val.matches !== undefined) {
    const rule = {}
    rule.type = 'regexp'
    rule.pattern = val.matches
    rule.trigger = 'blur'
    rules.push(rule)
  }
  */
  return rules
}

export function parseSearchCondition (searchData, fields) {
  // Todo 搜索条件需要改进
  const searchs = []
  searchData.forEach(function (item) {
    const search = { label: item, value: item }
    searchs.push(search)
  })
  return searchs
}
