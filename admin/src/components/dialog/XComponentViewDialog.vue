<template>
  <el-dialog :visible.sync="visible"
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
      <template slot="title">
        <span class="el-dialog__title">{{ title }}</span>
        <button
          type="button"
          class="el-dialog__headerbtn"
          style="right: 30px;"
          @click="fullscreen = !fullscreen">
          <i :class="[ 'el-dialog__fullscreen', 'el-icon', fullscreen ? 'el-icon-material-fullscreenexit': 'el-icon-material-fullscreen']"></i>
        </button>
      </template>
      <component :style="{height: height}" :key="compKey" :is="component" v-bind="compProps" @component-link ="() => emitEventHandler('component-link')"  @dialog-close = "visible=false"></component>
  </el-dialog>
</template>

<script>
import ElDialog from 'element-ui/lib/dialog'
export default {
  name: 'XComponentViewDialog',
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
    height: String,

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
      fullscreen: false
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
    }
  }
}
</script>

<style scoped>
  .dialog-container {
    margin-left: 50px;
  }
</style>
