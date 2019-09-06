import DialogDrag from './lib/dialog-drag.js'
DialogDrag.install = function (Vue) {
  Vue.directive('dialogDrag', DialogDrag)
}

export default DialogDrag
