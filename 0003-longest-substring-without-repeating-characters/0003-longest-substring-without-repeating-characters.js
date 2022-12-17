/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   const set = new Set();
   let max = 0;
   let start = 0;
   let end = 0;
   while(end < s.length){
       if(!set.has(s.charAt(end))){
           set.add(s.charAt(end));
           max = Math.max(max,set.size);
           end++;
       }
       else{
           set.delete(s.charAt(start));
           start++;
       }
   }
return max;
};