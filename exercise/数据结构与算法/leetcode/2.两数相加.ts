/**
 * @author songxiwen
 * @date  2022/1/24 10:39
 */

class ListNode {
  val: number

  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let move = head;
  let currentValue = 0;
  while (l1 || l2) {
    const v1 = l1.val ?? 0;
    const v2 = l2.val ?? 0;
    const sum = currentValue + v1 + v2;

    currentValue = (sum / 10);
    let newNode;
    if (sum > 10) {
      newNode = new ListNode(sum % 10);
    } else {
      newNode = new ListNode(sum);
    }
    move.next = newNode;
    //
    move = newNode;
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  // 如果sum仍大于0应该再开一个新的节点
  return head;
}
