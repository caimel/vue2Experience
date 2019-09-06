<template>
  <v-chart :theme="theme"
           :initOptions="initOptions"
           :options="_options"
           :group='group'
           :autoResize="autoResize"
           :watchShallow="watchShallow"></v-chart>
</template>

<script>
// var DEFAULT_COLORS = ['#19d4ae', '#5ab1ef', '#fa6e86', '#ffb980', '#0067a6', '#c4b4e4', '#d87a80', '#9cbbff', '#d9d0c7', '#87a997', '#d49ea2', '#5b4947', '#7ba3a8'];
import moment from 'moment'
import ECharts from 'vue-echarts/components/ECharts'
export default {
  name: 'VChartWrapper',
  components: {
    'v-chart': ECharts
  },
  props: {
    options: Object,
    theme: {
      type: [String, Object],
      default: 'infographic'
    },
    initOptions: Object,
    group: String,
    autoResize: Boolean,
    watchShallow: Boolean,
    labelMap: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    _options: function () {
      const opts = this.options
      opts.tooltip = opts.tooltip ? opts.tooltip : {}
      opts.tooltip.formatter = opts.tooltip.formatter ? opts.tooltip.formatter : this.tooltipFormatter
      opts.legend = opts.legend ? opts.legend : {}
      opts.legend.formatter = opts.legend.formatter ? opts.legend.formatter : this.legendFormatter
      return opts
    }
  },
  methods: {
    tooltipFormatter: function (params, ticket, callback) {
      this.$emit('tooltip-formatter', params)
      let html = ''
      if (params.length > 0) {
        const axisValues = []
        for (let i = 0; i < params.length; i++) {
          const axisValue = moment(params[i].axisValue * 1000).format('YYYY-MM-DD HH:mm')
          if (!axisValues.contain(axisValue)) {
            axisValues.push(axisValue)
            html += axisValue
            html += '<br>'
          }
          const seriesName = params[i].seriesName
          const seriesLabel = this.labelMap[seriesName] == null ? seriesName : this.labelMap[seriesName]
          const seriesValue = typeof params[i].value === 'object' ? params[i].value[seriesName] : params[i].value[1]
          html += params[i].marker + seriesLabel + '&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;' + seriesValue + '<br>'
        }
      }
      return html
    },
    legendFormatter: function (name) {
      return this.labelMap[name] === null ? name : this.labelMap[name]
    }
  },
  watch: {}
}
</script>

<style scoped>

</style>
