const p1 = new Promise(function (resolve, reject) {
  setTimeout((arg) => {
    console.log('exec one');
    resolve(arg);
  }, 500, "one");
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout((arg) => {
    console.log('exec two');
    resolve(arg);
  }, 100, "two");
});

Promise.race([p1, p2]).then(function (value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});
