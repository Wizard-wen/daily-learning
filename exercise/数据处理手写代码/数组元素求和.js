/**
 * 非扁平数组元素求和
 */


;(() => {
  const arr = [1, 2, 3, [[4, 5], 6], 7, 8, 9]
  /**
   * 非扁平数组元素arr toString之后会变成以,分割的字符串
   * @type {number}
   */
  const flatArr = arr
    .toString()
    .split(',')
    .reduce((total, i) => total += Number(i), 0);
  console.log(arr);
})()

;(() => {
  const arr = [1, 2, 3, [[4, 5], 6], 7, 8, 9]
  const flatArr = arr
    .flat(Infinity)
    .reduce((total, i) => total += Number(i), 0);
  console.log(flatArr);
})()


;(() => {
  // 使用 reduce、concat 和递归展开无限多层嵌套的数组
  const arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

  function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
      : arr.slice();
  }

  flatDeep(arr1, Infinity);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
})()
