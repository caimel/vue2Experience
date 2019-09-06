<template>
  <div class="x-html-panel-container">
    <div v-html="htmlString"></div>
  </div>
</template>

<script>
export default {
  name: 'XHemlPanel',
  components: {},
  directives: {},
  props: {
    htmlString: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.x-html-panel-container{
  height: 100%;
}
</style>
