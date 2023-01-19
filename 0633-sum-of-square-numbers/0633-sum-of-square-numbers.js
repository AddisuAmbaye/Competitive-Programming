/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
   if(c == 0) return true
   for(i = 0; i*i < c; i++){
     left = c - i*i
     if(Math.sqrt(left) % 1 == 0){
         return true
     }
   } 
   return false
};