// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import i18n from './i18n'
import router from './router'
import store from './store'
// element-ui
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/theme/index.css'
// quill-editor
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// json-editor
import vueJsonEditor from 'vue-json-editor'
// mavon-editor(markdown-editor)
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// codemirror
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/mode/sql/sql.js'
import sqlFormatter from 'sql-formatter'
// import VCharts from 'v-charts'
import VChartsLine from 'v-charts/lib/line.common'
// timeline
import LightTimeline from 'vue-light-timeline'

// echarts
import walden from '@/assets/echarts/theme/walden.json'
import VueECharts from 'vue-echarts/components/ECharts'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/map'
// import 'echarts/lib/chart/heatmap'
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/chart/radar'
// import 'echarts/lib/component/tooltip'
import 'echarts'
// import 'echarts/theme/dark'
// import 'echarts/theme/infographic'
// import 'echarts/theme/macarons'
// import 'echarts/theme/roma'
// import 'echarts/theme/shine'
// import 'echarts/theme/vintage'

import VueLazyLoadImg from 'vue-lazy-load-img'
import VueAMap from 'vue-amap'
import VueTimers from 'vue-timers'
// import VueRouterMultiView from 'vue-router-multi-view'
import VueRouterMultiView from '@/components/router-multi-view'
import moment from 'moment'
import { Plugin } from 'vue-fragment'

// Layout
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
// css
import './assets/icon/icon-cn/iconfont.css'
import './assets/icon/material/iconfont.css'
import 'animate.css/animate.min.css'
import './assets/styles/global.css'
import './logger'
// import './access-controller/guard/routeGuard'
import './access-controller/index'
import './mock' // simulation data

/**
 *  directives
 */
import Print from 'vue-print-nb'
import ExportHtmlTable from '@/directives/export-table'
import HighLight from '@/directives/highlight'
import DialogDrag from '@/directives/dialog-drag'

/**
 * launcher
 */
import Launcher from '@/components/index'
import './import-view'
import Caster from '@/components/caster/src/index'

Vue.config.productionTip = false
// moment 时间处理
Vue.prototype.$moment = moment

Vue.use(Element, {
  size: 'mini',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Launcher)
Vue.use(Caster)
// plugins
Vue.use(Print)
Vue.use(ExportHtmlTable)
Vue.use(HighLight)
Vue.use(DialogDrag)
Vue.use(VueQuillEditor /* { default global options } */)
Vue.use(vueJsonEditor)
Vue.use(mavonEditor)

const CodeMirror = VueCodemirror.CodeMirror
CodeMirror.defineExtension('sqlFormatter', function () {
  const doc = this
  const text = doc.getValue()
  const output = sqlFormatter.format(text)
  doc.setValue(output)
})

Vue.use(VueCodemirror, {
  options: {
    mode: 'text/x-sql',
    lineWrapping: true, // 代码折叠
    lineNumbers: true,
    matchBrackets: true, // 括号匹配
    smartIndent: true, // 自动缩进,
    scrollbarStyle: 'native',
    extraKeys: {
      // 'Ctrl-Space': 'autocomplete',
      'Ctrl-F': function (cm) { cm.sqlFormatter() }
    }
  }
})
Vue.component('v-chart', VueECharts)
VueECharts.registerTheme('walden', walden)
// Vue.use(VCharts)
Vue.component(VChartsLine.name, VChartsLine)
Vue.use('vue-lazy-load-img', VueLazyLoadImg)
Vue.use(VueAMap)
Vue.use(VueTimers)

Vue.use(VueRouterMultiView)
Vue.use(LightTimeline)
Vue.use(Plugin)

Vue.component('waterfall', Waterfall)
Vue.component('waterfall-slot', WaterfallSlot)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
