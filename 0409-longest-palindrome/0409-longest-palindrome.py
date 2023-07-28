class Solution:
    def longestPalindrome(self, s: str) -> int:
        res = 0
        for i in collections.Counter(s).values():
            res += i // 2 * 2
        return min(res+1, len(s))