# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next: return head
        tail = head; tail2 = head2 = head.next
        curr = tail2.next; is_odd = True
        while curr: 
            if is_odd: 
                tail.next = curr
                tail = curr
                is_odd = False
            else:
                tail2.next = curr
                tail2 = curr
                is_odd = True
            curr = curr.next
        tail.next = head2; tail2.next = None
        return head