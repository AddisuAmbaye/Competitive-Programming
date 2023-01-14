/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let stack=[];
    for(let i=0;i<prices.length;i++){
       while(stack.length!==0 && prices[stack[stack.length-1]]>= prices[i]){
           let ele = stack.pop();
           prices[ele]-= prices[i];
       }
        stack.push(i);
    }
    return prices;
};
