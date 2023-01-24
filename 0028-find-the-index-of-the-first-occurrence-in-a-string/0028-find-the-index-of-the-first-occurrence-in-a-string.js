/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let i = 0;
    let s = 0;
    
    while (i < haystack.length - needle.length + 1) {
        if (haystack[i + s] != needle[s]) {
            i++;
            s = 0;
        } else {
            s++;
            if (s == needle.length) return i;
        }
    }
    return -1;
};