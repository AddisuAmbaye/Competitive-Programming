
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
  const result = [];
  for(let i = 0; i < l.length; i++) {
    result.push(check(nums, l[i], r[i]));
  }  
  return result;
};

var check = function(nums, left, right) {
  const arr = nums.slice(left, right + 1);
  arr.sort((a, b) => a- b);
  const diff = arr[0] - arr[1];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i - 1] - arr[i] !== diff) {
      return false;
    }
  }
  return true;
}