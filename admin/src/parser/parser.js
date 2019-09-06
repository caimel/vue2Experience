const Handlebars = require('handlebars')
const chalk = require('chalk')
const layoutUtil = require('./parser/layout')
const componentUtil = require('./parser/component')
const timerUtil = require('./parser/timer')
const httpRequestUtil = require('./parser/httpRequest')

const helpersFiles = ['./helpers/helpers']
const partialsFiles = ['./partials/partials', './views/partials']

function registerHelper (helpersFilesList) {
  let helpers
  helpersFilesList.forEach(path => {
    helpers = require(path)
    helpers.forEach(help => {
      Handlebars.registerHelper(help.name, help.func)
    })
  })
}

function registerPartial (partialsFileList) {
  let partials
  partialsFileList.forEach(path => {
    partials = require(path)
    partials.forEach(partial => {
      Handlebars.registerPartial(partial.name, partial.template)
    })
  })
}

function parseComponents (metadata) {
  componentUtil.registerComponents()
  let result = {}
  result['store'] = {}
  result['components'] = {}
  const comps = metadata.components
  for (let key in comps) {
    const comp = comps[key]
    console.log(chalk.blue(`Parse Component [${key}:${comp.component}]...`))
    let tpl
    if (componentUtil.isRegisterComponent(comp.component)) {
      tpl = Handlebars.compile(`{{> ${comp.component} }}`)
    } else {
      console.warn(chalk.red(`This component [${comp.component}] is not supported! `))
    }
    let store = {}
    componentUtil.parseMetadata(key, comp, store)
    if (tpl) {
      result['components'][key] = tpl({ _metadata: { slot: key, ref: comp.id, store: store } })
    }
    result['store'][key] = store
  }
  return result
}
function parseTimers (metadata) {
  const store = {}
  timerUtil.parseTimers(metadata, store)
  return store
}
function parseHttpRequests (metadata) {
  const store = {}
  httpRequestUtil.parseHttpRequest(metadata, store)
  return store
}
exports.parse = function (metadata) {
  registerHelper(helpersFiles)
  registerPartial(partialsFiles)

  console.log(chalk.blue(`Parse Components...`))
  const result = parseComponents(metadata)
  // 编译layout template
  let _layout = {}
  let store = {}
  Object.assign(_layout, metadata.layout)
  console.log(chalk.blue(`Parse Layout...`))
  layoutUtil.parseMetadata(_layout, store)
  const layoutTpl = Handlebars.compile('{{> x-layout layout = layout}}')
  const stores = {}
  Object.assign(stores, result.store)
  stores['$#layout'] = store
  console.log(chalk.blue(`Parse Timers...`))
  stores['timers'] = {}
  if (metadata.timers) { stores['timers'] = parseTimers(metadata.timers).timers }
  stores['methods'] = {}
  console.log(chalk.blue(`Parse httpRequest...`))
  if (metadata.http) {
    const requestStore = parseHttpRequests(metadata.http)
    Object.assign(stores['methods'], requestStore.methods)
    Object.assign(stores['timers'], requestStore.timers)
  }
  const template = Handlebars.compile(layoutTpl({layout: _layout}))(result.components)
  let importFunction = metadata.import_function || []
  if (metadata.lifecycle_function) importFunction = importFunction.concat(Object.values(metadata.lifecycle_function))
  // viewUtil.registerViews()
  let viewTpl
  if (metadata.view) {
    viewTpl = Handlebars.compile(`{{> ${metadata.view.name}  content = content}}`)
  }
  const templateStr = viewTpl ? viewTpl({content: new Handlebars.SafeString(template)}) : template
  return {
    template: templateStr,
    stores: stores,
    'import_script': metadata.import_script,
    'import_function': importFunction,
    'lifecycle_function': metadata.lifecycle_function }
}
