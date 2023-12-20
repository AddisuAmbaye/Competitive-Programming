class Solution:
    def smallestTrimmedNumbers(self, nums: List[str], queries: List[List[int]]) -> List[int]:
        def partition(l: int, r: int, p: int, trim: int) -> int:
            tmp_trim = trim_arr[trim]
            pivot = tmp_trim[p]
            tmp_trim[p], tmp_trim[r] = tmp_trim[r], tmp_trim[p]
            new_p = l
            for i in range(l, r):
                if tmp_trim[i][0] < pivot[0] or \
                   (tmp_trim[i][0] == pivot[0] and tmp_trim[i][1] < pivot[1]):
                    tmp_trim[i], tmp_trim[new_p] = tmp_trim[new_p], tmp_trim[i]
                    new_p += 1
            
            tmp_trim[r], tmp_trim[new_p] = tmp_trim[new_p], tmp_trim[r]
            trim_arr[trim] = tmp_trim

            return new_p
        
        def select(l: int, r: int, k: int, trim: int) -> int:
            if l == r: return l
            p = random.randint(l, r)
            p = partition(l, r, p, trim)
            if p < k: return select(p + 1, r, k, trim)
            if p > k: return select(l, p - 1, k, trim)
            else: return p
        
        m, n = len(nums), len(nums[0])
        trim_arr = [[]]
        for i in range(n):
            trim_arr.append([(int(num[n - i - 1:]), j) for j, num in enumerate(nums)])
        
        res = []
        for k, trim in queries:
            i = select(0, m - 1, k - 1, trim)
            res.append(trim_arr[trim][i][1])
        
        return res