const caeserCipher = (() => {

  // Returns the ord for A or a or false if the character is not a letter
  const letterOrdReference = (ord) => {
    lowerRef = (ord >= 65 && ord <= 90) && 65;
    uppeRef = (ord >=97 && ord <= 122) && 97;
    return lowerRef || uppeRef || false;
  }

  const makeShift = ({ shift, currentOrd, referenceOrd } = {}) => {
    const distance = currentOrd - referenceOrd;
    return ( referenceOrd + mod((distance + shift), 26) );
  }

  // JavaScript's mod with -a/b returns a negative number instead of a positive.
  // The mod function will return a positive number instead
  // from https://stackoverflow.com/a/17323608
  // It adds the denominator (y) onto the first mod to get a positive value.
      // It mods again so that we get a number from 0 to (y - 1) (e.g. for when x is positive)

  const mod = (x, y) => {
    return ((x % y) + y) % y;
  }

  const toChar = (ord) => String.fromCharCode(ord);

  const cipher = (string, shift) => {
    let cipherText = '';
    shift = Math.floor(shift);
    for (let index = 0; index < string.length; index++) {
      const charOrd = string.charCodeAt(index);
      const refOrd = letterOrdReference(charOrd);

      if (!refOrd) {
        cipherText = cipherText + toChar(charOrd);
        continue
      }

      const shiftedOrd = makeShift({ shift: shift, currentOrd: charOrd, referenceOrd: refOrd })
      cipherText = cipherText + toChar(shiftedOrd);
    }

    return cipherText;
  }

  return { cipher };
})();

module.exports = caeserCipher;