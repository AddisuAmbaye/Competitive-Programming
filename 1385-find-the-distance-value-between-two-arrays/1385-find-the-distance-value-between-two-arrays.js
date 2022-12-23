/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    
    let ans = arr1.length;
    for(i = 0; i < arr1.length; i++){
        for(j = 0; j < arr2.length; j++){
            if(Math.abs(arr1[i] - arr2[j]) <= d){
                ans--
                break
            }
        }
    }
    return ans
};