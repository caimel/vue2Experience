import Vue from 'vue'
import Cookies from 'js-cookie'

const LANNGUAGE_KEY = 'x-language'
const app = {
  state: {
    language: Cookies.get(LANNGUAGE_KEY),
    i18n: {},
    isLogin: Cookies.get('isLogin') === 'true'
    // sessionToken: Cookies.get(SESSION_TOKEN_KEY)
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set(LANNGUAGE_KEY, language)
    },
    SET_I18N: (state, language, message) => {
      state.i18n[language] = message
    },

    SET_LOGIN: (state, isLogin) => {
      Cookies.set('isLogin', isLogin)
      state.isLogin = isLogin
    }
  },
  actions: {
    setLanguage ({ commit }, language) {
      Vue.console.log('method: setLanguage')
      commit('SET_LANGUAGE', language)
    },
    setI18n ({ commit }, language, message) {
      Vue.console.log('method: setI18n')
      commit('SET_I18N', language, message)
    },
    setLogin ({ commit }, isLogin) {
      commit('SET_LOGIN', isLogin)
    },
    setInstanceOptions ({ commit }, instanceOptions) {
      commit('SET_INSTANCE_OPTIONS', instanceOptions)
    },
    setCurrentInstance ({ commit }, current) {
      commit('SET_CURRENT_INSTANCE', current)
    }
  }
}

export default app
