<template>
  <div class="ant-descriptions">
    <div class="ant-descriptions-title">{{title}}</div>
    <div class="ant-descriptions-view">
      <table>
        <tbody>
          <slot></slot>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Descriptions',
  components: {},
  directives: {},
  props: {
    title: String
  },
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
      descriptions: this
    }
  },
  watch: {}
}
</script>

<style scoped>
  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .ant-descriptions-title {
    margin-bottom: 20px;
    color: rgba(0,0,0,0.85);
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
  }
  .ant-descriptions-view {
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
  }
  .ant-descriptions-view table {
    width: 100%;
    table-layout: fixed;
  }
  table {
    border-collapse: collapse;
  }

</style>
