require('../../utils/array')
// const utils = require('../../utils/utils')
const chalk = require('chalk')
const fs = require('fs')
const Handlebars = require('handlebars')
const config = {
  constructor: {},
  ignoreFiles: [],
  ignoreComponentTypes: []
}

exports.registerComponents = function () {
  const dir = 'src/parser/components'
  fs.readdirSync(dir)
    .filter(value => {
      return !config.ignoreFiles.contain(value)
    })
    .map(value => {
      const comp = require('../components/' + value)
      console.log(chalk.green(`register Component: [${comp.name}]`))
      config.constructor[comp.name] = comp.parser
      Handlebars.registerPartial(comp.name, comp.template)
    })
}
exports.isRegisterComponent = function (componentName) {
  return typeof config.constructor[componentName] === 'function'
}
exports.parseMetadata = function (key, component, store) {
  if (!store.data) store.data = {}
  if (!store.methods) store.methods = {}
  if (!store.events) store.events = {}
  // if (!store.watch) store.watch = {}
  const componentKey = 'component'
  const metadataKey = 'metadata'
  const type = component[componentKey]
  if (!type) {
    console.warn(`This is not a component and metadata  be parse !`)
    return
  }
  if (!config.ignoreComponentTypes.contain(type)) {
    const metadata = component[metadataKey]
    config.constructor[type](key, metadata, store)
  }
}
