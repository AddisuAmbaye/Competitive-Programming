/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
  res = 0;
  n = 1;
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i-1] - prices[i] === 1) {
      n++;
    }
    else {
      res += n * (n+1) / 2;
      n = 1;
    }
  }
  
  return res + n * (n + 1) / 2;
};