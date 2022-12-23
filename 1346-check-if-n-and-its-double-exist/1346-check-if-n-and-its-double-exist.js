/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    arr.sort((a,b) => b - a)
       for(i = 0; i < arr.length; i++){
           for(j = i + 1; j < arr.length; j++){
               if(arr[i] == 2 * arr[j] || 2 *arr[i] == arr[j]){
                   return true
               }
          }
      } 
    return false
};