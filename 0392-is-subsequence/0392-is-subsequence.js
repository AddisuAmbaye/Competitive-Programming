/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    sab = 0
    for(i = 0; i < t.length; i++){
        if(s[sab] == t[i] ){
            sab++
        }
    }
    return sab == s.length
};