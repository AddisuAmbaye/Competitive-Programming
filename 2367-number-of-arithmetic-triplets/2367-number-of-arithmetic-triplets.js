/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    count = 0
    const set = new Set(nums)
    for(i = 0; i < nums.length; i++){
        
        if(set.has(nums[i] + diff) && set.has(nums[i] + 2*diff)){
            count++
        }
    }
    return count
};