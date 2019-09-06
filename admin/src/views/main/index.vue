<template>
  <div class="main">
    <el-menu  :unique-opened="unique" mode="vertical" class="el-menu-vertical" :collapse="!active" :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextColor" >
      <el-menu-item index="0" style="height: 62px; line-height: 62px;font-size: 18px; font-weight:800;">
        <div style="color: #FFF;">
          <span style="display: inline-block !important;">{{ $t('login.title') }}</span>
        </div>
      </el-menu-item>
      <x-menu-item :menus="sideBarNavMenus" :max-lable-length="25"></x-menu-item>
    </el-menu>
    <div class="main-container">
      <!-- NavMenu -->
      <el-menu mode="horizontal" :default-active="activeRootMenu" @select="selectRootMenu" :background-color="backgroundColor" :text-color="textColor" :active-text-color="activeTextColor">
        <div class="left-menu">
          <span class="left-menu-item">
            <hamburger :isActive="active" @toggle-click="toggleSideBar"></hamburger>
          </span>
          <span class="left-menu-item">
             <x-breadcrumb refresh separator="〉" :depth="2"></x-breadcrumb>
          </span>
        </div>
        <div class="right-menu">
          <span class="right-menu-item">
               <screenfull  :style="{color: textColor}" iconName="el-icon-cn-quanping" :iconSize="iconSize"></screenfull>
           </span>
          <!--<span class="right-menu-item">-->
              <!--<lang-select :style="{color: textColor}" :iconSize="iconSize" :languages="system.langs"></lang-select>-->
          <!--</span>-->
          <!--<span class="right-menu-item">-->
             <!--<lock-screen :style="{color: textColor}" iconName="el-icon-cn-suoding" :iconSize="iconSize" @lock-screen="handleLockScreen"></lock-screen>-->
          <!--</span>-->
          <el-dropdown class="right-menu-item" trigger="click">
             <span class="el-dropdown-link">
               <i class="el-icon-cn-morentouxiang" :style="{color: textColor,fontSize: iconSize,padding: '0 2px'}"></i>
               <span :style="{color: textColor}">{{$t('main.user_settings')}}</span><i class="el-icon-arrow-down el-icon--right"></i>
             </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item style="display:block;">
                <span @click="logOut">{{$t('main.sign_out')}}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!--<el-menu-item v-for="menu in topNavMenus" :key="menu.index" :index="menu.index">{{menu.label}}</el-menu-item>-->
      </el-menu>
      <!--<x-tags-view :visitedViews="visitedViews" :depth="2"></x-tags-view>-->
      <!--<x-breadcrumb style="margin-left: 10px;margin-right: 10px; padding: 10px" refresh separator="〉" :depth="2"></x-breadcrumb>-->
      <div class="main-view-container">
        <main-view :max-depth="2"></main-view>
        <!--<tabs-view :max-depth="2"/>-->
      </div>
    </div>
  </div>
</template>

<script>
// import XSideBar from './sidebar'
// import XNavBar from './navbar'
import XTagsView from '@/components/tagsview'
import MainView from './MainView'

import XMenuItem from './sidebar/XMenuItem'
import XBreadcrumb from './breadcrumb'
import Hamburger from '@/components/hamburger'
import Screenfull from '@/components/screenfull'
import LockScreen from '@/components/lockscreen'
import LangSelect from '@/components//LangSelect/index'
import { mapGetters } from 'vuex'
export default {
  name: 'Main',
  components: {
    [XMenuItem.name]: XMenuItem,
    [MainView.name]: MainView,
    [XTagsView.name]: XTagsView,
    [Hamburger.name]: Hamburger,
    [Screenfull.name]: Screenfull,
    [LockScreen.name]: LockScreen,
    [LangSelect.name]: LangSelect,
    [XBreadcrumb.name]: XBreadcrumb
  },
  data: function () {
    return {
      active: true,
      backgroundColor: '#30465D',
      textColor: '#92A3B5',
      activeTextColor: '#FFFFFF',
      iconSize: '18px',
      iconColor: '#92A3B5',
      unique: true
    }
  },
  computed: {
    ...mapGetters(['system', 'ApiProject', 'routers', 'isLogin', 'rootMenus', 'activeRootMenu', 'sideBarMenus']),
    // cachedViews () {
    //   return this.$store.state.views.cachedViews
    // },
    // visitedViews () {
    //   return this.$store.state.views.visitedViews
    // },
    sideBarNavMenus () {
      return this.sideBarMenus[this.activeRootMenu]
    },
    topNavMenus () {
      return this.rootMenus
    }
  },
  methods: {
    toggleSideBar (active) {
      this.active = active
    },
    logOut () {
      const vm = this
      vm.$store.dispatch('setLogin', false).then(
        response => {
          vm.$axios.get('/' + vm.ApiProject + '/logout').then((response) => {})
          location.reload()
        })
      sessionStorage.removeItem('menus')
    },
    selectRootMenu (index) {
      this.$store.dispatch('setActiveRootMenu', index)
    }
  },
  watch: {}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/assets/styles/mixin.scss';
  /*滚动条
  ::-webkit-scrollbar
  {
    display: none;
  }
  */
  .main {
    @include clearfix;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
  .main-container{
    flex: 1;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    overflow: auto;
  }
  .main-view-container{
    /*flex:1;*/
    overflow: auto;
    height: 100%;
    padding: 16px;
  }

  .left-menu {
    float: left;
    height: 60px;
    line-height: 60px;
    height: 100%;
    &:focus {
      outline: none;
    }
    .left-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
  }
  .right-menu {
    float: right;
    height: 60px;
    line-height: 60px;
    height: 100%;
    margin-right: 15px ;
    &:focus{
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 5px 0 5px;
    }
    .right-menu-item:hover {
        background-color: rgb(38,56,74);
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
</style>

<style  rel="stylesheet/scss" lang="scss">
  /*
  .el-menu-vertical::-webkit-scrollbar {
      display: none;
  }
  */
  /* 修复 x-sidebar-item  添加了div 造成collapse后span 然后会显示的问题  */
  .el-menu--collapse {
    .el-menu-item {
      &>span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
      /*&>div {*/
        /*height: 0;*/
        /*width: 0;*/
        /*overflow: hidden;*/
        /*!*visibility: hidden;*!*/
        /*display: none;*/
        /*font-size: 16px;*/
        /*-webkit-transform: scale(0.5);*/
        /*transform: scale(0.5);*/
      /*}*/
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
    .logo {
      display: inline-block !important;
      height: 0;
      width: 0;
      font-size: 18px;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }

  /*.el-menu--horizontal>.el-menu-item.is-active {*/
     /*border-bottom: 4px solid #009EFB !important;*/
  /*}*/

</style>
