# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:
        my=set([])
        for i in nums:
            my.add(i)
        curr=head
        # flag=False
        count=0
        while curr!=None:
            flag=False
            while curr!=None and curr.val in my:
                flag=True
                curr=curr.next
            if flag==True:
                count+=1
            if curr!=None and curr.next!=None:
                curr=curr.next
            else:
                break
        return count
