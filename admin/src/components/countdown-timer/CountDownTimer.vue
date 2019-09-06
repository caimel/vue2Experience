<template>
    <span class="countdown-timer-container">
      <!--<li v-if="days > 0">-->
        <!--<p class="digit">{{ days | twoDigits }}</p>-->
        <!--<p class="text">{{ days > 1 ? 'days' : 'day' }}</p>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p class="digit">{{ hours | twoDigits }}</p>-->
        <!--<p class="text">{{ hours > 1 ? 'hours' : 'hour' }}</p>-->
      <!--</li>-->
      <!--<li>-->
        <!--<p class="digit">{{ minutes | twoDigits }}</p>-->
        <!--<p class="text">min</p>-->
      <!--</li>-->
      <span>
        <p class="digit">{{ seconds | twoDigits }}s</p>
        <!--<p class="text">Sec</p>-->
      </span>
    </span>
</template>

<script>
let interval = null
export default {
  name: 'CountDownTimer',
  props: {
    deadline: {
      type: String
    },
    stop: {
      type: Boolean
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
      date: null,
      diff: 0
    }
  },
  created () {
    this.init()
  },
  destroyed () {
    clearInterval(interval)
  },
  computed: {
    seconds () {
      return Math.trunc(this.diff) % 60
    }
    // minutes () {
    //   return Math.trunc(this.diff / 60) % 60
    // },
    // hours () {
    //   return Math.trunc(this.diff / 60 / 60) % 24
    // },
    // days () {
    //   return Math.trunc(this.diff / 60 / 60 / 24)
    // }
  },
  watch: {
    deadline (val, oldVal) {
      this.init()
    },
    stop (val) {
      this.init()
    },
    now (value) {
      this.diff = this.date - this.now
      if (this.diff <= 0 || this.stop) {
        // if (this.diff <= 0) { this.diff = 0 }
        this.diff = 0
        // Remove interval
        clearInterval(interval)
        this.emitEventHandler('expired')
      }
    }
  },
  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    init () {
      if (!this.deadline) {
        throw new Error("Missing props 'deadline' or 'end'")
      }
      let endTime = this.deadline
      this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000)
      if (!this.date) {
        throw new Error("Invalid props value, correct the 'deadline' or 'end'")
      }
      interval = setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
      }, 1000)
    }
  }
}
</script>

<style>
  .countdown-timer-container {
    padding: 0;
    margin: 0;
  }
  .countdown-timer-container span {
    /*display: inline-block;*/
    display: inline;
    margin: 0 0;
    text-align: center;
    /*position: relative;*/
    position: absolute;
    top: 5px;
    right: 90px;
  }
  .countdown-timer-container span p {
    margin: 0;
  }
  .countdown-timer-container span:after {
    content: ":";
    position: absolute;
    top: 0;
    right: -13px;
    font-size: 32px;
  }
  .countdown-timer-container span:first-of-type {
    margin-left: 0;
  }
  .countdown-timer-container span:last-of-type {
    margin-right: 0;
  }
  .countdown-timer-container span:last-of-type:after {
    content: "";
  }
  .countdown-timer-container .digit {
    /*font-size: 32px;*/
    color: #409EFF;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0;
  }
  .countdown-timer-container .text {
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: 10px;
  }
</style>
