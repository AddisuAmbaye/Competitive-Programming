/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let start = 0, end = 0;
    while (end < chars.length) {
        if (chars[end] == chars[end+1]) end++;
        else {
            let len = end-start+1; 
            if (len == 1) {
                start++, end++;
                continue;
            }
            
            chars.splice(start+1, len-1, ...len.toString().split(""));
            end -= len - 1 - len.toString().length; 
            
            start = end; 
            start++, end++; 
        }
    }
    return chars.length;
   
};