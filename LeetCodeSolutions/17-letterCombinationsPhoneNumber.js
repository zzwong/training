const m = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  if (digits.length <= 0) {
    return [];
  }
  let combs = m[digits[0]].map(x => x);
  let i = 1;
  console.log(combs);
  let recurseCombs = function(digits, i, combs) {
    if (i === digits.length) return combs;
    let newCombs = [];

    for (let j = 0; j < combs.length; j++) {
      m[digits[i]].forEach(l => newCombs.push(combs[j] + l));
    }

    return recurseCombs(digits, ++i, newCombs);
  };
  return recurseCombs(digits, i, combs);
};
