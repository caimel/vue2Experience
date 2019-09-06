<template>
  <div @click="lockScreen">
    <el-tooltip effect="dark" :content="$t('form.Home.'+content)" placement="bottom">
      <x-icon :name="iconName" :size="iconSize" :color="iconColor"></x-icon>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'LockScreen',
  components: {},
  directives: {},
  props: {
    iconName: String,
    iconSize: String,
    iconColor: String,
    content: {
      type: String,
      default: 'Lock_Screen'
    },
    lockingElementId: {
      type: String,
      default: 'lock_screen'
    },
    lockingElementClass: {
      type: String,
      default: 'lock_screen'
    },
    // 动画时间
    transactionSecond: {
      type: Number,
      default: 2
    }
  },
  data: function () {
    return {
      lockScreenSize: 0
    }
  },
  computed: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    createLockingElement () {
      let lockScreenElement
      lockScreenElement = document.getElementById(this.lockingElementId)
      if (!lockScreenElement) {
        lockScreenElement = document.createElement('div')
        lockScreenElement.setAttribute('id', this.lockingElementId)
        lockScreenElement.setAttribute('class', 'lock_screen')
        // lockScreenElement.style.transition = 'all 3s'
        // lockScreenElement.style.position = 'absolute'
        // lockScreenElement.style.left = 0 + 'px'
        // lockScreenElement.style.top = 0 + 'px'
        lockScreenElement.style.zIndex = -1
        lockScreenElement.style.width = document.body.clientWidth + 'px'
        lockScreenElement.style.height = document.body.clientHeight + 'px'
        lockScreenElement.setAttribute('class', this.lockingElementClass)
      }
      let bodys = document.getElementsByTagName('body')
      if (bodys.length > 0) {
        bodys[0].appendChild(lockScreenElement)
      }
    },
    getLockBackSize () {
      let x = document.body.clientWidth
      let y = document.body.clientHeight
      let r = Math.sqrt(x * x + y * y)
      return parseInt(r)
    },
    lockScreen () {
      let lockScreenElement = document.getElementById(this.lockingElementId)
      lockScreenElement.style.zIndex = 1000
      lockScreenElement.style.transition = `all ${this.transactionSecond}s`
      lockScreenElement.style.boxShadow = '0 0 0 ' + this.getLockBackSize() + 'px #667aa6 inset'
      setTimeout(() => {
        this.emitEventHandler('lock-screen')
        lockScreenElement.style.transition = 'all 0s'
        lockScreenElement.style.zIndex = -1
        lockScreenElement.style.boxShadow = ''
      }, 1000 * 0.8)
    }
  },
  mounted () {
    this.createLockingElement()
  },
  watch: {}
}
</script>

<style scoped>
</style>
<style>
  .lock_screen{
    /*transition: all 2s;*/
    /*-moz-transition: all 2s;*/
    /*-webkit-transition: all 2s;*/
    /*-o-transition: all 2s;*/
    position: absolute;
    left:0;
    top: 0;
    z-index: -1;
  }
</style>
