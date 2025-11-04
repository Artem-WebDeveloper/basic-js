const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position < 1 || position > this.chain.length) this.chain.length = 0;

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const finish = this.chain.map(link => `( ${link} )`).join('~~');
    this.chain.length = 0;
    return finish;
  },
};

module.exports = {
  chainMaker,
};

module.exports = {
  chainMaker,
};
