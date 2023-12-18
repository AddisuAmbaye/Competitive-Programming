class Solution:
    def comb(self, array, idx, ans, out, target):
        if target == 0:
            ans.append(out.copy())
            return
        if idx == len(array):
            return
        for i in range(idx,len(array)):
            if array[i] > target:
                break
            if i!=idx and array[i] == array[i-1]:
                continue
            out.append(array[i])
            self.comb(array, i+1, ans, out, target-array[i])
            out.pop(-1)
            

    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        ans = []
        self.comb(candidates, 0, ans, [], target)
        return ans