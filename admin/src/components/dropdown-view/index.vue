<template>
  <div class="page-container">
    <slot></slot>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'DropdownView',
  components: {}
}
</script>

<style scoped>
.page-container{
  height: 100%;
  width: 100%;
}
.breadcrumb-container{
  float: left;
}
</style>
