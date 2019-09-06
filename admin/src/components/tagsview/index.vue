<template>
  <div class="tags-view-container">
    <scroll-pane ref='scrollPane' class='tags-view-wrapper'>
        <router-link ref="view" class="tags-view-item"
                     v-for="route in Array.from(visitedViews)"
                     :key="route.path"
                     :class="isActive(route)?'active':''"
                     :to="route.path"
                     @contextmenu.prevent.native="openMenu(route,$event)">
          {{route.meta.label}}
          <span v-if="!route.meta.close" class='el-icon-close' @click.prevent.stop='closeSelectedView(route)'></span>
        </router-link>
    </scroll-pane>
    <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedView(selectedView)">{{ closeBtnText }}</li>
      <li @click="closeOthersViews">{{ closeOthersBtnText }}</li>
      <li @click="closeAllViews">{{ closeAllBtnText }}</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from '@/components/ScrollPane'
export default {
  name: 'XTagsView',
  components: {
    [ScrollPane.name]: ScrollPane
  },
  props: {
    visitedViews: Array,
    closeBtnText: {
      type: String,
      default: 'Close'
    },
    closeOthersBtnText: {
      type: String,
      default: 'CloseOthers'
    },
    closeAllBtnText: {
      type: String,
      default: 'CloseAll'
    },
    depth: Number
  },
  data () {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedView: {}
    }
  },
  computed: {},
  mounted () {
    this.addViews()
  },
  watch: {
    visible (value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    },
    $route () {
      if (this.depth) {
        let matched = this.$route.matched.filter(item => item.name)
        if (matched.length !== this.depth) {
          return
        }
      }
      this.addViews()
      this.moveToCurrentView()
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    generateRoute () {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    isActive (route) {
      return route.path === this.$route.path
    },
    addViews () {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', route)
    },
    moveToCurrentView () {
      const views = this.$refs.view
      this.$nextTick(() => {
        for (const view of views) {
          if (view.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(view.$el)
            break
          }
        }
      })
    },
    closeOthersViews () {
      this.$router.push(this.selectedView)
      this.$store.dispatch('delOthersViews', this.selectedView).then(() => {
        // this.moveToCurrentView()
      })
    },
    closeAllViews () {
      this.$store.dispatch('delAllViews')
      this.$router.push('/')
    },
    closeSelectedView (view) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    openMenu (view, e) {
      this.visible = true
      this.selectedView = view
      this.left = e.clientX
      this.top = e.clientY
    },
    closeMenu () {
      this.visible = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tags-view-container {
    height: 40px;
    .tags-view-wrapper {
      background: #fff;
      height: 40px;
      border-bottom: 1px solid #d8dce5;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
      .tags-view-item {
        display: inline-block;
        position: relative;
        height: 34px;
        line-height: 34px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;
        &:first-of-type {
          margin-left: 15px;
        }
        &:before {
          content: '';
          background: lightgray;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
        &.active {
          background-color: #42b983;
          color: #fff;
          border-color: #42b983;
          /*&::before {*/
            /*content: '';*/
            /*background: #fff;*/
            /*display: inline-block;*/
            /*width: 8px;*/
            /*height: 8px;*/
            /*border-radius: 50%;*/
            /*position: relative;*/
            /*margin-right: 2px;*/
          /*}*/
        }
      }
    }
    .contextmenu {
      margin: 0;
      background: #fff;
      z-index: 100;
      position: absolute;
      list-style-type: none;
      padding: 5px 0;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }
  /*去除router-link 下划线*/
  a {
    text-decoration: none;
  }
  .router-link-active{
    text-decoration: none;
  }
</style>

<style rel="stylesheet/scss" lang="scss">
  //reset element css of el-icon-close
  .tags-view-wrapper {
    .tags-view-item {
      .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transform-origin: 100% 50%;
        &:before {
          transform: scale(.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
</style>
