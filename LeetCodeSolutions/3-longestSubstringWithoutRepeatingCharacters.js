// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * For this problem, we use a moving window approach.
 * Using leftIndex and rightIndex to denote our window size, we shift the window by incrementing
 * the rightIndex as long as there are uniques in the current window.
 * As we move our window, we store characters already seen into a Set datastructure.
 * We keep track of the maximal substring length using a variable.
 *
 * Once we reach a character we have seen, we increment the leftIndex and remove the character at leftIndex from the seen Set.
 *
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let seent = new Set();
  let currentMax = 0;
  let rightIdx = 0;
  let leftIdx = 0;

  while (rightIdx < s.length) {
    if (!seent.has(s[rightIdx])) {
      seent.add(s[rightIdx]);
      currentMax = Math.max(currentMax, rightIdx - leftIdx + 1);
      rightIdx++;
    } else {
      seent.delete(s[leftIdx]);
      leftIdx++;
    }
  }
  return currentMax;
};
