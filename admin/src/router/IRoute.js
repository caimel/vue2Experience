import UUID from 'uuid-js'
const default_namespace = 'default'

class IRoute {
  constructor (namespace, r) {
    Object.assign(this, r)
    this.name = this.name || this.path + UUID.create(1).toString().replace(/-/g, '')
    this.meta = this.meta || { $label: (namespace || default_namespace) + '.' + this.path }
    this.children = this.children || []
  }
}

export default IRoute
