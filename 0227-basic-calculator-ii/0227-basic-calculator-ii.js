/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let num = 0;
  let stack = [];
  let sign = "+"
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      num = num * 10 + Number(s[i]);
    } else if (s[i] != " ") {
      signNum(sign, num);
      sign = s[i];
      num = 0;
    }
  }
  signNum(sign, num);
  return stack.reduce((a, b) => a + b);
  function signNum(sign, num) {
    if (sign == "*") {
      stack.push(stack.pop() * num);
    } else if (sign == "/") {
      stack.push(stack.pop() / num | 0);
    } else if (sign == "-") {
      stack.push(-num);
    } else if (sign = "+") {
      stack.push(+num);
    }
  }
};