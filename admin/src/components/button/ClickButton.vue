<template>
  <el-tooltip :disabled="tooltipDisabled" :content="$t('toolbarTooltips.'+tooltipContent)" :placement="tooltipPlacement" :effect="tooltipEffect">
      <el-button :type="type"
                 :icon="icon"
                 :loading="loading"
                 :disabled="disabled"
                 :plain="plain"
                 :round="round"
                 :circle="circle"
                 :size="size"
                 @click="() => emitEventHandler('click')">{{ $label ? $t($label) : label}}
      </el-button>
    </el-tooltip>
</template>

<script>
import ElButton from 'element-ui/lib/button'
export default {
  name: 'ClickButton',
  components: {
    [ElButton.name]: ElButton
  },
  props: {
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
    },
    $label: String,
    // tooltips
    tooltipDisabled: {
      type: Boolean,
      default: true
    },
    tooltipContent: String,
    tooltipPlacement: String,
    tooltipEffect: String
  },
  mounted () {
    this.$on('menu-item-handleClick', () => {
      this.emitEventHandler('click')
    })
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    }
  }
}
</script>
