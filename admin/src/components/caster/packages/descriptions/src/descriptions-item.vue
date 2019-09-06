<template>
    <td :colspan="colspan" class="ant-descriptions-item">
      <span class="ant-descriptions-item-label">{{ label }}</span>
      <span class="ant-descriptions-item-content">
        <slot></slot>
      </span>
    </td>
</template>

<script>
export default {
  name: 'DescriptionsItem',
  components: {},
  directives: {},
  props: {
    colspan: {
      type: Number,
      default: 1
    },
    label: String
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
  watch: {}
}
</script>

<style scoped>
  .ant-descriptions-row>th, .ant-descriptions-row>td {
    padding-bottom: 16px;
  }
  .ant-descriptions-item {

  }
  .ant-descriptions-item .ant-descriptions-item-label {
    float: left;
    padding: 0 !important;
  }
  .ant-descriptions-item .ant-descriptions-item-content {
    float: left;
    padding: 0 !important;
  }
  .ant-descriptions-item > span {
    display: inline-block;
  }
  .ant-descriptions-item-content {
    display: table-cell;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
  }
</style>
