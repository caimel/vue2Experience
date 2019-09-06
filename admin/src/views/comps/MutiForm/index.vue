<template>
  <el-tabs :type="type"
           :value="value"
           :closable="closable"
           :addable="addable"
           :editable="editable"
           :tabPosition="tabPosition"
           :stretch="stretch"
           @tab-click="tabClick">
    <el-tab-pane v-for="(tab) in tabs" :key="tab.name"
                 style="padding-top: 30px"
                 :name="tab.name" :label="$tl(tab.label)" :label-content="tab.labelContent"
                 :closable="tab.closable" :disabled="tab.disabled" :lazy="tab.lazy">
      <component :is="tab.component" v-bind="tab.props"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'index',
  components: {},
  directives: {},
  props: {
    tabPosition: String,
    type: String,
    closable: Boolean,
    addable: Boolean,
    editable: Boolean,
    stretch: Boolean,
    value: String,
    tabs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      activeName: '1'
    }
  },
  computed: {},
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    tabClick (tab, event) {}
  },
  watch: {}
}
</script>

<style scoped>
  .el-tab-pane {
    background-color: #FFFFFF;
  }
</style>
