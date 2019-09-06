import Handlebars from 'handlebars/dist/handlebars'
import { helpers } from '../utils/helpers'
import { syncHttpGet } from '@/utils/http'

const requireModule = require.context('../../../static/views', false, /\.json/)
const modules = {}
requireModule.keys().forEach(fileName => {
  // Don't register this file as a Vuex module
  if (fileName === './index.json') return

  const moduleName = fileName.replace(/(\.\/|\.json[5]?)/g, '')
  modules[moduleName] = {
    // namespaced: true,
    ...requireModule(fileName)
  }
})

let system = {}
syncHttpGet('./static/config/system.json', {}, (data, textStatus, jqXHR) => {
  system = data
})
const data = {
  api_project: system.api_project
}

helpers.forEach(help => {
  Handlebars.registerHelper(help.name, help.func)
})
const outputs = {}
// 编译所有的配置文件
Object.keys(modules).forEach(function (key) {
  const source = JSON.stringify(modules[key])
  const tpl = Handlebars.compile(source)
  const output = tpl(data)
  outputs[key] = JSON.parse(output)
})

const views = {
  state: outputs,
  mutations: {},
  actions: {}
}

export default views
