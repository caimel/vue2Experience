const Handlebars = require('handlebars')
const helpers = [
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
  }
]

module.exports = helpers
