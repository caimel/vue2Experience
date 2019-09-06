import Main from '@/views/main'
import { generateVueComponent } from '@/dync/util'
const demo = [
  { path: '/layout',
    component: Main,
    meta: {
      labelKey: 'route.layout.label', label: 'Layout', iconClass: 'el-icon-cn-mobankuangjia'
    },
    children: [
      { path: 'collapses',
        name: 'Collapses',
        component: () => import('@/views/demo/collapses'),
        meta: {
          group: 'Layout Components',
          labelKey: 'route.collapses.label',
          label: 'collapses',
          iconClass: 'el-icon-setting'
        }
      },
      { path: 'panels',
        name: 'Panels',
        component: () => import('@/views/demo/panels'),
        meta: {
          group: 'Layout Components',
          labelKey: 'route.panels.label',
          label: 'Panels',
          iconClass: 'el-icon-setting'
        }
      },
      { path: 'cards',
        name: 'Cards',
        component: () => import('@/views/demo/cards'),
        meta: {
          group: 'Layout Components',
          labelKey: 'route.cards.label',
          label: 'cards',
          iconClass: 'el-icon-setting'
        }
      },
      { path: 'tabs',
        name: 'Tabs',
        component: () => import('@/views/demo/tabs'),
        meta: {
          group: 'Layout Components',
          labelKey: 'route.tabs.label',
          label: 'Tabs',
          iconClass: 'el-icon-setting'
        }
      },
      {
        path: 'waterfall',
        name: 'waterfall',
        component: () => import('@/views/demo/waterfall'),
        meta: {
          group: 'Layout Components', label: '瀑布', iconClass: 'el-icon-cn-shezhi'
        }
      }
    ]
  },
  { path: '/demo',
    component: Main,
    meta: {
      label: '示例', iconClass: 'el-icon-view'
    },
    children: [
      // { name: 'leftright',
      //   path: 'leftright',
      //   component: () => import('@/views/demo/leftright'),
      //   meta: {
      //     label: '树表联动', iconClass: 'el-icon-setting'
      //   }
      // },
      /*
      { name: 'Organization',
        path: 'index',
        component: () => import('@/views/demo/organization'),
        meta: {
          label: '组织', iconClass: 'el-icon-setting'
        }
      },
      */
      { name: 'employee',
        path: 'employee',
        component: () => import('@/views/demo/employee'),
        meta: {
          label: 'Employee', iconClass: 'el-icon-setting'
        }
      },
      { name: 'treegrid',
        path: 'treegrid',
        // component: () => import('@/views/demo/linkage/TreeGrid'),
        component: generateVueComponent(),
        meta: {
          label: 'TreeGrid', iconClass: 'el-icon-setting'
        }
      },
      { name: 'treegridform',
        path: 'treegridform',
        component: () => import('@/views/demo/linkage/TreeGridForm'),
        meta: {
          label: 'TreeGridForm', iconClass: 'el-icon-setting'
        }
      },
      { name: 'gridform',
        path: 'gridform',
        component: () => import('@/views/demo/linkage/GridForm'),
        meta: {
          label: 'GridForm', iconClass: 'el-icon-setting'
        }
      }
    ]
  },
  { path: '/monitor',
    component: Main,
    name: 'm',
    meta: {
      label: '图表', iconClass: 'el-icon-cn-tiaoxingtu-xianxing'
    },
    children: [
      { name: 'monitor',
        path: 'index',
        component: () => import('@/views/demo/monitor'),
        meta: {
          label: 'monitor', iconClass: 'el-icon-setting'
        }
      },
      { name: 'sonar',
        path: 'monitor2',
        component: () => import('@/views/demo/sonar'),
        meta: {
          label: 'monitor2', iconClass: 'el-icon-setting'
        }
      }
    ]
  },
  { path: '/setting',
    component: Main,
    name: 'setting',
    meta: {
      label: '系统设置', iconClass: 'el-icon-cn-shezhi'
    },
    children: []
  }
]

export default demo
