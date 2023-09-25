class Solution:
    def simplifyPath(self, path: str) -> str:
        res = []
        for i in path.split('/'):
            if i == '' or i == '.': continue
            elif res != [] and i == "..": res.pop()
            if i != "..": res.append(i)
        return "/"+('/'.join(res))