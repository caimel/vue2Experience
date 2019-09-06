import Vue from 'vue'
import VueAxiosPlugin from 'vue-axios-plugin'
import {Message} from 'element-ui'
import store from '../store'

Vue.use(VueAxiosPlugin, {
  withCredentials: true, // 允许携带cookie信息
  // crossDomain: true, // cross 跨域
  // request interceptor handler
  timeout: 1000 * 5, // request timeout
  reqHandleFunc: config => {
    return config
  },
  reqErrorFunc: error => {
    // 处理请求异常
    Message({ message: error.message, type: 'error', duration: 5 * 1000 })
    return Promise.reject(error)
  },

  // response interceptor handler
  resHandleFunc: response => {
    // 处理服务器处理异常消息
    if (response.data && response.data.errMsg) {
      Message({ message: response.data.errMsg, type: 'error', duration: 5 * 1000 })
      return
    } else if (response.data && response.data.code) {
      Message({
        dangerouslyUseHTMLString: true,
        message: 'E' + response.data.code + '</br>' + response.data.errorMessage,
        type: 'error',
        duration: 5 * 1000
      })
      return
    }
    return response
  },
  //  处理通讯异常(!200)
  resErrorFunc: error => {
    // if (!error.response) {
    //   store.dispatch('setLogin', false).then(
    //     response => {
    //       location.reload()
    //     })
    //   return
    // }
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 302:
          break
        case 400 :
          Message({
            message: error.response.data ? error.response.data.message : 'Unknown mistake!',
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 401:
          Message({
            message: error.response.data ? error.response.data.errorMessage : 'Unknown mistake!',
            type: 'error',
            duration: 5 * 1000
          })
          store.dispatch('setLogin', false).then(
            response => {
              location.reload()
            })
          break
        case 403:
          Message({
            message: 'error:' + error.response.status + '\n' + error.response.data.message || 'Resource not available！',
            type: 'error',
            duration: 5 * 1000})
          break
        case 404:
          Message({message: error.response.data.message || 'Resource does not exist！', type: 'error', duration: 5 * 1000})
          break
        case 405:
          Message({message: 'error:' + error.response.status + '\n' +
            error.response.data.error,
          type: 'error',
          duration: 5 * 1000})
          break
        case 422:
          Message({
            message: error.response.data.message || 'Unknown mistake!',
            type: 'error',
            duration: 5 * 1000})
          break
        case 500:
          Message({
            message: 'error:' + error.response.status + '\n' + error.response.data.message,
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 504:
          Message({message: 'Request timed out！', type: 'error', duration: 5 * 1000})
          break
        default:
          Message({
            message: error.response.data ? error.response.data.errorMessage : 'Unknown mistake!',
            type: 'error',
            duration: 5 * 1000
          })
          break
      }
    }
    return Promise.reject(error)
  }
})
