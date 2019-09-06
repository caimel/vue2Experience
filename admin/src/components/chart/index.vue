<template>
  <ve-chart class="x-chart-container"
            :height="height"
            :width="width"
            :settings="settings"
            :extend="extend"
            :data="internalData"
            :title="title"
            :initOptions="initOptions"
            :tooltipVisible="tooltipVisible"
            :legendVisible="legendVisible"
            :theme="theme"
            :themeName="themeName"
            :judgeWidth="judgeWidth"
            :widthChangeDelay="widthChangeDelay"
            :resizeable="resizeable"
            :cancelResizeCheck="cancelResizeCheck"
            :resizeDelay="resizeDelay"
            :changeDelay="changeDelay"
            :setOptionOpts="setOptionOpts"
            :notSetUnchange="notSetUnchange"
  ></ve-chart>
</template>

<script>
import methods from '../mixins/methods'
export default {
  name: 'XChart',
  mixins: [methods],
  props: {
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: '98%'
    },
    settings: {
      type: Object,
      required: true
    },
    extend: Object,
    columns: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    title: Object,
    initOptions: Object,
    tooltipVisible: {
      type: Boolean,
      default: true
    },
    legendVisible: {
      type: Boolean,
      default: true
    },
    theme: Object,
    themeName: Object,
    judgeWidth: {
      type: Boolean,
      default: false
    },
    widthChangeDelay: {
      type: Number,
      default: 300
    },
    resizeable: {
      type: Boolean,
      default: true
    },
    cancelResizeCheck: {
      type: Boolean,
      default: false
    },
    resizeDelay: {
      type: Number,
      default: 200
    },
    changeDelay: {
      type: Number,
      default: 0
    },
    setOptionOpts: {
      type: [Boolean, Object],
      default: true
    },
    notSetUnchange: Array,
    remote: Boolean,
    url: String,
    params: Object
  },
  data () {
    return {
      internalData: {
        columns: this.columns,
        rows: this.data
      }
    }
  },
  mounted () {
    if (this.remote) {
      this.loadDataHandler({})
    }
  },
  methods: {
    setColumns (columns) {
      this.internalData.columns = columns
    },
    setData (data) {
      this.internalData.rows = data
    },
    setParams (params) {
      this.params = params
    },
    loadDataHandler: function (others) {
      let _params = {}
      if (this.params) Object.assign(_params, this.params)
      if (others) Object.assign(_params, others)
      this.fetchInternal(this.url, 'get', _params).then(response => {
        let result = response.data
        this.internalData.rows = []
        this.dataProcess(result.data, this.internalData.rows)
      })
    },
    dataProcess (data, rows) {
      const len = data.length // 指标数
      const itemsLen = data[0].items.length // 每种指标的长度
      for (let i = 0; i < itemsLen; i++) {
        let row = { }
        for (let j = 0; j < len; j++) {
          const legend = data[j].legend
          const value = data[j].items[i]
          row[this.settings.dimension[0]] = value.key
          row[legend] = value.value
        }
        rows.push(row)
      }
      // console.log(JSON.stringify(rows[0]))
    }
  }
}
</script>

<style scoped>
  .x-chart-container {
    /*width: 100%;*/
    /*height: 100%;*/
    /*padding: 5px 5px 5px 5px;*/
    margin: 10px 10px 10px 10px ;
    background: white;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
</style>
