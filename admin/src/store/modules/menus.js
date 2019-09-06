import Vue from 'vue'
import Cookies from 'js-cookie'
const menus = {
  state: {
    rootMenus: [],
    activeRootMenu: Cookies.get('activeRootMenu'),
    sideBarMenus: {}
  },
  mutations: {
    SET_ROOT_MENUS: (state, rootMenus) => {
      state.rootMenus = rootMenus
      sessionStorage.setItem('rootMenus', JSON.stringify(rootMenus))
    },
    SET_ACTIVE_ROOT_MENU: (state, activeRootMenu) => {
      state.activeRootMenu = activeRootMenu
      Cookies.set('activeRootMenu', activeRootMenu)
    },
    SET_SIDE_BAR_MENUS: (state, sideBarMenus) => {
      state.sideBarMenus = sideBarMenus
      sessionStorage.setItem('sideBarMenus', JSON.stringify(sideBarMenus))
    }
  },
  actions: {
    setRootMenus ({ commit }, rootMenus) {
      Vue.console.log('method: setRootMenus')
      commit('SET_ROOT_MENUS', rootMenus)
    },
    setActiveRootMenu ({ commit }, activeRootMenu) {
      Vue.console.log('method: setActiveRootMenu')
      commit('SET_ACTIVE_ROOT_MENU', activeRootMenu)
    },
    setSideBarMenus ({ commit }, activeRootMenu) {
      Vue.console.log('method: setSideBarMenus')
      commit('SET_SIDE_BAR_MENUS', activeRootMenu)
    }
  }
}

export default menus
