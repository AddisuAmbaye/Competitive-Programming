class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        arr = []
        def order(root):
            if root is None: return None
            for i in root.children:
                order(i)    
            arr.append(root.val)
        order(root)
        return arr