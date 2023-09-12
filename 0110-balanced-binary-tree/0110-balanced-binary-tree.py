class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        R = root
        def helper(curr=root):
            if curr == None:
                return 0
            else:
                left = helper(curr.left)
                right = helper(curr.right)
                if left == -1 or right == -1:
                    return -1
                elif abs(right - left) > 1:
                    return -1
                return 1 + max(left, right)
        return helper() >= 0