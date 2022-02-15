/**
 * throttle n.节流阀 v.扼杀 压制，使截流
 *
 * 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，
 * 如果在同一个单位时间内某事件被触发多次，只有一次能生效。
 * 节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
 *
 * 拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动
 * 缩放场景：监控浏览器resize
 * 动画场景：避免短时间内多次触发动画引起性能问题
 */


function debounce(fn, timeout) {
  let timer;
  return function () {
    if (timer) {
      if (new Date().getTime() - timer > timeout) {
        // timer = undefined
        fn.call(this, arguments)
        timer = undefined;
      }
    } else {
      timer = new Date().getTime()
    }
  }
}

// 函数节流的实现;
function throttle(fn, delay) {
  let curTime = Date.now();

  return function() {
    let context = this,
      args = arguments,
      nowTime = Date.now();

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  };
}

