<template>
  <div id="app" class="app-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    -moz-box-sizing:border-box;   /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }
  html{
    width: 100%;
    height: 100%;
  }
  body{
    width: 100%;
    height: 100%;
  }
  .app-container {
    width: 100%;
    height: 100%;
    background-color: #f0f2f5
    /*background: darkgray;*/
  }
</style>
