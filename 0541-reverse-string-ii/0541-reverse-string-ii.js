/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function(s, k) {
    
    if (s.length >= k && s.length <= 2*k) {
        return s.slice(0,k).split("").reverse().join("") + s.slice(k);
    }
    else {
        let result = "";
        for (i = 0; i < s.length; i++) {
            if (i % (2*k) == 0) {
                result += s.slice(i, i+k).split("").reverse().join("");
                i += k - 1;
            }
            else result += s[i];
        }
        return result;
    }
};