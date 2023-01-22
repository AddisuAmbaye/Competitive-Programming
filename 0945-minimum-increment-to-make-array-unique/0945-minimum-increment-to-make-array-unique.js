/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let count = [], moves = 0;
    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        if (count[num]) count[num] += 1; 
        else count[num] = 1;
    }
    
    for (let i = 0; i < count.length; i++) {
        let freq = count[i];
        if (freq >= 2) {
            count[i] = 1;
            if (count[i+1]) count[i+1] += freq-1;
            else count[i+1] = freq-1;
            moves += freq-1;
        }
    }
    return moves;
  
}