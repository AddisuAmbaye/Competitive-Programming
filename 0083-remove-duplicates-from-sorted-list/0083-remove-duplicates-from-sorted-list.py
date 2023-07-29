# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def deleteDuplicates(self, head):
        temp = head
        while (temp and temp.next):
            if (temp.next.val == temp.val):
                temp.next = temp.next.next
                continue
            temp = temp.next
        return head
        