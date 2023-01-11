/**
 * @param {string} s
 * @return {string}
 */

var reverseParentheses = function(s) {
      
    const inplaceReverse = (arr,start,end)=> arr.slice(0,start).concat(arr.slice(start,end).reverse(),arr.slice(end));
    
    
    let length = s.length;
    if(length==0 || length == 1) return s;
    
    let deque = [];
    let result = "";
    let opBracket = [];
    let arr = s.split("");
    for(let i=0;i<length;i++){
        let val = s.charAt(i);
        if(val == "("){
            opBracket.push(i);
        }
        else if(val == ")"){
            arr = inplaceReverse(arr,opBracket.pop(),i); // 2,7 -> 3,7
        }
    }
    
    return arr.filter(val=>val!=")" && val!="(").join("");
};