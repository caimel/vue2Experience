const renders = {
  input: (createElement, ctx) => {
    ctx.data.attrs = {
      placeholder: ctx.data.props.placeholder
    }
    let childrenCreateElement = []
    // if (ctx.data.props.slots) {
    //   Object.keys(ctx.data.props.slots).forEach(function (slot) {
    //     childrenCreateElement.push(createElement('template', {slot: slot}, ctx.data.props.slots[slot]))
    //   })
    // }
    if (ctx.data.props.slots) {
      ctx.data.props.slots.forEach(function (slot) {
        let ctx = {}
        Object.assign(ctx, slot)
        childrenCreateElement.push(createElement(slot.element, ctx, slot.text))
      })
    }
    return createElement('el-input', ctx.data, childrenCreateElement)
  },
  // select: (createElement, ctx) => {
  //   let h
  //   const options = ctx.data.props.options
  //   if (options instanceof Array) {
  //     h = options.map((option) => {
  //       if (option.options) {
  //         return createElement('el-option-group', { props: option },
  //           option.options.map((opt) => {
  //             return createElement('el-option', { props: opt })
  //           }))
  //       } else {
  //         return createElement('el-option', { props: option })
  //       }
  //     })
  //   }
  //   if (ctx.data.props.remote) {
  //     const url = ctx.data.props.url
  //     ctx.data.props.remoteMethod = function (params) {
  //       this.$axios.get(url, params)
  //         .then((response) => {
  //         }).catch(err => {
  //           console.error(err)
  //           // this.$message({type: 'error', message: '请求错误!:' + '[' + err.response.data.message + ']'})
  //         })
  //     }
  //   }
  //   return createElement('el-select', ctx.data, h)
  // },
  select: (createElement, ctx) => {
    return createElement('x-select', ctx.data)
  },
  'checkbox-group': (createElement, ctx) => {
    const options = ctx.data.props.options
    let h = options.map((option) => {
      return createElement('el-checkbox', { props: option }, option.text ? option.text : option.label)
    })
    return createElement('el-checkbox-group', ctx.data, h)
  },
  'radio-group': (createElement, ctx) => {
    const DEFAULTOPTIONS = [{label: true, value: true}, {label: false, value: false}]
    const options = ctx.data.props.options ? ctx.data.props.options : DEFAULTOPTIONS
    let h = options.map((option) => {
      // TODO 这里可能要bug，需要重新梳理
      return createElement('el-radio', { props: option }, option.text)
    })
    return createElement('el-radio-group', ctx.data, h)
  },
  'input-number': (createElement, ctx) => {
    return createElement('el-input-number', ctx.data)
  },
  cascader: (createElement, ctx) => {
    return createElement('el-cascader', ctx.data)
  },
  switch: (createElement, ctx) => {
    return createElement('el-switch', ctx.data)
  },
  slider: (createElement, ctx) => {
    return createElement('el-slider', ctx.data)
  },
  'time-select': (createElement, ctx) => {
    return createElement('el-time-select', ctx.data)
  },
  'time-picker': (createElement, ctx) => {
    return createElement('el-time-picker', ctx.data)
  },
  'date-picker': (createElement, ctx) => {
    return createElement('el-date-picker', ctx.data)
  },
  rate: (createElement, ctx) => {
    return createElement('el-rate', ctx.data)
  },
  'color-picker': (createElement, ctx) => {
    return createElement('el-color-picker', ctx.data)
  },
  'html-editor': (createElement, ctx) => {
    return createElement('quill-editor', ctx.data)
  },
  'json-editor': (createElement, ctx) => {
    return createElement('vue-json-editor', ctx.data)
  },
  'md-editor': (createElement, ctx) => {
    return createElement('mavon-editor', ctx.data)
  },
  'transfer': (createElement, ctx) => {
    return createElement('el-transfer', ctx.data)
  },
  'tree-transfer': (createElement, ctx) => {
    return createElement('x-tree-transfer', ctx.data)
  },
  'tree': (createElement, ctx) => {
    return createElement('x-tree', ctx.data)
  }
  // TODO  需要增加upload、image-cropper
}
export default renders
