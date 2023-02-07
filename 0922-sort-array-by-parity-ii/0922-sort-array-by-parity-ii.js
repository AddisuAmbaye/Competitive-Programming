/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
       i = 0
       j = 1
       n =  nums.length
  while(i < n && j < n ){
    while(nums[i] % 2 == 0 && i < n){
          i += 2
    }
    while(nums[j] % 2 == 1 && j < n ){
          j += 2
    }
  
      if(i < n && j < n ){
          temp = nums[i]
          nums[i] = nums[j]
          nums[j] = temp
      }
  }
      return nums
};