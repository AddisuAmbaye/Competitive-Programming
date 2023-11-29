class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        #atmost(sum=goal) - atmost(sum=goal-1)
        return self.countSubarrays(nums,goal)-self.countSubarrays(nums,goal-1)

    def countSubarrays(self,nums,target):
        l=0
        count=0
        preSum=0
        if target<0:
            return 0
        for r in range(len(nums)):
            preSum+=nums[r]
            while preSum>target:
                preSum-=nums[l]
                l+=1
            count+=(r-l+1)
        return count