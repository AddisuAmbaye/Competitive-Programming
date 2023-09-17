class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        # Initialize two dummy nodes for 'before' and 'after' lists.
        before, after = ListNode(0), ListNode(0)
        
        # Pointers to help in appending nodes to 'before' and 'after' lists.
        before_curr, after_curr = before, after
        
        # Traverse the original list.
        while head:
            # Compare current node's value with x and append to appropriate list.
            if head.val < x:
                before_curr.next, before_curr = head, head
            else:
                after_curr.next, after_curr = head, head
            head = head.next
        
        # Ensure 'after' list's end points to None.
        after_curr.next = None
        
        # Connect the end of 'before' list to the start of 'after' list.
        before_curr.next = after.next
        
        # Return the merged list.
        return before.next