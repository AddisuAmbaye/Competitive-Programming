/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
   return delChar(s) == delChar(t)
};

var delChar = (str) => {
    val = []
    for(i = 0; i < str.length; i++){
        if(str[i] == '#'){
          val.pop()
        } 
        else 
          val.push(str[i])
    }
    return val.join('')
}
