import Vue from 'vue'
import Router from 'vue-router'
import business from './business'
Vue.use(Router)

/**
 * meta :{
      type: 'single'           单一的菜单项，只取children[0]
      label: 'label',          label
      labelKey: '',             i18n
      hidden: false            是否在菜单栏隐藏，不定义meta 默认hidden: true
      iconClass: 'iconClass',  iconClass
      cache: false,           是否缓存
      close: true             定义view 是否能被关闭
      group: 'groupName'
  }
 *
 */
const staticRoutes = [
  { path: '/login', name: 'Login', component: () => import('@/views/login'), meta: { hidden: true } },
  { path: '/lockScreen', name: 'LockScreen', component: () => import('@/views/lockScreen'), meta: { hidden: true } },
  { path: '/404', name: '404', component: () => import('@/views/errorPage/404'), meta: { hidden: true } },
  { path: '/401', name: '401', component: () => import('@/views/errorPage/401'), meta: { hidden: true } }
]

export const routes = staticRoutes.concat(business)

export default new Router({
  // mode: 'history',
  routes: routes
})
