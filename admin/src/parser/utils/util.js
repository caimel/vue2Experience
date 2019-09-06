require('../../utils/array')

global.IDSTORE = {}
exports.generateId = function (key) {
  let v = global.IDSTORE[key] ? global.IDSTORE[key] : 0
  global.IDSTORE[key] = ++v
  return key.toString().replace(/-/g, '') + global.IDSTORE[key]
}

exports.generateTimer = function (name, time, autostart, repeat, immediate) {
  return { name: name, time: time, autostart: autostart, repeat: repeat, immediate: immediate }
}
exports.generateTrigger = function (items) {
  let _str = ''
  items.forEach(function (t) {
    let params = ''
    t.params.forEach(function (param) {
      params += param + ','
    })
    if (t.target === 'this') {
      _str += `this.${t.method}(${params})`
    } else if (t.target === 'self') {
      _str += `if (${t.method} && ${t.method} instanceOf Function) ${t.method}(this, ${params})`
    } else {
      _str += `this.$refs['${t.target}'].${t.method}(${params})`
    }
    _str += '\n'
  })
  return _str
}
