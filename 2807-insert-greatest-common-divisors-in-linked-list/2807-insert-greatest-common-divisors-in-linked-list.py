# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dum_head = head
        
        next = head.next
        
        while next != None:
            new_node = ListNode(math.gcd(head.val, next.val))
            head.next = new_node
            new_node.next = next
            
            head = next
            
            next = next.next
        
        return dum_head