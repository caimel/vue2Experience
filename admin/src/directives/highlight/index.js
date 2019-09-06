'use strict'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
let HighLight = {}

HighLight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  })
}

export default HighLight
