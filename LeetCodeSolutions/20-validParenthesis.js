// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const leftStack = [];

  for (let c of s) {
    if (['(', '{', '['].includes(c)) {
      leftStack.push(c);
    } else {
      if (c === ')') {
        if (leftStack.pop() !== '(') {
          return false;
        }
      }
      if (c === ']') {
        if (leftStack.pop() !== '[') {
          return false;
        }
      }
      if (c === '}') {
        if (leftStack.pop() !== '{') {
          return false;
        }
      }
    }
  }
  return leftStack.length == 0;
};
