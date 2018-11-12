/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let R2I = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const next = i + 1;
    if (next < s.length) {
      switch (curr) {
        case 'I':
          if (['V', 'X'].includes(s[next])) {
            res += R2I[s[next]] - R2I[curr];
            i++;
            break;
          }
        case 'X':
          if (['L', 'C'].includes(s[next])) {
            res += R2I[s[next]] - R2I[curr];
            i++;
            break;
          }
        case 'C':
          if (['D', 'M'].includes(s[next])) {
            res += R2I[s[next]] - R2I[curr];
            i++;
            break;
          }
        default:
          res += R2I[s[i]];
      }
    } else {
      res += R2I[s[i]];
    }
  }
  return res;
};
