class Solution:
    head = None
    def flatten(self, root: TreeNode) -> None:
        def revPreOrder(node: TreeNode) -> None:
            if node.right: revPreOrder(node.right)
            if node.left: revPreOrder(node.left)
            node.left, node.right, self.head = None, self.head, node
        if root: revPreOrder(root)