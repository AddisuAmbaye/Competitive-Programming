class Solution:
	def searchRange(self, nums: List[int], target: int) -> List[int]:
		return[nums.index(target),len(nums)-nums[::-1].index(target)-1] if target in nums else [-1,-1]