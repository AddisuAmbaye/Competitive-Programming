/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums.sort((a, b) => a - b);

  let ans = 1;
  let start = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[end] !== nums[end - 1]) {
      const diff = nums[end] - nums[end - 1];

      let required = diff * (end - start);
      while (required > k) {
        const prevDiff = nums[end - 1] - nums[start];
        k += prevDiff;
        start++;

        required = diff * (end - start);
      }

      k -= required;
    }

    ans = Math.max(ans, end - start + 1);
  }

  return ans;
};