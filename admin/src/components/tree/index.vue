<template>
  <div class="x-tree-container">
    <el-input
      class="el-transfer-panel__filter"
      v-model="query"
      size="mini"
      :placeholder="placeholder"
      @mouseenter.native="inputHover = true"
      @mouseleave.native="inputHover = false"
      v-if="filterable">
      <i slot="prefix"
         :class="['el-input__icon', 'el-icon-' + inputIcon]"
         @click="clearQuery"
      ></i>
    </el-input>
    <el-tree :ref="ref"
             :class="{'only-leaf-show-checkbox': onlyLeafShowCheckbox}"
             :data="internalData"
             :empty-text="emptyText"
             :props="props" :node-key="nodeKey"
             :show-checkbox="showCheckbox"
             :accordion="accordion"
             :draggable="draggable"
             :allow-drag="allowDrag"
             :allow-drop="allowDrop"
             :highlight-current="highlightCurrent"
             :check-strictly="checkStrictly"
             :render-after-expand="renderAfterExpand"
             :render-content="renderContent"
             :default-expand-all="defaultExpandAll"
             :expand-on-click-node="expandOnClickNode"
             :check-on-click-node="checkOnClickNode"
             :auto-expand-parent="autoExpandParent"
             :default-expanded-keys="defaultExpandedKeys"
             :default-checked-keys="defaultCheckedKeys"
             :indent="indent"
             :lazy="lazy"
             :load="load"
             :filter-node-method="filterNodeMethod ? filterNodeMethod : defaultFilterNodeMethod"
             @node-click="(nodeData,node,vueComponent)=>emitEventHandler('node-click',nodeData,node,vueComponent)"
             @node-contextmenu="(event,nodeData,node,vueComponent)=>emitEventHandler('node-contextmenu',event,nodeData,node,vueComponent)"
             @check-change="(nodeData, checked, hasChildrenChecked)=>emitEventHandler('check-change',nodeData,checked,hasChildrenChecked)"
             @check="(nodeData,checkedObject)=>check(nodeData,checkedObject)"
             @current-change="(nodeData, node)=>emitEventHandler('current-change',nodeData,node)"
             @node-expand="()=>emitEventHandler('node-expand')"
             @node-collapse="()=>emitEventHandler('node-collapse')"
             @node-drag-start="()=>emitEventHandler('node-drag-start')"
             @node-drag-enter="()=>emitEventHandler('node-drag-enter')"
             @node-drag-leave="()=>emitEventHandler('node-drag-leave')"
             @node-drag-over="()=>emitEventHandler('node-drag-over')"
             @node-drag-end="()=>emitEventHandler('node-drag-end')"
             @node-drop="()=>emitEventHandler('node-drop')"></el-tree>
  </div>
</template>

<script>
import ElTree from 'element-ui/lib/tree'
import methods from '../mixins/methods'
export default {
  name: 'XTree',
  components: {
    [ElTree.name]: ElTree
  },
  mixins: [methods],
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    onlyLeafShowCheckbox: Boolean, // 仅让leaf 展示checkbox
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      default () {
        return {
          children: 'children',
          label: 'label',
          icon: 'icon',
          isLeaf: 'leaf',
          disabled: 'disabled'
        }
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 16
    },
    remote: {
      type: Boolean,
      default: false
    },
    async: Boolean,
    url: String,
    value: {},
    filterable: Boolean,
    placeholder: String
  },
  data () {
    return {
      ref: 'tree',
      internalData: this.data,
      query: '',
      inputHover: false
    }
  },
  computed: {
    inputIcon () {
      return this.query.length > 0 && this.inputHover
        ? 'circle-close'
        : 'search'
    }
  },
  mounted: function () {
    if (this.remote) {
      let _params = {}
      if (this.async) {
        this.fetchInternal(this.url, 'get', _params).then(response => {
          let result = response
          if (result) {
            this.internalData = result.data.data
          }
        })
      } else {
        this.syncHttpGet(this.url, _params, (data, textStatus, jqXHR) => {
          this.internalData = data.data
        })
      }
    }
  },
  methods: {
    check (nodeData, checkedObject) {
      this.$emit('input', checkedObject.checkedKeys)
      this.emitEventHandler('check', nodeData, checkedObject)
    },
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    setCheckedNodes (nodes) {
      this.$refs[this.ref].setCheckedNodes(nodes)
    },
    getCheckedNodes () {
      return this.$refs[this.ref].getCheckedNodes()
    },
    setCheckedKeys (keys) {
      this.$refs[this.ref].setCheckedKeys(keys)
    },
    getCheckedKeys () {
      return this.$refs[this.ref].getCheckedKeys()
    },
    clearQuery () {
      if (this.inputIcon === 'circle-close') {
        this.query = ''
      }
    },
    defaultFilterNodeMethod (value, data, node) {
      if (!value) return true
      // return data.label.indexOf(value) !== -1
      return data.label.toLowerCase().indexOf(value.toLowerCase()) !== -1 // 忽略大小写
    }
  },
  watch: {
    value (value) {
      this.setCheckedKeys(value)
    },
    query (val) {
      this.$refs[this.ref].filter(val)
    }
  }
}
</script>

<style scoped>
.x-tree-container{
  height: 100%;
  width: 100%;
  background-color: white;
}
</style>
<style lang="scss">
  .only-leaf-show-checkbox {
    .el-tree-node {
      .is-leaf + .el-checkbox .el-checkbox__inner {
        display: inline-block;
      }
      .el-checkbox__input>.el-checkbox__inner{
        display: none;
      }
    }
  }
</style>
