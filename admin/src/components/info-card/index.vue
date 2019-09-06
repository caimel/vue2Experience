<template>
  <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div class="el-card__header" v-if="$slots.header || header" :style="headerStyle">
      <i v-if="prefixIcon" v-show="showPrefixIcon" :class="prefixIcon"></i>
      <slot name="header">{{ header }}</slot>
      <i style="width: 25px;text-align: center;float: right" v-if="suffixIcon" v-show="showSuffixIcon" :class="suffixIcon"></i>
    </div>
    <div class="el-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XInfoCard',
  props: {
    header: {},
    showPrefixIcon: Boolean,
    prefixIcon: String,
    showSuffixIcon: Boolean,
    suffixIcon: String,
    headerStyle: {},
    bodyStyle: {},
    shadow: {
      type: String
    }
  }
}
</script>
<style scoped>
  .el-card {
    height: 100%;
    width: 100%;
    border: 0px;
  }
</style>
