/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return null;
    
    let head;
    let tail
    
    let p1 = l1;
    let p2 = l2;
    
    while (p1 && p2) {
        if (p1.val < p2.val) {
            if (tail) tail = tail.next = new ListNode(p1.val);
            else tail = head = new ListNode(p1.val);
            
            p1 = p1.next
        } else {
            if (tail) tail = tail.next = new ListNode(p2.val);
            else tail = head = new ListNode(p2.val);
            
            p2 = p2.next
        }
    }
    
    while (p1) {
        if (tail) tail = tail.next = new ListNode(p1.val);
            else tail = head = new ListNode(p1.val);
        p1 = p1.next
    }
    
    while (p2) {
        if (tail) tail = tail.next = new ListNode(p2.val);
            else tail = head = new ListNode(p2.val);
        p2 = p2.next
    }
    
    return head;
};