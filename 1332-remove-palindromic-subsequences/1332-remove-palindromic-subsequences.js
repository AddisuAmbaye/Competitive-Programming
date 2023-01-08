/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if(isPalindrome(s)){
        return 1
    }
    else{
        return 2
    }
};
 const isPalindrome = (s) => {
    i = 0
    n = s.length
   while(i < n){
      if(s[i] != s[n - 1]){
         return false
      }
      i++
      n--
   }
  return true
 }
