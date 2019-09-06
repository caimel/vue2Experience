<template>
  <el-dialog :visible.sync="visible"
             :title="title"
             :width="width"
             :fullscreen="fullscreen"
             :top="top"
             :modal="modal"
             :modal-append-to-body="modalAppendToBody"
             :append-to-body="appendToBody"
             :lock-scroll="lockScroll"
             :custom-class="customClass"
             :close-on-click-modal="closeOnClickModal"
             :close-on-press-escape="closeOnPressEscape"
             :show-close="showClose"
             :before-close="beforeClose"
             :center="center"
             @open="() => emitEventHandler('open')"
             @close="() => emitEventHandler('close')"
             @closed="() => emitEventHandler('closed')">
    <x-component-link-tabs ref="tabs" :key="compKey" :style="{height: height}" ></x-component-link-tabs>
  </el-dialog>
</template>

<script>
export default {
  name: 'XDrilldownComponentViewDialog',
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: false
    },

    appendToBody: {
      type: Boolean,
      default: true
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,
    height: String,
    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    beforeOpen: Function,

    component: String,
    compProps: Object
  },
  data () {
    return {
      ref: 'xForm',
      visible: false,
      compKey: 1,
      compPropsNew: Object
    }
  },
  methods: {
    emitEventHandler (event) {
      this.$emit(event, ...Array.from(arguments).slice(1))
    },
    open () {
      // if (typeof this.beforeOpen === 'function') {
      //   this.beforeOpen()
      // }
      this.compKey += 1
      this.visible = true
    },
    close () {
      this.visible = false
    },
    Add_Tab (tab) {
      this.$refs['tabs'].Add_Tab(tab)
    }
  }
}
</script>

<style scoped>
  .dialog-container {
    margin-left: 50px;
  }
</style>
