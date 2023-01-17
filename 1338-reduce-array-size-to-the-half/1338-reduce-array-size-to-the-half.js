/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
        n = arr.length
        map = {}
    for (let i = 0; i < arr.length; i++){
     
    map[arr[i]] = (map[arr[i]] || 0) + 1
     
    }

        sum = 0
        count = 1
    arr.sort((a,b) => map[b] - map[a] || b - a)
    arr_set = [...new Set(arr)]
    for(i = 0; i < arr_set.length; i++){
    sum += map[arr_set[i]]
    if(sum >= n/2){
        break
      }
    count++
    }
  return count
};