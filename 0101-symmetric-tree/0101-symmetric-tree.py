class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None:
            return True
        
        return self.rootReflection(root.left, root.right)

    
    def rootReflection(self, leftroot, rightroot):
        
        if leftroot and rightroot:
            return leftroot.val==rightroot.val and self.rootReflection(leftroot.left, rightroot.right) and self.rootReflection(leftroot.right, rightroot.left)
        
        return leftroot==rightroot