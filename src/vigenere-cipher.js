const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(phrase, key) {
    if (!phrase || !key) {
      throw new Error('Incorrect arguments!');
    }
    phrase = [...phrase].map(ch => ch.toUpperCase()).join('');
    key = [...key].map(ch => ch.toUpperCase()).join('');
    if (phrase.length > key.length) {
      key = key.repeat(phrase.length);
    }
    key = key.slice(0, phrase.replaceAll(' ', '').length);
    let i = 0;
    const res = phrase.split('').map(ch => {
      if (this.alphabet.includes(ch)) {
        const letterIndex = this.alphabet.indexOf(ch);
        const keyIndex = this.alphabet.indexOf(key[i]);
        i++;
        return this.alphabet[(letterIndex + keyIndex) % 26];
      } else {
        return ch;
      }
    });

    return this.direct ? res.join('') : res.reverse().join('');
  }

  decrypt(phrase, key) {
    if (!phrase || !key) {
      throw new Error('Incorrect arguments!');
    }
    phrase = [...phrase].map(ch => ch.toUpperCase()).join('');
    key = [...key].map(ch => ch.toUpperCase()).join('');
    if (phrase.length > key.length) {
      key = key.repeat(phrase.length);
    }
    key = key.slice(0, phrase.replaceAll(' ', '').length);
    let i = 0;
    const res = phrase.split('').map(ch => {
      if (this.alphabet.includes(ch)) {
        const letterIndex = this.alphabet.indexOf(ch);
        const keyIndex = this.alphabet.indexOf(key[i]);
        i++;
        return this.alphabet[(letterIndex - keyIndex + 26) % 26];
      } else {
        return ch;
      }
    });

    return this.direct ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
