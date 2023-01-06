/**
 * @param {string} s
 * @return {boolean}
 */
// var validPalindrome = function(s) {
//     i = 0
//     j = s.length - 1
//   while(i < j){
//       if(s[i] !== s[j]){
//          return isPalindrome(s,i++,j) || isPalindrome(s,i,j--);
//       } 
//       i++
//       j--
//    }   
//      return true 
// };
//     let isPalindrome = (str,i,j) => {
//      while(i < j){
//        if(str[i] !== str[j]){
//          return false
//       }    
//        i++
//        j--
//    }
//     return true
//  }
var validPalindrome = function(s) {
    let low = 0, high = s.length-1;
    while (low < high) {
        if (s[low] !== s[high]) {
            return isPalindrome(s, low+1, high) || isPalindrome(s, low, high-1);
        }
        low++, high--;
    }
    return true;
    // T.C: O(N)
    // S.C: O(1)
};

function isPalindrome(str, low, high) {
    while (low < high) {
        if (str[low] !== str[high]) return false;
        low++, high--;
    }
    return true;
}