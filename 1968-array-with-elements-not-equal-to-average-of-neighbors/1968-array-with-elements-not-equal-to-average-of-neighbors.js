/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
        tmp = 0
        nums.sort((a,b) => a - b)
        for( i = 1; i < nums.length; i += 2){
            tmp = nums[i];
            nums[i] = nums[i - 1];
            nums[i - 1] = tmp;
        }
        return nums;
};