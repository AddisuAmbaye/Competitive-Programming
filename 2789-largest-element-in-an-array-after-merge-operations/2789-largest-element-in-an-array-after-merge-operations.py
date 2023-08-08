class Solution:
    def maxArrayValue(self, nums: List[int]) -> int: 
        for i in range(len(nums) - 1, 0, -1):
            if nums[i - 1] <= nums[i]:
                nums[i - 1] = nums[i - 1] + nums[i]
        
        return nums[0]
        