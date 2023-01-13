/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
       sum = 0
       minpre_sum = 0 
  for(i = 0; i < nums.length; i++){
      sum += nums[i]
      minpre_sum = Math.min(sum,minpre_sum) 
  }
    return 1 - minpre_sum
};

