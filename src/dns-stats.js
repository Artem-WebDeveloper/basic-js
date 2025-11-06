const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const res = {};
  const arr = domains.map(domain =>
    domain
      .split('.')
      .reverse()
      .map(el => '.' + el)
  );

  arr.forEach(domain => {
    let concat = '';
    for (let i = 0; i < domain.length; i++) {
      concat += domain[i];
      res[concat] = (res[concat] || 0) + 1;
    }
  });

  return res;
}

module.exports = {
  getDNSStats,
};
