/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = (arr, k, threshold) => {
    let currSum = arr.slice(0,k).reduce((a,c) => a + c, 0)
    let total = currSum / k >= threshold
    for(let i = k; i < arr.length; i++){
        currSum += arr[i] - arr[i-k]
        total += currSum / k >= threshold
    }
    return total
};