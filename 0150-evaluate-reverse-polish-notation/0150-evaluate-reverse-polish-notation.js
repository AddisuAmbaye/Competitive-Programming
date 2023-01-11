/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const stack = [];

  for (const token of tokens) {
    if (Number.isNaN(+token)) {
      const opd2 = stack.pop();
      const opd1 = stack.pop();
      switch (token) {
        case '+':
          stack.push(opd1 + opd2);
          break;
        case '-':
          stack.push(opd1 - opd2);
          break;
        case '*':
          stack.push(opd1 * opd2);
          break;
        case '/':
          stack.push(Math.trunc(opd1 / opd2));
          break;
      }
    } else stack.push(+token);
  }
  return stack.pop();
};