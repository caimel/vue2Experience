<template>
  <div class="x-badge-trigger-button-container">
    <el-badge :value="value" :max="max" :is-dot="isDot" :hidden="hidden">
      <el-button :type="type"
                 :icon="icon"
                 :loading="loading"
                 :disabled="disabled"
                 :plain="plain"
                 :round="round"
                 :circle="circle"
                 @click="emitEventHandler('click')">{{ label }}
      </el-button>
    </el-badge>
  </div>
</template>

<script>
import ElBadge from 'element-ui/lib/badge'
import ElButton from 'element-ui/lib/button'
export default {
  name: 'XBadgeTriggerButton',
  components: {
    [ElBadge.name]: ElBadge,
    [ElButton.name]: ElButton
  },
  directives: {},
  props: {
    value: {},
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
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
    label: {
      type: String,
      default: ''
    }
  },
  computed: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    }
  },
  watch: {}
}
</script>

<style scoped>
.x-badge-trigger-button-container{
  width: 100%;
}
  .el-badge{
    width: 100%;
  }
  .el-button{
    width: 100%;
  }
</style>
