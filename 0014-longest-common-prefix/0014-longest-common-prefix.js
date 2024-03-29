/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        if (strs.length === 0) {return ""}

    if (strs.length === 1) {return strs[0]}
    
    // set a variable prefix equal to empty string
    let prefix = ""
    
    for (let i = 0; i < strs[0].length; i++) {
    
        for (let j = 1; j < strs.length; j++) {
    
            if (strs[j][i] === strs[0][i]) {
                continue
            } else {
                return prefix
            }
        }
   
        prefix += strs[0][i]
    }
    
    return prefix
 
};
    
    