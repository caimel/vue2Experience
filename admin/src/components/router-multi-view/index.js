import RouterMultiView from './components/RouterMultiView'

const plugin = {
  install: (Vue, options) => {
    Vue.component('router-multi-view', RouterMultiView)
  }
}
// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
