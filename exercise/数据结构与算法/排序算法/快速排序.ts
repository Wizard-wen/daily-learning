/**
 * @author songxiwen
 * @date  2022/1/21 15:00
 */

function swap<T extends { data: number }>(a: T, b: T) {
  const c = a;
  a = b;
  b = c;
}

export function quickSorting<T extends { data: number }>(list: T[], s: number, t: number) {
  let i;
  let
    j;
  if (s < t) {
    i = s;
    j = t + 1;
    while (1) {
      do i += 1;
      while (!(list[s].data <= list[i].data || i === t));
      do j -= 1;
      while (!(list[s].data >= list[j].data || j === s));
      if (i < j) {
        swap<T>(list[s], list[j]);
      } else {
        break;
      }
    }
    swap(list[s], list[j]);
    quickSorting(list, s, j - 1);
    quickSorting(list, j + 1, t);
  }
}
