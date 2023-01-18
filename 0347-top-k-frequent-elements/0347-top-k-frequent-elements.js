/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
       map = {}
       count = 0
       stack = []
    for(i = 0; i < nums.length; i++){
        map[nums[i]] = (map[nums[i]] || 0) + 1
    }
    
    nums.sort((a,b) => map[b] - map[a] || b - a)
    arr = [...new Set(nums)]
    for(i = 0; i < k; i++){
       stack[i] = arr[i] 
    }
    return stack
};