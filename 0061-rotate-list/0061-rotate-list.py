
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k==0:
            return head
        f = s = head
        count  = 0
        for i in range(k):
            count +=1
            if not f.next:
                f = s
                break
            f = f.next 
        for i in range(k%count):
            f = f.next
        if f == s:
            return f
        while f.next:
            f = f.next
            s = s.next
        temp = s.next
        s.next = None
        f.next = head
        return temp