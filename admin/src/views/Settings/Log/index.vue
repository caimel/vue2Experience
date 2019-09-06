<template>
  <x-panel :items="layout">
    <square slot="main" info="系统日志"></square>
  </x-panel>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      layout: [
        {
          gutter: 10,
          style: {
            flex: 1
          },
          equally: true,
          cols: [
            {slot: 'main'}
          ]
        }
      ]
    }
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
</style>
