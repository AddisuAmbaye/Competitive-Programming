/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    org =  s.replace(/ /g, "").replace(/[^a-zA-Z0-9// ]/g, '').toLowerCase();
    revs = s.split("").reverse().join("").replace(/ /g, "").replace(/[^a-zA-Z0-9// ]/g, '').   toLowerCase();
    if(revs == org){
        return true;
    }
    else 
      return false;
};