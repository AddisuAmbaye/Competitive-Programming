class Solution:
    def canJump(self, nums: List[int]) -> bool:
        r = farthest = 0
        while r <= farthest:
            if farthest >= len(nums) - 1:
                return True
            farthest = max(farthest, r + nums[r])
            r += 1
        return False