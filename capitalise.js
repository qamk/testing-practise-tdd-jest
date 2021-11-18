const capitalise = (string) => {

  const betweenUpperCaseOrds = (value) => {
    return (value >= 65) && (value <= 90)
  }
  let firstCharUpper = string.charCodeAt(0);
  if (betweenUpperCaseOrds(firstCharUpper)) { return string };

  let stringArr = string.trim().split('');
  const shift = firstCharUpper - 32;
  let newChar = String.fromCharCode(shift);
  stringArr[0] = newChar;
  return stringArr.join('');
}

module.exports = capitalise;