/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    count = 0
    j = 0
    i = 0
    g.sort((a,b) => a - b)
    s.sort((a,b) => a - b)
    while(i < s.length){
         if(s[i] >= g[j]){
            count++
            i++
            j++
         }
         else{
           i++  
       }
            
    }
    return count
     
};