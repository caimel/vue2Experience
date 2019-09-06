<template>
  <!--<router-multi-view view-name="default" morph="transition-group" class="main-view-container" />-->
  <transition name="fade-transform" mode="out-in">
      <!--<keep-alive>-->
        <router-view :key="key"></router-view>
      <!--</keep-alive>-->
   </transition>
</template>

<script>
export default {
  name: 'MainView',
  props: {
    depth: Number,
    minDepth: Number,
    maxDepth: Number
  },
  data () {
    return {
      key: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (val) {
        if (!this.filter()) return
        this.key = val.fullPath
      }
    }
  },
  methods: {
    filter: function () {
      const route = this.$route
      let matched = route.matched.filter(item => item.name)
      if (this.depth) { // depth 匹配
        if (matched.length !== this.depth) {
          return false
        }
      } else if (this.maxDepth) {
        if (matched.length > this.maxDepth) {
          return false
        }
      } else if (this.minDepth) {
        if (matched.length < this.minDepth) {
          return false
        }
      }
      return true
    }
  }
}
</script>

<style scoped>

</style>
