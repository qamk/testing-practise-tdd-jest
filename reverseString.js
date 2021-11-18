const reverseString = (str) => {
  let reversed = [];
  const strLastCharIndex = str.length - 1;
  const strArr = str.trim().split('');
  for ( let i = strLastCharIndex; i >= 0; i-- ) {
    reversed.push(strArr[i]);
  }
  return reversed.join('');
}

module.exports = reverseString;