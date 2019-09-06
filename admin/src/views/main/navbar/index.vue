<template>
  <el-menu class="x-navbar-container" mode="horizontal" :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextolor">
    <hamburger class="hamburger-container"  :isActive="hamburgerActive" @toggle-click="(active) => emitEventHandler('hamburger-click',active)"></hamburger>
    <el-menu-item v-for="menu in menus" :key="menu.index" :index="menu.index" style="color: #FFFFFF">{{menu.label}}</el-menu-item>
    <div class="right-menu">
    <screenfull class="right-menu-item"></screenfull>
    <lang-select class="right-menu-item" :languages="languages"></lang-select>
    <lock-screen class="right-menu-item" @lock-screen="() => emitEventHandler('lock-screen')"></lock-screen>
    <el-dropdown class="avatar-container right-menu-item">
      <i class="el-icon-arrow-down el-icon--right"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item style="display:block;">
          <span @click="()=> emitEventHandler('log-out')">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  </el-menu>
</template>

<script>
import ELMenu from 'element-ui/lib/menu'
import Hamburger from '@/components/hamburger'
import Screenfull from '@/components/screenfull'
import LockScreen from '@/components/lockscreen'
import LangSelect from '@/components//LangSelect/index'

export default {
  name: 'XNavBar',
  components: {
    [ELMenu.name]: ELMenu,
    [Hamburger.name]: Hamburger,
    [Screenfull.name]: Screenfull,
    [LockScreen.name]: LockScreen,
    [LangSelect.name]: LangSelect
  },
  directives: {},
  props: {
    hamburgerActive: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextolor: String,
    menus: {
      String: Array,
      default: () => []
    }
  },
  data () {
    return {
      languages: [
        {label: '简中', value: 'zh_CN'},
        {label: 'En', value: 'en'}
      ]
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

<style rel="stylesheet/scss" lang="scss" scoped>
.x-navbar-container {
  height: 62px;
  line-height: 62px;
  border-radius: 0px !important;
  .hamburger-container {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    padding: 0 20px;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
