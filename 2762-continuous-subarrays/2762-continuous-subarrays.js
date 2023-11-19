const continuousSubarrays = function(nums) {
    const map = new Map();
    let res = 0;
    for (let l = 0, r = 0; r < nums.length; ++r) {
        map.set(nums[r], (map.get(nums[r]) || 0) + 1);
        let keys = [...map.keys()];
        let min = Math.min(...keys);
        let max = Math.max(...keys);
        while (max - min > 2) {
            map.set(nums[l], map.get(nums[l]) - 1);
            if (map.get(nums[l]) === 0) map.delete(nums[l]);
            keys = [...map.keys()];
            min = Math.min(...keys);
            max = Math.max(...keys);
            ++l;
        }
        res += r - l + 1;
    }
    return res;    
};