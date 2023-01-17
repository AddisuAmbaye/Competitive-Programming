/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    stack = [] 
for(i = 0; i < s.length; i++){
        if(stack.length > 0 && Math.abs(s[i].charCodeAt() - 
        stack[stack.length - 1].charCodeAt()) == 32){
            stack.pop()
        
        }
        else   
          stack.push(s[i])
               }
    return stack.join('')
};