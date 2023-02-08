# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head == None:
            return head
        d= {}
        run = head
        while(run != None):
            value = run.val
            if d.get(value):
                d[value] += 1
            else:
                d[value] = 1
            run = run.next
        value = head.val
        while  d[value] > 1:
            head = head.next
            if head == None:
                return head
            value = head.val
        run = head
        while run and run.next:
            subRun = run
            while subRun.next is not None and d[subRun.next.val] > 1:
                subRun = subRun.next
            run.next = subRun.next
            run = run.next
        return head