<template>
  <div class="toolbar__body" :class="{ toolbar__body__hidden: !internalVisible }">
    <div class="toolbar-left__body">
      <slot name="l-left"></slot>
      <template v-for="(item, index) in leftChildren" v-if="index < showChildrenNum">
        <toolbar-item :key="index" :item="item" :emitFunc="emitEventHandler"></toolbar-item>
      </template>
      <el-dropdown v-if="leftChildren.length > showChildrenNum" split-button type="primary">{{ dropDownBtn }}
        <el-dropdown-menu slot="dropdown">
          <template v-for="(item, index) in leftChildren" v-if="index >= showChildrenNum">
            <toolbar-item :key="index" :item="item" :emitFunc="emitEventHandler"></toolbar-item>
          </template>
        </el-dropdown-menu>
      </el-dropdown>
      <slot name="r-left"></slot>
    </div>
    <div class="toolbar-right__body">
      <slot name="l-right"></slot>
      <template v-for="(item, index) in rightChildren">
        <toolbar-item :key="index" :item="item" :emitFunc="emitEventHandler"></toolbar-item>
      </template>
      <slot name="r-right"></slot>
    </div>
  </div>
</template>

<script>
import ToolbarItem from './item'
import methods from '../mixins/methods'
export default {
  name: 'XToolbar',
  components: {
    [ToolbarItem.name]: ToolbarItem
  },
  mixins: [methods],
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    children: {
      type: Array,
      default: function () {
        return []
      }
    },
    showChildrenNum: {
      type: Number,
      default: 4
    },
    // 下拉按钮label
    dropDownBtn: {
      type: String,
      default: '更多'
    },
    remote: Boolean,
    url: String
  },
  data () {
    return {
      display: 'none',
      internalVisible: this.visible,
      internalChildren: this.children
    }
  },
  computed: {
    // 计算 哪些children 订阅了setQuery
    subscribes: function () {
      const l = []
      this.internalChildren.forEach(child => {
        if (child.subscribe && child.id) {
          l.push(child.id)
        }
      })
      return l
    },
    leftChildren: function () {
      let list = []
      this.internalChildren.forEach(function (child) {
        if (!child.position || child.position === 'left') {
          list.push(child)
        }
      })
      return list
    },
    rightChildren: function () {
      let list = []
      this.internalChildren.forEach(function (child) {
        if (child.position === 'right') {
          list.push(child)
        }
      })
      return list
    }
  },
  created () {
    if (this.remote) {
      this.loadChildrenHandler()
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    trigger (ref, method, ...args) {
      // console.log(`Toolbar Trigger：`, ref, method, ...args)
      const comps = this.$refs[ref]
      if (comps && comps.length > 0) {
        const comp = comps[0]
        if (comp) {
          comp[method](...args)
        } else {
          console.log(`This component [${ref}] is not exists`)
        }
      } else {
        console.warn(`This component [${ref}] is not exists`)
      }
    },
    hidden () {
      this.internalVisible = false
      this.emitEventHandler('hidden')
    },
    show () {
      this.internalVisible = true
      this.emitEventHandler('show')
    },
    toggle () {
      if (this.internalVisible) {
        this.hidden()
      } else {
        this.show()
      }
    },
    loadChildrenHandler () {
      let _params = {}
      this.syncHttpGet(this.url, _params, (data, textStatus, jqXHR) => {
        if (data instanceof Array) {
          this.internalChildren = this.internalChildren.concat(data)
        }
      })
    },
    broadcast (query) {
      this.subscribes.forEach(id => {
        this.trigger(id, 'setQuery', query)
      })
    }
  }
}
</script>

<style scoped>
  .toolbar__body {
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    width: 100%;
    /*padding: 5px 0px 5px 5px;*/
  }
  .toolbar__body__hidden {
    display: none;
  }
  .toolbar-left__body {}

  .toolbar-right__body {}
</style>
