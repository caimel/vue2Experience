<template>
  <count-down-timer :deadline="deadline" :stop="internalStop"  @expired="expired"></count-down-timer>
</template>

<script>
import CountDownTimer from './CountDownTimer'
import moment from 'moment'
export default {
  name: 'ReapeatCountDownTimer',
  componentName: 'ReapeatCountDownTimer',
  components: {
    [CountDownTimer.name]: CountDownTimer
  },
  props: {
    interval: Number, // 间隔 second
    times: {
      type: Number,
      default: 1
    }
    // auto: Boolean
  },
  data () {
    return {
      deadline: undefined,
      currentTimes: 0,
      internalStop: true,
      running: false
    }
  },
  created () {
    this.deadline = '1900-01-01 00:00:00'
    // this.stopForced()
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    initDeadline () {
      if (!this.running) return
      if (this.times > this.currentTimes) {
        this.stop()
        return
      }
      this.currentTimes += 1
      const t = new Date()
      const s = t.getTime()
      t.setTime(s + this.interval * 1000)
      this.deadline = moment(t).format('YYYY-MM-DD HH:mm:ss')
    },
    start () {
      this.internalStop = false
      this.running = true
      this.currentTimes = 0
      this.initDeadline()
      this.emitEventHandler('start')
    },
    stop () {
      this.running = false
      this.emitEventHandler('stop')
    },
    stopForced () {
      this.internalStop = true
      this.running = false
      this.emitEventHandler('stop-forced')
    },
    expired () {
      if (this.internalStop) return
      this.initDeadline()
      this.start()
      this.emitEventHandler('expired')
    }
  },
  watch: {
    interval (val) {
      if (val === 0) {
        this.stopForced()
      } else {
        this.start()
      }
    }
  }
}
</script>

<style scoped>

</style>
