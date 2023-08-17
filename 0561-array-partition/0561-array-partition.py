class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        # nums.sort()
        # s=0
        # for i in range(0,len(nums),2):
        #     s+=min(nums[i],nums[i+1])
        # return s
        return sum(sorted(nums)[::2])