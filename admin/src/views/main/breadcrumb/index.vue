<template>
  <div style="display:block">
  <el-breadcrumb style="display: inline-block;" :separator="separator">
      <el-breadcrumb-item v-for="(item,index)  in items" :key="item.path" v-if='item.meta.label'>
        <span v-if="items.length -1 == index" :style="{color: '#FFFFFF'}">{{  $tl(item.meta.label) }}</span>
        <span v-else :style="{color: '#A6AFBB'}">{{ $tl(item.meta.group) }}</span>
      </el-breadcrumb-item>
  </el-breadcrumb>
  <!--
  <span v-show="showHelp" style="float: right;">
    <i class="el-icon-question" @click="helpVisible = true"></i>
    <el-dialog title="Tips" :visible.sync="helpVisible" width="50%">
      <p>{{help}}</p>
    </el-dialog>
  </span>
  -->
  </div>
</template>

<script>
import ElBreadcrumb from 'element-ui/lib/breadcrumb'
import ElBreadcrumbItem from 'element-ui/lib/breadcrumb-item'
export default {
  name: 'XBreadcrumb',
  components: {
    [ElBreadcrumb.name]: ElBreadcrumb,
    [ElBreadcrumbItem.name]: ElBreadcrumbItem
  },
  props: {
    separator: {
      type: String,
      default: '/'
    },
    refresh: Boolean,
    depth: Number
  },
  data () {
    return {
      items: null,
      showHelp: false,
      helpVisible: false,
      help: ''
    }
  },
  created () {
    this.processBreadcrumb()
  },
  watch: {
    $route () {
      if (this.refresh) {
        this.processBreadcrumb()
      }
    }
  },
  methods: {
    processBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      // const first = matched[0]
      let breadcrumb = []
      if (this.depth && matched.length > this.depth) {
        for (let i = 0; i < this.depth; i++) {
          breadcrumb.push(matched[i])
        }
      } else {
        breadcrumb = [].concat(matched)
      }
      this.items = breadcrumb
      if (this.items && this.items.length > 0) {
        const _r = this.items[this.items.length - 1] // 取最后一个路由
        if (_r.meta && _r.meta.resources && _r.meta.resources.HELP) {
          this.showHelp = true
          this.help = _r.meta.resources.HELP
        } else {
          this.showHelp = false
          this.help = ''
        }
      }
    }
  }
}
</script>
