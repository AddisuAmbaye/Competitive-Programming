class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        # Approach: 
        # The sum of the elements we choose from the right + elements we choose from the left = x
        # It means that the sum of the elements "in the middle" is equal to sum(all the elements) - x
        # With that in mind, the problem becomes "Largest Subarray with Sum K"
        # This is because to minimize the number of operations "on the sides" we need to maximize the length of the remaining subarray in the middle
        # To do that, we perform a sliding window to get the longest subarray with sum = sum(all the elements) - x
        # The answer will be len(input) - len(longest subarray that we have found)
        
        # init variables
        l, target, maxLen, curSum = 0, sum(nums) - x, -1, 0
        # because we only have positive numbers, sum will never be equal to target in this case
        if target < 0:
            return -1
        # sliding window
        for r in range(len(nums)):
            curSum += nums[r]
            # shrink the windoe while the condition is not valid
            while curSum > target:
                curSum -= nums[l]
                l += 1 
            # try to update the maximum window size if the window is valid
            if curSum == target:
                maxLen = max(maxLen, r - l + 1)
                
        return len(nums) - maxLen if maxLen != -1 else -1
    
        # Space Complexity: O(1)
        # Time Complexity: O(n)	