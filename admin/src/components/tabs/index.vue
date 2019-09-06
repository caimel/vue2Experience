<template>
  <div class="x-tabs">
    <!--v-model="activeName"-->
    <el-tabs :type="type" :closable="closable" :addable="addable" :editable="editable" :tabPosition="tabPosition" :stretch="stretch"
             @tab-click="(tab, event) => emitEventHandler('tab-click', tab, event)"
             @tab-remove="(targetName) => emitEventHandler('tab-remove', targetName)"
             @tab-add="() => emitEventHandler('tab-add')"
             @edit="(targetName, action) => emitEventHandler('edit', targetName, action)">
      <el-tab-pane v-for="(item, index) in items" :key="index"
                   :name="item.name" :label="item.label" :label-content="item.labelContent"
                   :closable="item.closable" :disabled="item.disabled" :lazy="item.lazy">
        <template slot="label">
          <slot :name="item.slots.label"></slot>
        </template>
        <slot :name="item.slots.content.slot"></slot>
      </el-tab-pane>
      <slot></slot>
    </el-tabs>
  </div>
</template>

<script>
import ElTabs from 'element-ui/lib/tabs'
import ELTabPane from 'element-ui/lib/tab-pane'
export default {
  name: 'XTabs',
  components: {
    [ElTabs.name]: ElTabs,
    [ELTabPane.name]: ELTabPane
  },
  props: {
    type: String,
    // activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    },
    stretch: Boolean,
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    }
  }
}
</script>

<style scoped>
  .x-tabs {
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
  }
  .el-tabs{
    height: 100%;
  }
</style>
<style>
  .el-tabs__content{
    height: calc(100% - 60px);
  }
  .el-tab-pane{
    height: 100%;
  }
</style>
