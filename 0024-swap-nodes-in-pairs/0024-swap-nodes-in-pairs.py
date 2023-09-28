# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next 

class Solution:
    def swapPairs(self,head:Optional[ListNode])->Optional[ListNode]:
        if not head or not head.next:
            return head

        head.next.next,head.next,head=head,self.swapPairs(head.next.next),head.next 
        return head   