/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

var nextLargerNodes = function(head) {
    let stack = [], res = [], i = 0;
    while (head !== null) {
        while (stack.length > 0 && stack[stack.length-1][0] < head.val) {
            let idx = stack.pop()[1];
            res[idx] = head.val;
        }
        stack.push([head.val, i]);
        i++;
        head = head.next;
    }
    while (stack.length > 0) {
        res[stack.pop()[1]] = 0;
    }
    return res;
   
}