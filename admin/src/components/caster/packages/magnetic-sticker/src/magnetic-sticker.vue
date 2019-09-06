<template>
  <div class="magnetic-sticker" :style="{ height: height, width: width }">
    <div ref='content' class="magnetic-sticker__content">
      <div ref="header" class="magnetic-sticker__header font-size-md">
         <slot name="header"></slot>
      </div>
      <div class="magnetic-sticker__body font-size-slg">
        <slot></slot>
      </div>
    </div>
    <div ref="circle" v-if="$slots.icon || icon" class="magnetic-sticker__circle" style="height: 60%">
      <svg viewBox="0 0 100 100">
        <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94" stroke="#F0F2F5" stroke-width="6" fill="none" class="el-progress-circle__track"></path>
      </svg>
      <div class="magnetic-sticker__text">
        <slot name="icon" v-if="$slots.icon"></slot>
        <i :class="icon" v-else></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MagneticSticker',
  components: {},
  directives: {},
  props: {
    height: String,
    width: String,
    icon: String
  },
  data () {
    return {}
  },
  computed: {},
  mounted: function () {
    this.$nextTick(() => {
      this.resize()
    })
    window.addEventListener('resize', () => {
      this.resize()
    })
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    resize () {
      const circle = this.$refs['circle']
      if (circle) {
        const circleHeight = circle.offsetHeight
        circle.style.width = circleHeight + 'px'
        const content = this.$refs['content']
        content.style.width = 'calc(100% - ' + circleHeight * 2 + 'px' + ')'
      }
    }
  },
  watch: {}
}
</script>

<style scoped>
  .magnetic-sticker {
    height: 100%;
    border-radius: 2px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    position: relative;
    display: block;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .magnetic-sticker {
    background-color: #FFFFFF;
  }

  *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .magnetic-sticker .magnetic-sticker__content {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
  }
  .magnetic-sticker .magnetic-sticker__circle {
    transition: all .3s linear;
    position: absolute;
    top: 50%;
    right: 7%;
    /*border-radius: 50%;*/
    /*-moz-border-radius: 50%;*/
    /*-webkit-border-radius: 50%;*/
    /*border: 4px solid #F0F2F5;*/
    transform: translateY(-50%);
    text-align: center;
  }

  .magnetic-sticker__header{
    text-overflow: ellipsis;
    word-wrap: normal;
    overflow: hidden;
    white-space: nowrap
  }

  .magnetic-sticker__text {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    transform: translateY(-50%);
  }

</style>
