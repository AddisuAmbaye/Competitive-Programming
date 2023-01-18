/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
  if(k == num.length)   return '0'
    stack = []
  for(i = 0; i < num.length; i++){
       while(stack.length && stack[stack.length - 1] > num[i] && k > 0){
             stack.pop()
             k--
            }
           stack.push(num[i])
           }
           while(k > 0){
              stack.pop()
              k--
              
           } 
         while(stack.length > 1 && stack[0] == 0){
               stack.shift()

         } 
   return stack.join('')
};