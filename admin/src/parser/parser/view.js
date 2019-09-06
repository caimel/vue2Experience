require('../../utils/array')
const chalk = require('chalk')
const fs = require('fs')
const Handlebars = require('handlebars')
const config = {
  constructor: {},
  ignoreFiles: [],
  ignoreComponentTypes: []
}

exports.registerViews = function () {
  const dir = 'src/parser/views'
  fs.readdirSync(dir)
    .filter(value => {
      return !config.ignoreFiles.contain(value)
    })
    .map(value => {
      const view = require('../views/' + value)
      console.log(chalk.green(`register views: [${view.name}]`))
      config.constructor[view.name] = view.parser
      Handlebars.registerPartial(view.name, view.template)
    })
}
