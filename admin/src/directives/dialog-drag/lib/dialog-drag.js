'use strict'
/**
 *  el-dialog-drag
 *  el-diaglog 拖拽
 * @type {{directiveName: string, bind: ElDialogDrag.bind}}
 *  el-dialog 默认使用 margin : 0 auto 50px;
 *  有bug 勿用
 */
const ElDialogDrag = {
  directiveName: 'DrialogDrag',
  bind: function bind (el, binding, vnode, oldVnode) {
    const dialogHeader = el.querySelector('.el-dialog__header')
    dialogHeader.style.userSelect = 'none'
    dialogHeader.style['-ms-user-select'] = 'none'
    dialogHeader.style['-moz-user-select'] = 'none'
    dialogHeader.style.cursor = 'move' // 显示移动光标
    const dragDom = el.querySelector('.el-dialog')
    // ie 使用currentStyle Chrome 、firefox 使用window.getComputedStyle 获取 原有属性
    // const style = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
    // dialogHeader.addEventListener('mousedown', (e) => {
    //   const disX = e.clientX - dialogHeader.offsetLeft
    //   const disY = e.clientY - dialogHeader.offsetTop
    //
    //   let styL, styT
    //   // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
    //   if (style.left.includes('%')) {
    //     styL = +document.body.clientWidth * (+style.left.replace(/%/g, '') / 100)
    //     styT = +document.body.clientHeight * (+style.top.replace(/%/g, '') / 100)
    //   } else {
    //     styL = +style.left.replace(/px/g, '')
    //     styT = +style.top.replace(/px/g, '')
    //   }
    //   // document.onmousemove = function (e) {
    //   //   // 通过事件委托，计算移动的距离 （开始拖拽至结束拖拽的距离）
    //   //   const l = e.clientX - disX
    //   //   const t = e.clientY - disY
    //   //
    //   //   let finallyL = l + styL
    //   //   let finallyT = t + styT
    //   //
    //   //   // 边界值判定 注意clientWidth scrollWidth区别 要减去之前的top left值
    //   //   // dragDom.offsetParent表示弹窗阴影部分
    //   //   if (finallyL < 0) {
    //   //     // finallyL = 0
    //   //   } else if (finallyL > dragDom.offsetParent.clientWidth - dragDom.clientWidth - dragDom.offsetParent.offsetLeft) {
    //   //     finallyL = dragDom.offsetParent.clientWidth - dragDom.clientWidth - dragDom.offsetParent.offsetLeft
    //   //   }
    //   //
    //   //   if (finallyT < 0) {
    //   //     // finallyT = 0
    //   //   } else if (finallyT > dragDom.offsetParent.clientHeight - dragDom.clientHeight - dragDom.offsetParent.offsetLeft) {
    //   //     (
    //   //       finallyT = dragDom.offsetParent.clientHeight - dragDom.clientHeight - dragDom.offsetParent.offsetLeft
    //   //     )
    //   //   }
    //   //
    //   //   // 移动当前元素
    //   //   // dragDom.style.marginLeft = '0px'
    //   //   // dragDom.style.marginTop = '0px'
    //   //   dragDom.style.left = `${finallyL}px`
    //   //   dragDom.style.top = `${finallyT}px`
    //   //
    //   //   // 将此时的位置传出去
    //   //   // binding.value({x:e.pageX,y:e.pageY})
    //   // }
    //   // document.onmouseup = function (e) {
    //   //   document.onmousemove = null
    //   //   document.onmouseup = null
    //   // }
    // })
    dragDom.offsetX = 0
    dragDom.offsetY = 0

    let move = function (e) {
      const offset_range = [dragDom.offsetParent.clientWidth - dragDom.clientWidth - dragDom.offsetParent.offsetLeft, dragDom.offsetParent.clientWidth - dragDom.clientWidth - dragDom.offsetParent.offsetTop]
      let finnalX = e.pageX - dragDom.offsetX
      let finnalY = e.pageY - dragDom.offsetY

      if (Math.abs(finnalX) > offset_range[0]) {
        finnalX = finnalX > 0 ? offset_range[0] : 0 - offset_range[0]
      }
      if (Math.abs(finnalY) > offset_range[1]) {
        finnalY = finnalY > 0 ? offset_range[1] : 0 - offset_range[1]
      }
      dragDom.style.marginLeft = '0px'
      dragDom.style.marginTop = '0px'
      dragDom.style.left = finnalX + 'px'
      dragDom.style.top = finnalY + 'px'
    }
    let up = function () {
      removeEventListener('mousemove', move)
      removeEventListener('mouseup', up)
    }
    let down = function (e) {
      dragDom.offsetX = (e.pageX - dragDom.offsetLeft)
      dragDom.offsetY = (e.pageY - dragDom.offsetTop)

      addEventListener('mousemove', move)
      addEventListener('mouseup', up)
    }
    dialogHeader.addEventListener('mousedown', down)
  }
}

export default ElDialogDrag
