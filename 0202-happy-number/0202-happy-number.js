/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
 while(n !== 1){
        sum = 0
     while(n > 0){
       sum += Math.pow( n % 10,2)
       n = Math.floor(n/10)
     }
    
    if(set.has(sum)){
        return false
    }
    else{
        set.add(sum)
        n = sum
    }
  }
    return true
};