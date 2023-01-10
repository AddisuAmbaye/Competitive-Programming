/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {     
    const index = binarySearch(arr, x);
    let left = Math.max(0, index - k);
    let right = Math.min(arr.length - 1, index + k); 
    while (right - left >= k) {
        if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            right--;    
        } else {
            left++;    
        }
    }
    
    const res = [];
    for (let i=left; i <= right; i++) {
        res.push(arr[i]);
    }
    return res;
}
  
function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left)/2);
        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            left = mid + 1;    
        } else {
            right = mid -1;    
        }
    }
    if (right < 0) {
        return 0;
    }
    if (left > arr.length -1) {
        return arr.length -1;    
    }
    return left;
}


