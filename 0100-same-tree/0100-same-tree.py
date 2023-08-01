# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p is None and q is None:
            return True
        if p is None and q is not None:
            return False
        if q is None and p is not None:
            return False

        def compare(pnode,qnode):
            if pnode.val != qnode.val:
                return False
            if pnode.left is None and pnode.right is None:
                if qnode.left is not None or qnode.right is not None:
                    return False
                
            if pnode.left is not None:
                if qnode.left is None:
                    return False
                if compare(pnode.left,qnode.left) ==False :
                    return False
            
            if pnode.right is not None:
                if qnode.right is None:
                    return False
                if compare(pnode.right,qnode.right) ==False :
                    return False
            return True
        if compare(p,q) is False or compare(q,p) is False:
            return False
        return True