/**
 * O(n * mlogm) solution using sort
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

/**
 * A better solution is to use hash instead of sort compute as the key
 *    - anagrams should have the same hash
 *    - by suppressing the input to be lowercase alphabet, we can then prototype a solution that uses array of counts
 *        where each element in the array corresponds to the count of the letter as it appears in the word
 *
 * This is essentially doing O(m) amount of work for m equal to length of the word
 *  the runtime then should be O(n*m)
 */
const fasterGroupAnagrams = strs => {
  let anagrams = {};

  const getHash = word => {
    let charCount = new Array(26).fill(0);
    for (let c of word) {
      charCount[c.charCodeAt() - 'a'.charCodeAt()] += 1;
    }
    return charCount.join();
  };

  for (let str of strs) {
    const hash = getHash(str);
    if (anagrams.hasOwnProperty(hash)) {
      anagrams[hash].push(str);
    } else {
      anagrams[hash] = [str];
    }
  }
  return Object.values(anagrams);
};

String.prototype.isAnagram = function(otherString) {
  console.log(this);
  if (this.length !== otherString.length) return false;
  let charCount = {};

  for (let c of this) {
    if (charCount.hasOwnProperty(c)) {
      charCount[c] += 1;
    } else {
      charCount[c] = [1];
    }
  }

  for (let c of otherString) {
    if (!charCount.hasOwnProperty(c)) {
      return false;
    } else {
      charCount[c] -= 1;
    }
  }
  return Object.values(charCount).every(x => x === 0);
};
