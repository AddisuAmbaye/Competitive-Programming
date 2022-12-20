/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


function intersect(nums1, nums2) {
    const map = {}, res = [];
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] == null ? map[nums1[i]] = 1 : map[nums1[i]]++;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]]-- > 0) {
            res.push(nums2[i]);
        }
    }
    return res;
}
