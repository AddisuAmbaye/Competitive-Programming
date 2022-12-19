/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   const arr = []
const set1 = new Set()
const map = new Map()
    for(i = 0; i < nums1.length; i++){
       
        set1.add(nums1[i])
    }
    for(j = 0; j < nums2.length; j++){
       
        map.set(j,nums2[j])
    }
    n = map.size - 1
    while(n >= 0){
       if(set1.has(map.get(n)) && arr.includes(map.get(n)) == false){
          arr.push(map.get(n))
          
    }
       n--
  }
    return arr
};