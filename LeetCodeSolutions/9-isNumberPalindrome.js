/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  if (x < 0) return false;

  let strNum = x.toString();

  for (let i = 0; i < strNum.length / 2; i++) {
    if (strNum[i] !== strNum[strNum.length - i - 1]) {
      return false;
    }
  }
  return true;
};
