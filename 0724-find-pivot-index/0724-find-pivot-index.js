/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
            total_sum = 0
        for(i = 0; i < nums.length; i++){
            total_sum += nums[i]
        }
             prefix_sum = 0
        for(i = 0; i < nums.length; i++){

            if(i != 0) prefix_sum += nums[i - 1]

            if(total_sum - prefix_sum - nums[i] == prefix_sum) return i
        }
       return -1 
};