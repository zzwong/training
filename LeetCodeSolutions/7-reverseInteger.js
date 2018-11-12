var MAX_32_BIT = Math.pow(2, 31);
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  console.log(Math.pow(2, 31));
  if (x > MAX_32_BIT || x < -MAX_32_BIT || x == 0) return 0;

  if (x > 0) {
    var ans = parseInt(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    );
    return ans > MAX_32_BIT ? 0 : ans;
  }

  var ans = -parseInt(
    x
      .toString()
      .substring(1, x.length)
      .split('')
      .reverse()
      .join('')
  );
  return ans < -MAX_32_BIT ? 0 : ans;
};
