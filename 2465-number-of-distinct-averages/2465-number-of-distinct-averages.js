/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    left = 0
    right = nums.length - 1
    const set = new Set()
    nums.sort((a, b) => a - b)
    while(left < right){
       ave = (nums[left] + nums[right])/2
        set.add(ave)
        left++
        right--
    }
    return set.size
};