import Vue from 'vue'
import request from './request'
import $ from 'jquery'
export default {
  methods: {
    fetchInternal (url, method, params) {
      const config = {
        url: url,
        method: method
      }
      if (method === 'post' || method === 'put') {
        config.data = params
      } else {
        config.params = params
      }
      return request(config)
    },
    delegateMethod (ref, method, ...args) {
      const comp = this.$refs[ref]
      if (!comp) {
        Vue.util.warn(`Cannot call [${name}] before the chart is initialized. Set prop [options] first.`, this)
        return
      }
      return comp[method](...args)
    },
    syncHttpGet (url, data, successFun, errorFun) {
      $.ajax({
        url: url,
        type: 'GET',
        async: false,
        data: data,
        timeout: 1000 * 3,
        dataType: 'json',
        success: successFun,
        error: function (xhr, textStatus) {}
      }
      )
    }
  }
}
