class Solution:
    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        def unpack(head):
            cur = tail = head
            while cur:
                if cur.child:
                    start, end = unpack(cur.child)
                    if cur.next: cur.next.prev = end
                    cur.next, start.prev, end.next, cur.child = start, cur, cur.next, None
                    cur = end
                tail = cur
                cur = cur.next
            return (head, tail)

        return unpack(head)[0]