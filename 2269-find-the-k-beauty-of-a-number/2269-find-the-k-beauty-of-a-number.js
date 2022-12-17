/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let counter = 0;
    let end = 1;
    let start = 0;
    let bnum = '';
    let strnum = num.toString();
    while(start < strnum.length){
          bnum = bnum.concat(strnum[start]);
          start++;
          if(bnum.length === k && num % bnum === 0){
             counter++;
             start = end;
             end++;
             bnum = '';
            
          }
        else if(num % bnum !== 0 && bnum.length == k){
            start = end;
            end++;
            bnum = ''; 
        }
       
    }
       
return counter; 
       
};