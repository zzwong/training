// https://leetcode.com/problems/two-sum

/**
 * Brute force, naive solution involves nested for loops making runtime O(n^2) with space complexity of O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBrute = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
};

/**
 * A better solution is to make use of a map/dictionary data structure to store the number we are currently iterating on as the key, with the value being the index
 * As we iterate over the numbers, we calculate the number we need to find in the map, ie: target - currentNumber
 *   if we find the value that would add to target sum, then we return the result indices
 *
 * Runtime: O(n), space complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums, target) => {
  let seent = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    // Difference of target and current number is what we need to find in map
    const needToFind = target - currentNum;
    if (seent.hasOwnProperty(needToFind)) {
      return [seent[needToFind], i];
    } else {
      // not in map
      // Add key, current number to our map, with value being the index
      seent[currentNum] = i;
    }
  }
  return [0, 0];
};
