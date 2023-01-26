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
var middleNode = function(head) {
    let slow = head, fast = head;
    while (fast !== null) {
        fast = fast.next;
        if (fast == null) break;
        else fast = fast.next;
        
        slow = slow.next;
    }
    return slow;
};