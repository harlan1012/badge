/**
 * @author dfc
 * @description 处理弹窗滚动穿透问题
 * @example
 * import {  ModalHelper } from '@/utils'
 * 弹窗出来执行
 * ModalHelper.afterOpen()
 * 弹窗关闭执行
 * ModalHelper.beforeClose()
 *
 */

export const ModalHelper = (function (bodyCls) {
  let scrollTop
  return {
    afterOpen: function () {
      scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop || document.documentElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = -scrollTop + 'px'
    },
    beforeClose: function () {
      document.body.classList.remove(bodyCls)
      document.scrollingElement.scrollTop = scrollTop
      document.body.scrollTop = scrollTop
      document.documentElement.scrollTop = scrollTop
    },
  }
})('modal-open')
