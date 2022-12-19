/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0, right = s.length - 1;

  while (left < right) {
  
      [s[right],s[left] ]= [s[left],s[right]]

    left++
    right--
  }
    return s
};