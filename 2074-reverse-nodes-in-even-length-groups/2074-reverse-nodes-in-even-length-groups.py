class Solution:

    def getKth(self, cur, k):
        cnt = k
        while cur and cur.next and  k > 0:
            cur = cur.next
            k -= 1
        return [cur, cnt - k]

    def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        groupPrev = dummy

        k = 1
        while groupPrev and groupPrev.next:
            kth, newK = self.getKth(groupPrev, k)
            k = newK
            groupNext = kth.next

            if k%2:
                groupPrev = kth
            else:
                prev, curr = kth.next, groupPrev.next
                while curr and curr != groupNext:
                    # storing for future use
                    nxt = curr.next

                    # pointing to the prev ptr
                    curr.next = prev

                    # updating the ptr's
                    prev = curr
                    curr = nxt
                tmp = groupPrev.next
                groupPrev.next = kth
                groupPrev = tmp
            k += 1
        return dummy.next