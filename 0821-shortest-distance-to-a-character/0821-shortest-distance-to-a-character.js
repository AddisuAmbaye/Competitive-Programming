/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
      arr = []
      n = s.length
      c_index = -n
    for(i = 0; i < n; i++){
        if(s[i] == c){
            c_index = i
        }
        arr[i] = i - c_index
    }
    for(i = n - 1; i >= 0; i--){
        if(s[i] == c){
            c_index = i
        }
       arr[i] = Math.min(arr[i],Math.abs(i - c_index))
    }
    return arr
};