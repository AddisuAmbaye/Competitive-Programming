/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function(s, k) {
  let left = 0;
  let cur = 0;
  let ans = 0;
  const vowels = 'aeiou';
  for (let right = 0; right < s.length; right++) {
    cur += vowels.includes(s[right]);
    while (left < right && right - left + 1 > k) {
      cur -= vowels.includes(s[left]);
      left++;
    }
    ans = Math.max(ans, cur);
    if (ans === k) return ans;
  }

  return ans;
};