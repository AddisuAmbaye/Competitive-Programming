/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
     let map = new Map()
     stack = []
     for(i = 0; i < nums2.length; i++){
        while(stack.length > 0 && nums2[i] > stack[stack.length - 1]){
            map.set(stack.pop(),nums2[i])
        }
        stack.push(nums2[i])
     }
     for (let i = 0; i < nums1.length; i++) {
          nums1[i] = map.get(nums1[i]) || -1
      }
      return nums1;
};