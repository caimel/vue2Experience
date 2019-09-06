require('../../utils/array')
const uuIdUtils = require('../../utils/utils')
const util = require('../utils/util')

exports.parseTimers = function (timersConfig, store) {
  if (!timersConfig) return
  const keyPrefix = 'timer'
  if (!store.timers) store.timers = {}
  const timers = store.timers
  timersConfig.forEach(function (item) {
    const key = uuIdUtils.generateUuId(keyPrefix)
    timers[key] = {}
    timers[key].key = key
    // let trigger = generateTrigger(item.trigger)
    timers[key].trigger = util.generateTrigger(item.trigger)
    timers[key].value = util.generateTimer(key, item.time, item.autostart, item.repeat, item.immediate)
  })
}
