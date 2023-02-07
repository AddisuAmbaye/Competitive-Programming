/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (L) => {
  if (!L) return true;
  let slow = (fast = L);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let firstHalf = L, secondHalf = reverse(slow);
  while (firstHalf && secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
};

const reverse = (L) => {
  let curr = L, prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};