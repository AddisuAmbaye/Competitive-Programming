/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    // skipping duplicates
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
   
      if (s < 0) left++;
  
      else if (s > 0) right--;
    
      else {
        result.push([nums[i], nums[left], nums[right]]);
        
        while (left + 1 < right && nums[left] === nums[left + 1]) left++;
        while (right - 1 > left && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return result;

};