import { Parser } from 'expr-eval'

const install = function (Vue, opts = {}) {
  const parser = new Parser()
  Vue.prototype.$evaluate = function (expression, data) {
    var expr = parser.parse(expression)
    return expr.evaluate(data)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const ExprEval = {
  version: '1.0.0',
  install
}

export default ExprEval
