/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((a, b) => {
        if (a.length > b.length) return 1;
        if (b.length > a.length) return -1;
        return a === b ? 0 : a > b ? 1 : -1;
    });
    return nums[nums.length - k];
};