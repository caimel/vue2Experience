import '../../../utils/string'
import {Parser} from 'expr-eval'
const DefaultGradient = [{status: 'success', min: 0, max: 100}] // 状态梯度,内置success和exception

const parser = new Parser()

function _getValueByPath (object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}
function broadcastNotComp (instance, eventName, params) {
  instance.$children[0].$emit.apply(instance.$children[0], [eventName].concat(params))
}
const renders = {
  progress: (createElement, ctx) => {
    const row = ctx.props.row
    const column = ctx.props.column
    if (!column.props) { column.props = {} }
    const gradient = column.props.gradient ? column.props.gradient : DefaultGradient
    const percentage = (function () {
      const d = row[column.prop]
      if (d) { return Number(d) }
      return 0
    }())
    let status
    gradient.forEach(function (item) {
      if (item.min <= percentage && percentage <= item.max) {
        status = item.status
      }
    })
    return createElement('el-progress', {
      props: {
        type: column.props.type ? column.props.type : 'line',
        status: status,
        textInside: column.props.type ? column.props.type : true,
        strokeWidth: column.props.strokeWidth ? column.props.strokeWidth : 20,
        showText: column.props.showText ? column.props.showText : true,
        percentage: (function () {
          const d = row[column.prop]
          if (d) {
            return Number(d)
          }
          return 0
        }())
      }
    })
  },
  tag: (createElement, ctx) => {
    const row = ctx.props.row
    const column = ctx.props.column
    const data = row[column.prop]
    const tags = column.props.tags
    let label = ''
    const props = {}
    tags.forEach(function (item) {
      const expr = parser.parse(item.expression)
      if (expr.evaluate(row)) {
        label = item.label || data
        props.type = item.type
        props.color = item.color
        props.size = item.size
        props.hit = item.hit
        props.disableTransitions = item.disableTransitions
      }
    })
    return createElement('el-tag', { props: props }, label)
  },
  icon: (createElement, ctx) => {
    const row = ctx.props.row
    const column = ctx.props.column
    const data = row[column.prop]
    const trueIcon = column.props.trueIcon
    const trueStyle = column.props.trueStyle
    const trueValue = column.props.trueValue === undefined ? true : column.props.trueValue
    const falseIcon = column.props.falseIcon
    const falseStyle = column.props.falseStyle
    const falseValue = column.props.falseValue === undefined ? false : column.props.falseValue

    const clichCtx = {}
    if (data === trueValue) {
      clichCtx.class = trueIcon
      clichCtx.style = trueStyle
    } else if (data === falseValue) {
      clichCtx.class = falseIcon
      clichCtx.style = falseStyle
    }
    return createElement('i', clichCtx)
  },
  operations: (createElement, ctx, emitEventHandler) => {
    const row = JSON.parse(JSON.stringify(ctx.props.row))
    const column = ctx.props.column
    // const data = row[column.prop]
    let h = []
    const options = column.props.options
    const type = column.props.type
    // const label = column.props.label || 'More'
    const label = column.props.label || ''
    if (!options) {
    } else {
      h = options.map((option) => {
        const childCtx = {props: {}}
        Object.assign(childCtx.props, option.props)
        const queryKeys = childCtx.props.queryKeys // 行数据筛选
        const queryKeyMap = childCtx.props.queryKeyMap || {} // 参数名转换
        if (queryKeys && queryKeys.length > 0) {
          if (childCtx.props.query === undefined) childCtx.props.query = {}
          if (childCtx.props.params === undefined) childCtx.props.params = {}
          queryKeys.forEach((item) => {
            childCtx.props.query[queryKeyMap[item] ? queryKeyMap[item] : item] = _getValueByPath(row, item)
            // childCtx.props.params[item] = row[item]
          })
        } else {
          // childCtx.props.query = row
          // childCtx.props.params = row
        }
        // const childData = row[childCtx.props.prop]
        // childCtx.props.disabled = !childData
        // if (data) {
        //   const childData = data[option.props.prop]
        //   if (childData) {
        //     childCtx.props.disabled = childData.disabled
        //     const validate = childCtx.props.validate
        //     const f = ctx.parent.funcs[validate]
        //     if (f) {
        //       childCtx.props.disabled = f(row)
        //     }
        //   }
        // }
        const disabled = childCtx.props.disabled
        switch (typeof disabled) {
          case 'boolean':
            break
          case 'string':
            if (disabled.startsWith('${') && disabled.endsWith('}')) {
              // 表达式计算
              const expression = disabled.substring(2, disabled.length - 1)
              const expr = parser.parse(expression)
              childCtx.props.disabled = expr.evaluate(row)
            }
            break
          default:
            childCtx.props.disabled = false
            break
        }
        switch (option.element) {
          case 'x-confirm-button':
            childCtx.on = {
              'confirm-success': () => { emitEventHandler(`confirm-success#${option.props.id}`, row) }
            }
            break
          case 'click-button':
            childCtx.on = {
              'click': () => { emitEventHandler(`click#${option.props.id}`, row) }
            }
            break
          case 'dialog-component-link-button':
            childCtx.on = {
              'component-link': () => {
                emitEventHandler(`component-link#${option.props.id}`, row)
              }
            }
            break
        }
        return createElement(option.element, childCtx)
      })
    }
    if (type === 'dropdown') {
      const dropdownButton = createElement('el-button', { props: {type: 'text', size: 'mini'} },
        [label,
          createElement('i', {class: ['el-icon-menu']}),
          createElement('i', {class: ['el-icon-arrow-down', 'el-icon--right']})])
      const dropdownMenu = createElement('el-dropdown-menu', {slot: 'dropdown'},
        h.map(item => {
          return createElement('el-dropdown-item', {}, [item])
        })
      )
      // return createElement('el-dropdown', {props: {trigger: 'click'}}, [dropdownButton, dropdownMenu])
      return createElement('el-dropdown', {
        on: {
          'command': (command, instance) => {
            broadcastNotComp(instance, 'menu-item-handleClick')
          }
        }}, [dropdownButton, dropdownMenu])
    }
    return createElement('div', {}, h)
  },
  html: (createElement, ctx) => {
    const row = ctx.props.row
    const column = ctx.props.column
    const data = row[column.prop]
    return createElement('div', {
      domProps: {innerHTML: data}
    })
  },
  compare: (createElement, ctx) => {
    const row = ctx.props.row
    const column = ctx.props.column
    const data = row[column.prop]
    const a = row[column.props.a]
    const b = row[column.props.b]
    const colors = column.props.colors
    let index = 0
    if (a > b) { index = 0 } else if (a < b) { index = 2 } else { index = 1 }
    return createElement('span', {style: {color: colors[index]}}, [data])
  }
}

export default renders
