const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let sum = 0;

  [...new Set([...s1])].forEach(ch => {
    sum += Math.min(
      [...s1].reduce((acc, el) => (ch === el ? acc + 1 : acc), 0),
      [...s2].reduce((acc, el) => (ch === el ? acc + 1 : acc), 0)
    );
  });
  return sum;
}

module.exports = {
  getCommonCharacterCount,
};
