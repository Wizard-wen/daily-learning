/**
 * 函数防抖
 *
 * 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
 * 这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
 *
 * 场景: 提交按钮，输入框搜索，
 * 按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次
 * 服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词功能类似⽣存环境请⽤lodash.debounce
 */


function debounce(fn, timeout) {
  let timer;
  // 将原本的函数包装在这个函数内
  return function () {
    const context = this;
    // 类数组
    const args = arguments;
    // 如果存在计时，清除计时，重新计数
    if (timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      fn.apply(context, [...args]);
    }, timeout)
  }
}
