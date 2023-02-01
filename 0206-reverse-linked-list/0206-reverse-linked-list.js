/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  function reverse(cur = head, pre = null) {
    if (!cur) return pre;
    const next = cur.next;
    cur.next = pre;
    return reverse(next, cur);
  }
  return reverse();
};