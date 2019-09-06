const install = function (Vue, opts = {}) {
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Plugins = {
  version: '1.0.0',
  install
}

export default Plugins
