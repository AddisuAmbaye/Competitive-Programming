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
    const deleteDuplicates = (head) => {
  let p = head;
  while (p !== null) {
    while (p.next !== null && p.next.val === p.val) p.next = p.next.next;
    p = p.next;
  }
  return head;
};
