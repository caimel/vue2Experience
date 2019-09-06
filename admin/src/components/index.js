import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import VChartWrapper from './v-chart-wrapper'
import DropdownView from './dropdown-view'
import DropdownTabsView from './dropdown-tabs-view'
import DrilldownTabsView from './drilldown-tabs-view'
import TabsView from './tabs-view'
import NestedTabsView from './nested-tabs-view'
import ComponentLinkTabs from './component-link-tabs'
import XComponentLinkTabs from './xcomponent-link-tabs'
import Square from './square'
import XIcon from './icon'
import XPanel from './panel'
import XTabs from './tabs'
import XCollapseContainer from './collapse-container'
import XCard from './card'
import XTree from './tree'
import XTable from './table'
import XForm from './form/XForm'
import XInlineForm from './form/XInlineForm'
import XFormPanel from './form/XFormPanel'
import XToolbar from './toolbar'
import XChart from './chart'
import XChartBoxes from './chart-boxes'
import XInfo from './info'
import XInfoCard from './info-card'
import XCron from './cron'

import CountDownTimer from './countdown-timer/CountDownTimer'
import ReapeatCountDownTimer from './countdown-timer/ReapeatCountDownTimer'
import ElCheckboxGroup from './checkbox'
import XSelect from './select'
import XTreeTransfer from './tree-transfer'

import XCollapse from './collapse'
import XCollapseItem from './collapse-item'

const components = [
  VChartWrapper,
  ElCheckboxGroup,
  CountDownTimer,
  ReapeatCountDownTimer,
  DropdownView,
  DropdownTabsView,
  DrilldownTabsView,
  TabsView,
  NestedTabsView,
  ComponentLinkTabs,
  XComponentLinkTabs,
  Square,
  XIcon,
  XPanel,
  XTabs,
  XCollapseContainer,
  XCard,
  XTree,
  XTable,
  XForm,
  XInlineForm,
  XFormPanel,
  XToolbar,
  XChart,
  XChartBoxes,
  XInfo,
  XInfoCard,
  XCron,
  XSelect,
  XTreeTransfer
]

const directives = []

// components
function registerComponent (Vue, requireComponent) {
  requireComponent.keys().forEach(fileName => {
    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    )
    // Get component config
    const componentConfig = requireComponent(fileName)
    // Register component globally
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
  directives.map(directive => {
    Vue.use(directive)
  })

  Vue.use(XCollapse)
  Vue.use(XCollapseItem)
  // button
  const buttons = require.context('./button', true, /[\w-]+\.vue$/)
  registerComponent(Vue, buttons)

  Vue.prototype.$LAUNCHER = {}
  Vue.prototype.$tl = function (label) {
    if (!label) {
      return
    }
    return label.startsWith('$') ? this.$t(label.substring(1, label.length)) : label
  }

  // Vue.prototype.$loading = Loading.service;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Launcher = {
  version: '1.0.0',
  install
}

export default Launcher
