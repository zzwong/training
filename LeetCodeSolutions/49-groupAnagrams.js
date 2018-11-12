/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  let anagrams = {};

  for (let str of strs) {
    const sorted = str
      .split('')
      .sort()
      .join('');
    if (anagrams.hasOwnProperty(sorted)) {
      anagrams[sorted].push(str);
    } else {
      anagrams[sorted] = [str];
    }
  }

  return Object.values(anagrams);
};
