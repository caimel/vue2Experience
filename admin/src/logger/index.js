import Vue from 'vue'
import vueLogger from 'vue-logger'

Vue.use(vueLogger, {
  prefix: () => new Date(),
  dev: process.env.LOGDEBUG,
  shortname: true,
  levels: ['log', 'info', 'warn', 'debug', 'error', 'dir']
})
