/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    n = piles.length
    m = n/3
    maxSum = 0
    piles.sort((a,b) => a - b)
    while( (n = n - 2) >= m){
        maxSum += piles[n]
        
    }
  return maxSum
};