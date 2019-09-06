<template>
    <div class="x-info-item">
        <div class="x-info-item__label">{{label}}</div>
        <div class="x-info-item__content">{{content}}</div>
    </div>
</template>

<script>
export default {
  name: 'XInfoItem',
  props: {
    label: String,
    labelWidth: String,
    content: String
  }
}
</script>

<style scoped>
.x-info-item{
  line-height: 30px;
}

.x-info-item__label{
  color: #0074D9;
  width: 80px;
  text-align: left;
  float: left;
  font-size: 16px;
  padding: 0 6px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}
.x-info-item__content{
  position: relative;
  font-size: 14px;
}
</style>
