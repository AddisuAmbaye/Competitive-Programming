from functools import cache

class Solution:
    def integerReplacement(self, n: int) -> int:
        @cache
        def dp(k):
            if k == 1:
                return 0
            if k % 2 == 0:
                return 1 + dp(k // 2)
            return 1 + min(dp(k - 1), dp(k + 1))
        
        return dp(n)