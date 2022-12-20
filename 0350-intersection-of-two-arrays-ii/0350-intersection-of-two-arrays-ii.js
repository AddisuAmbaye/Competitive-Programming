/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */


var intersect = function(nums1, nums2) {
    let base, sub
    if(nums1.length > nums2.length ) {
        base = nums1
        sub = nums2
    }else {
        base = nums2
        sub = nums1
    }
    let res = [] 
    for( i = 0 ; i < sub.length ; i++){
        if(base.includes(sub[i])){
            res.push(sub[i])
            base[base.indexOf(sub[i])] = null
        }
    }
    return res
};