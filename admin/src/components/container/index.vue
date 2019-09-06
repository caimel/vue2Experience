<template>
  <el-container>
    <el-main>
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'XContainer',
  components: {},
  directives: {},
  props: {},
  data () {
    return {}
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

<style scoped>
 .el-container {
   height: 100%;
 }
</style>
