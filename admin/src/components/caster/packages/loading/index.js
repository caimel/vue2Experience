import service from './src/index'
export default {
  install (Vue) {
    Vue.prototype.$loading = service
  },
  service
}
