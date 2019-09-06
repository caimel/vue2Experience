<template>
  <div class="square">
      <h1>{{info}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    info: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .square{
    height: 100%;
    width:100%;
    display: flex;
    justify-content:center;
    align-items:Center;
  }
</style>
