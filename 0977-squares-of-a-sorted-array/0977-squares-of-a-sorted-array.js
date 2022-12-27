/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(i = 0; i < nums.length; i++){
        nums[i] = Math.pow(nums[i],2)
    }
   return nums.sort((a,b) => a - b)
};