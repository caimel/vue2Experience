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
    <div :style="{ height:height }">
      <router-view name="dialog"/>
    </div>
  </el-dialog>
</template>

<script>
import ElDialog from 'element-ui/lib/dialog'
export default {
  name: 'XRouterViewDialog',
  components: {
    [ElDialog.name]: ElDialog
  },
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
    height: {
      type: String,
      default: '500px'
    },
    beforeOpen: Function
  },
  data () {
    return {
      ref: 'xForm',
      visible: false
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
      this.visible = true
    },
    close () {
      this.visible = false
    }
  }
}
</script>

<style scoped>
  .dialog-container {
    margin-left: 50px;
  }
</style>
