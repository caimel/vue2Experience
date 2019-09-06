import Vue from 'vue'
import { routes } from '@/router'

const router = {
  state: {
    routers: routes,
    needUpdateRoutes: true // 刷新页面时，需要重新add Routes
  },
  mutations: {
    SET_ROUTERS: (state, _routes) => {
      state.routers = routes.concat(_routes)
    },
    ADD_ROUTERS: (state, _routes) => {
      state.routers = state.routers.concat(_routes)
    },
    SET_NEED_UPDATE_ROUTES: (state, needUpdateRoutes) => {
      state.needUpdateRoutes = needUpdateRoutes
    }
  },
  actions: {
    AddRouters ({ commit }, routes) {
      Vue.console.log('method: AddRouters')
      return new Promise(resolve => {
        commit('ADD_ROUTERS', routes)
        resolve()
      })
    },
    SetNeedUpdateRoutes ({ commit }, needUpdateRoutes) {
      Vue.console.log('method: SetNeedUpdateRoutes')
      return new Promise(resolve => {
        commit('SET_NEED_UPDATE_ROUTES', needUpdateRoutes)
        resolve()
      })
    }
  }
}

export default router
