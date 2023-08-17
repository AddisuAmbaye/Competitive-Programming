class Solution:
    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        return list(zip(*['*'.join(''.join(sorted(c)[::-1]) for c in ''.join(row).split('*')) for row in box[::-1]]))