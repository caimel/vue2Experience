<template>
  <i :class="name" :style="styles"></i>
</template>

<script>
export default {
  name: 'XIcon',
  props: {
    name: String,
    size: [Number, String],
    color: String
  },
  computed: {
    styles () {
      let style = {}

      if (this.size) {
        style['font-size'] = this.size
      }

      if (this.color) {
        style.color = this.color
      }

      return style
    }
  }
}
</script>

<style scoped>

</style>
