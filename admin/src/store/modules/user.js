import Vue from 'vue'
import Cookies from 'js-cookie'
const user = {
  state: {
    status: '',
    code: '',
    name: '',
    avatar: '',
    introduction: '',
    setting: {
      articlePlatform: []
    },
    userAccessLevel: Cookies.get('userAccessLevel') ? parseInt(Cookies.get('userAccessLevel')) : 0
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_USER_ACCESS_LEVEL: (state, userAccessLevel) => {
      state.userAccessLevel = userAccessLevel
      Cookies.set('userAccessLevel', userAccessLevel)
    }
  },

  actions: {
    setUserAccessLevel ({ commit }, userAccessLevel) {
      Vue.console.log('method: setUserAccessLevel')
      commit('SET_USER_ACCESS_LEVEL', userAccessLevel)
    }
  }
}

export default user
