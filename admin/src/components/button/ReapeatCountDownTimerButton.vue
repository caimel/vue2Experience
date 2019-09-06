<template>
  <span class="repeat-countdown-timer-button">
    <el-tooltip :disabled="tooltipDisabled" :content="$t('toolbarTooltips.' +tooltipContent)" :placement="tooltipPlacement" :effect="tooltipEffect">
     <el-select style="width: 60px" :type="type" size="mini" v-model="value" placeholder="00">
      <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
      </el-option>
     </el-select>
    </el-tooltip>
    <span>
      <reapeat-count-down-timer :interval="value" :times="-1"
                                @expired="() => emitEventHandler('expired')"></reapeat-count-down-timer>
    </span>
  </span>
</template>

<script>
import ReapeatCountDownTimer from '@/components/countdown-timer/ReapeatCountDownTimer'
export default {
  name: 'ReapeatCountDownTimerButton',
  componentName: 'ReapeatCountDownTimerButton',
  components: {
    [ReapeatCountDownTimer.name]: ReapeatCountDownTimer
  },
  props: {
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String,
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    active_text: String,
    inactive_text: String,
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default () {
        return [
          {value: 0, label: '00'},
          {value: 3, label: '03'},
          {value: 5, label: '05'},
          {value: 10, label: '10'}]
        // {value: 15, label: '15'},
        // {value: 20, label: '20'},
        // {value: 25, label: '25'},
        // {value: 30, label: '30'}]
      }
    }
    // helpVisible: false
  },
  data () {
    return {
      value: 0
    }
  },
  mounted () {
    this.$on('change-tab', () => {
      this.value = 0
    })
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    }
  }
}
</script>
<style>
  .repeat-countdown-timer-button {
    position: relative;
  }
</style>
