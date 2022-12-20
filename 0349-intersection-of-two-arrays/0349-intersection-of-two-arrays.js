/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)
    
    if (nums1.size > nums2.size) {
        temp  = nums2
        nums2 = nums1
        nums1 = temp
}
    
    return [...nums1].filter(num => nums2.has(num))
};