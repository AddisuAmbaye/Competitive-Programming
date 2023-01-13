/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
          map = new Map()
          prefix_sum = 0
          count = 0
          map.set(0,1)

    for(i = 0; i < nums.length; i++){
        prefix_sum += nums[i]
     if(map.has(prefix_sum - k)){
         count += map.get(prefix_sum - k)
     }
      map.set(prefix_sum,map.get(prefix_sum) + 1 || 1)
     
    }
   return count 
};