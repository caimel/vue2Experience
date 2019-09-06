import Loading from '../packages/loading/index.js'
import MagneticSticker from '../packages/magnetic-sticker/src/magnetic-sticker.vue'

const components = [
  MagneticSticker
]

const directives = []

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
  directives.map(directive => {
    Vue.use(directive)
  })

  Vue.prototype.$Caster = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

  Vue.prototype.$loading = Loading.service
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Caster = {
  version: '1.0.0',
  install
}

export default Caster
