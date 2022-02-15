(() => {
  const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
  Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
})()

;(() => {
  const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];



  function uniqueArray(array) {
    let map = {};
    let res = [];
    for (var i = 0; i < array.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(map, [array[i]])) {
        map[array[i]] = 1;
        res.push(array[i]);
      }
    }
    return res;
  }
  console.log(uniqueArray(array)); // [1, 2, 3, 5, 9, 8]
})()
