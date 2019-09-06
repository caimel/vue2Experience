import './axios'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
NProgress.configure({ showSpinner: false })

/**
 * 处理嵌套页面的 浏览器刷新
 * 处理方式： 三级及三级以下的路由页面被重定向到二级路由页面
 * @param event
 */
window.onload = function (event) {
  const hrefArr = location.href.split('#')
  if (hrefArr[1]) {
    const pathArr = hrefArr[1].replace(/(^\/*)|(\/*$)/g, '').split('/')
    if (pathArr.length > 2) {
      const redirectRef = hrefArr[0] + '#/' + pathArr[0] + '/' + pathArr[1]
      location.href = redirectRef
    }
  }
}
const routeWhiteList = ['/login', '/401', '/404']
// route guard
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  // loadLanguage
  if (routeWhiteList.includes(to.path)) {
    next()
  } else {
    if (!store.getters.isLogin) {
      next('/login')
    } else {
      next()
    }
  }
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
/*
function traverse (routeConfigList, current) {
  let routeTree = current || []
  if (!routeConfigList || routeConfigList.length === 0) return routeTree
  routeConfigList.forEach(function (item) {
    let route = {
      path: item.path,
      name: item.name,
      redirect: item.redirect,
      meta: item.meta,
      children: []
    }
    if (item.uri) {
      route.component = () => import('@/views/' + item.uri)
    }
    if (item.components) {
      route.components = {}
      Object.keys(item.components).forEach(function (key) {
        route.components[key] = () => import('@/views/' + item.components[key])
      })
    }
    const children = item.children
    if (children && children.length !== 0) {
      route.children = traverse(children, [])
    }
    routeTree.push(route)
  })
  return routeTree
}
*/
function AddMenus (menus) {
  if (!menus) return
  const rootMenus = []
  let activeRootMenu = ''
  const setSideBarMenus = {}
  menus.forEach(function (group, index) {
    rootMenus.push({ index: group.index, label: group.label })
    if (index === 0) activeRootMenu = group.index
    setSideBarMenus[group.index] = group.menus
    // if (group.routes) {
    //   store.dispatch('AddRouters', traverse(group.routes))
    //   router.addRoutes(traverse(group.routes))
    // }
  })
  store.dispatch('setRootMenus', rootMenus)
  store.dispatch('setActiveRootMenu', activeRootMenu)
  store.dispatch('setSideBarMenus', setSideBarMenus)
}

function RefreshMenus () {
  const userAccessLevel = store.state.user.userAccessLevel
  axios.get('/menu', {params: { userAccessLevel: userAccessLevel }}).then((response) => {
    AddMenus(response.data)
  }).catch(err => {
    console.error(err)
  })
}

// AddMenus(JSON.parse(sessionStorage.getItem('menus')))

RefreshMenus()

export default {
  addMenus: AddMenus,
  refreshMenus: RefreshMenus
}
