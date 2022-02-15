/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *
 * 将字符串按照z字形排列，然后按行打印出来
 *
 * a   e
 * b d f
 * c   g
 * 打印: aebdfcg
 */

function convert(s: string, numRows: number) {
  if (numRows == 1)
    return s;
  const len = Math.min(s.length, numRows);
  // 建立一个数组长度为字符串长度
  const rows = Array(len).fill('');
  let loc = 0;
  // 标识位，标识当前是向下还是向右
  let down = false;
  for (const c of s) {
    // 拼接同行字符
    rows[loc] += c;
    if (loc == 0 || loc === numRows - 1)
      down = !down;
    loc += down ? 1 : -1;
  }
  let ans = '';
  for (const row of rows) {
    ans += row;
  }
  return ans;
}
