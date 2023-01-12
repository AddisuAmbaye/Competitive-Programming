/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped){
      stack = []
      j = 0
    for(i = 0; i < pushed.length; i++){
        stack.push(pushed[i])
        while(stack.length > 0 && stack[stack.length - 1] == popped[j]){
             stack.pop()
             j++  
        }
    } 
    return pushed.length == j
};
