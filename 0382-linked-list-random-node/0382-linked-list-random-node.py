# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:

    def __init__(self, head: Optional[ListNode]):
        self.l = []
        
        curr = head
        while curr:
            self.l.append(curr.val)
            curr = curr.next
        
    def getRandom(self) -> int:
        return random.choice(self.l)


# Your Solution object will be instantiated and called as such:
# obj = Solution(head)
# param_1 = obj.getRandom()