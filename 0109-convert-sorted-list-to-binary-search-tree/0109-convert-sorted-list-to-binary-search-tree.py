class Solution:
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        def list_to_vine(head):
            size = 0
            curr = root = TreeNode()
            while head:
                curr.right = TreeNode(head.val)
                curr = curr.right
                head = head.next
                size += 1
            return root, size

        def vine_to_tree(root, size):
            leaves = size + 1 - int(2**int(log2(size+1)))
            compress(root, leaves)
            size -= leaves
            while size > 1:
                size //= 2
                compress(root, size)

        def compress(root, count):
            scanner = root
            for _ in range(count):
                child = scanner.right
                scanner.right = child.right
                scanner = scanner.right
                child.right = scanner.left
                scanner.left = child

        root, size = list_to_vine(head)
        vine_to_tree(root, size)
        return root.right