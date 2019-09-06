<template>
  <div class="x-sidebar-container">
    <!--<el-scrollbar wrapClass="scrollbar-wrapper">-->
      <el-menu  mode="vertical"
                class="el-menu-vertical"
                :background-color="backgroundColor"
                :text-color="textColor"
                :active-text-color="activeTextolor"
                :collapse="collapse"
                :default-active="defaultActive">
        <x-sidebar-item :routes="routes"></x-sidebar-item>
      </el-menu>
    <!--</el-scrollbar>-->
  </div>
</template>

<script>
import ELScrollbar from 'element-ui/lib/scrollbar'
import ELMenu from 'element-ui/lib/menu'
import ELMenuItem from 'element-ui/lib/menu-item'
import XSidebarItem from './XSidebarItem'
export default {
  name: 'XSideBar',
  components: {
    [ELScrollbar.name]: ELScrollbar,
    [ELMenu.name]: ELMenu,
    [ELMenuItem.name]: ELMenuItem,
    [XSidebarItem.name]: XSidebarItem
  },
  directives: {},
  props: {
    width: {
      type: String,
      default: '300px'
    },
    defaultActive: {
      type: String,
      default: ''
    },
    backgroundColor: String,
    textColor: String,
    activeTextolor: String,
    collapse: {
      type: Boolean,
      default: false
    },
    routes: {
      type: Array
    }
  },
  data () {
    return {
      internalCollapse: this.collapse
    }
  },
  computed: {},
  methods: {
    triggerCollapse () {
      this.collapse = !this.collapse
    }
  },
  watch: {}
}
</script>

<style scoped>
  .x-sidebar-container{
    height: 100%;
    overflow-y: auto;
  }
  .scrollbar-wrapper {
    overflow-x: hidden!important;
  }
  .el-scrollbar{
    height: 100%;
  }
  .el-menu{
    height: 100%;
    border-right: solid 0px #e6e6e6;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 330px ;
  }

</style>
<style rel="stylesheet/scss" lang="scss">
  .el-scrollbar__view {
    height: 100%;
  }
  /*.el-scrollbar__wrap{*/
    /*overflow: auto;*/
  /*}*/
  /* 修复 x-sidebar-item  添加了div 造成collapse后span 然后会显示的问题*/
  .el-menu--collapse {
    .el-menu-item {
      &>span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
    .el-submenu {
      &>.el-submenu__title {
        &>span {
          height: 0;
          width: 0;
          overflow: hidden;
          visibility: hidden;
          display: inline-block;
        }
      }
    }
  }
</style>
