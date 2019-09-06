import Handlebars from 'handlebars/dist/handlebars'
import moment from 'moment'
// const Handlebars = require('handlebars/dist/handlebars')
// const moment = require('moment')
export const helpers = [
  {
    name: 'equal',
    func: function (param1, param2, options) {
      if (param1 === param2) {
        return options.fn(this)
      } else {
        return options.inverse(this)
      }
    }
  },
  {
    name: 'curly_brackets',
    func: function (value) {
      return `{${value}}`
    }
  },
  {
    name: 'd_curly_brackets',
    func: function (value) {
      return `{{SafeString ${value}}}`
    }
  },
  {
    name: 'json_stringify',
    func: function (value) {
      // return new Handlebars.SafeString(JSON.stringify(value, null, '\t'))
      return new Handlebars.SafeString(JSON.stringify(value))
    }
  },
  {
    name: 'SafeString',
    func: function (value) {
      if (!value) value = ''
      return new Handlebars.SafeString(value)
    }
  },
  {
    name: 'date',
    func: function (...params) {
      const values = params.slice(0, params.length - 1)
      const num = values[0]
      const subtract = values[1]
      const formatter = values[2] || 'YYYY-MM-DD HH:mm:ss'
      return moment().add(num, subtract).format(formatter)
    }
  }
]
