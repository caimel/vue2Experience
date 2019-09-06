require('../../utils/array')
const uuIdUtils = require('../../utils/utils')
const util = require('../utils/util')

exports.parseHttpRequest = function (httpRequests, store) {
  if (!httpRequests) return
  const keyPrefix = 'httpRequest'
  if (!store.methods) store.methods = {}
  if (!store.timers) store.timers = {}
  const methods = store.methods
  const timers = store.timers
  httpRequests.forEach(function (item) {
    let method = 'get'
    if (item.method) method = item.method
    const key = uuIdUtils.generateUuId(keyPrefix)
    methods[key] = {}
    methods[key].key = uuIdUtils.generateUuId(keyPrefix)
    let trigger = util.generateTrigger(item.success.trigger)
    const methodName = item.name ? item.name : key
    const paramsString = item.params ? JSON.stringify(item.params) : '{}'
    methods[key].value = {
      methodName: methodName,
      params: [],
      content:
        `this.$axios.${method}('${item.url}',{params: ${paramsString}})
        .then((response) => {
          ${trigger}
        }).catch(err => {
          this.$message({type: 'error', message: '${item.error.message}:' + '[' + err.response.data.message + ']'})
        })`
    }
    // timers
    const timeKey = uuIdUtils.generateUuId(keyPrefix)
    timers[timeKey] = {}
    timers[timeKey].key = timeKey
    timers[timeKey].trigger = util.generateTrigger([{ target: 'this', method: methodName, params: [] }])
    timers[timeKey].value = util.generateTimer(timeKey, item.time, item.autostart, item.repeat, item.immediate)
  })
}
