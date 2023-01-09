/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b) => a - b)
    i = 0
    max = -Infinity
    n = nums.length - 1
    while(i < n){
        max = Math.max(max,nums[i] + nums[n])
        i++
        n--
    }
    return max
};