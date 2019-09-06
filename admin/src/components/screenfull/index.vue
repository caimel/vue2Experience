<template>
  <div @click='click'>
    <el-tooltip effect="dark" :content="$t('form.Home.'+content)"  placement="bottom">
      <x-icon :name="iconName" :size="iconSize" :color="iconColor"></x-icon>
    </el-tooltip>
  </div>
</template>

<script>
import ELToolTip from 'element-ui/lib/tooltip'
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  components: {
    [ELToolTip.name]: ELToolTip
  },
  props: {
    iconName: String,
    iconSize: String,
    iconColor: String,
    content: {
      type: String,
      default: 'Screenfull'
    }
  },
  data () {
    return {
      isFullscreen: false
    }
  },
  methods: {
    click () {
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>
