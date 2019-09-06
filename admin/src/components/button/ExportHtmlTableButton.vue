<template>
  <el-button :type="type"
             icon="el-icon-cn-shangchuandaochu"
             :loading="loading"
             :disabled="disabled"
             :plain="plain"
             :round="round"
             :circle="circle"
             :size="size"
             v-export-html-table="exportParms">
  </el-button>
</template>

<script>
export default {
  name: 'ExportHtmlTableButton',
  components: {},
  directives: {},
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
    exportParms: Object
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>

</style>
