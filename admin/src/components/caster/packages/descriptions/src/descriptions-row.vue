<template>
  <tr class="ant-descriptions-row">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: 'DescriptionsRow',
  components: {},
  inject: ['descriptions'],
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
  provide () {
    return {
      descriptions_row: this
    }
  },
  watch: {}
}
</script>

<style scoped>
  .ant-descriptions-row {
    padding-bottom: 0
  }
  .ant-descriptions-row > td {
    padding-bottom: 16px;
  }
</style>
