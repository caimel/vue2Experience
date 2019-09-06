<template>
  <div>
    <div class="in-line-item">
      <el-select v-model="internalModel.day" placeholder="" v-if="visibles.day" class="cron">
        <div slot="prefix" style="color: #409EFF;">{{$t('shortcut-options.Day')}}</div>
        <el-option v-for="item in DAY_RANGE" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="in-line-item">
      <el-select v-model="internalModel.week" placeholder="" v-if="visibles.week" class="cron">
        <div slot="prefix" style="color: #409EFF;">{{$t('shortcut-options.Week')}}</div>
        <el-option v-for="item in WEEK_RANGE" :key="item.value" :label="item.$label ? $t(item.$label) : item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="in-line-item">
      <el-select v-model="internalModel.hour" placeholder="" v-if="visibles.hour" class="cron">
        <div slot="prefix" style="color: #409EFF;">{{$t('shortcut-options.Hour')}}</div>
        <el-option v-for="item in HOUR_RANGE" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="in-line-item">
      <el-select v-model="internalModel.min" placeholder="" v-if="visibles.min" class="cron">
        <div slot="prefix" style="color: #409EFF;">{{$t('shortcut-options.Min')}}</div>
        <el-option v-for="item in MIN_RANGE" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <div class="in-line-item">
      <el-select v-model="internalModel.sec" placeholder="" v-if="visibles.sec" class="cron">
        <div slot="prefix" style="color: #409EFF;">{{$t('shortcut-options.Sec')}}</div>
        <el-option v-for="item in SEC_RANGE" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XCron',
  components: {},
  directives: {},
  props: {
    value: {},
    layout: {
      type: String,
      default: 'day,hour,min,sec'
    },
    // 默认返回7域的cron表达式
    size: {
      type: Number,
      default: 7
    },
    priority: {
      type: String,
      default: 'day'
    }
  },
  data () {
    return {
      DAY_RANGE: this.createSelectRange(1, 32, [{lable: '*', value: '*'}]),
      HOUR_RANGE: this.createSelectRange(0, 24, [{lable: '*', value: '*'}]),
      MIN_RANGE: this.createSelectRange(0, 60, [{lable: '*', value: '*'}]),
      SEC_RANGE: this.createSelectRange(0, 60, [{lable: '*', value: '*'}]),
      WEEK_RANGE: [
        {label: '?', $label: 'shortcut-options.no', value: '?'},
        {label: 'SUN', $label: 'shortcut-options.SUN', value: 'SUN'},
        {label: 'MON', $label: 'shortcut-options.MON', value: 'MON'},
        {label: 'TUE', $label: 'shortcut-options.TUE', value: 'TUE'},
        {label: 'WED', $label: 'shortcut-options.WED', value: 'WED'},
        {label: 'THU', $label: 'shortcut-options.THU', value: 'THU'},
        {label: 'FRI', $label: 'shortcut-options.FRI', value: 'FRI'},
        {label: 'SAT', $label: 'shortcut-options.SAT', value: 'SAT'}
      ],
      internalModel: {}
    }
  },
  computed: {
    visibles: function () {
      const _visibles = {}
      const _layout = this.layout.split(',')
      _layout.forEach((item) => {
        _visibles[item] = true
      })
      return _visibles
    }
  },
  methods: {
    createSelectRange (start, end, prefix, suffix) {
      let values = prefix || []
      for (let i = start; i < end; i++) {
        let label = i
        if (i < 10) { label = '0' + i }
        values.push({label: label, value: i})
      }
      values = values.concat(suffix || [])
      return values
    }
  },
  watch: {
    internalModel: {
      handler: function (val) {
        const sec = val.sec === undefined ? '*' : val.sec
        const min = val.min === undefined ? '*' : val.min
        const hour = val.hour === undefined ? '*' : val.hour
        const month = val.month === undefined ? '*' : val.month
        const day = val.day === undefined ? '*' : val.day
        const week = val.week === undefined ? '?' : val.week
        const year = val.year === undefined ? '*' : val.year
        // 日期和星期互斥
        let _week = this.priority === 'day' ? '?' : week
        let _day = this.priority === 'week' ? _week === '?' ? '*' : '?' : day
        if (this.size === 7) { this.$emit('input', sec + ' ' + min + ' ' + hour + ' ' + _day + ' ' + month + ' ' + _week + ' ' + year) }
        if (this.size === 6) { this.$emit('input', sec + ' ' + min + ' ' + hour + ' ' + _day + ' ' + month + ' ' + _week) }
      },
      immediate: true,
      deep: true
    },
    value: {
      handler: function (val) {
        if (!val) {
          this.internalModel = {
            sec: '*', min: '*', hour: '*', day: '*', month: '*', week: '?', year: '*'
          }
        } else {
          const values = this.value.replace(/^\s+|\s+$/g, '').split(' ') // 去两头空格 按' '空格分割
          this.internalModel = {
            sec: values[0],
            min: values[1],
            hour: values[2],
            day: values[3],
            month: values[4],
            week: values[5],
            year: values[6]
          }
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
  .in-line-item {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    padding-left: 1.5px;
    padding-right: 1.5px;
    float: left;
    width: 120px;
  }
</style>
<style>
  .cron .el-input--prefix .el-input__inner {
    padding-left: 40px !important;
  }
</style>
