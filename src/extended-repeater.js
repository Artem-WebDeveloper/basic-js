const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options || {};

  let res = '';

  for (let i = 1; i <= repeatTimes; i++) {
    res += String(str);

    if (addition !== undefined) {
      for (let k = 1; k <= additionRepeatTimes; k++) {
        if (k === additionRepeatTimes) {
          res += String(addition);
        } else {
          res += String(addition) + additionSeparator;
        }
      }
    }

    if (i < repeatTimes) res += separator;
  }
  return res;
}

module.exports = {
  repeater,
};
