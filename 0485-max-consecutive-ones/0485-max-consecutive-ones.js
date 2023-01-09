/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
       max = 0
       count = 0
    for(i = 0; i <= nums.length; i++){
        if(nums[i] == 1){
            count++
        }
        else{
            max = Math.max(max,count)
            count = 0
        }
         
    }
   return max
};