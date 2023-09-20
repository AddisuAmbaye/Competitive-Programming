# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.res=[]

    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        arr=''
        if not root:
            return []
        self.checkSm(root, arr)
        return self.res
    
    def checkSm(self, node, arr):
        newarr=arr+str(node.val)
        if not node.left and not node.right:
            self.res.append(newarr)
            return
        else:
            newarr=newarr+'->'
            if node.left:
                self.checkSm(node.left, newarr)
            if node.right:
                self.checkSm(node.right, newarr)
        return