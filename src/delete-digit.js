const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = [...n.toString()];

  let index = arrN.findIndex((dig, i) => dig < arrN[i + 1]);
  if (index === -1) index = arrN.length - 1;

  arrN.splice(index, 1);
  return +arrN.join('');
}

module.exports = {
  deleteDigit,
};
