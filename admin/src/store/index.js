import Vue from 'vue'
import Vuex from 'vuex'
import VuexConnector from '@xunlei/vuex-connector'
import createLogger from 'vuex/dist/logger'

import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const store = new Vuex.Store({
  modules: modules,
  getters: getters,
  plugins: debug ? [createLogger()] : []
})
export const connector = new VuexConnector(store)
export default store
