const caeserCipher = require('./caeserCipher.js');

it('Shifts letters (small shifts)', () => {
  const startingString = 'hello';
  const shift = 4;
  const shiftedString = 'lipps';
  const result = caeserCipher.cipher(startingString, shift);
  expect(result).toBe(shiftedString);
});

it('Shifts letters (big shifts)', () => {
  const startingString = 'adea';
  const shift = 17;
  const shiftedString = 'ruvr';
  const result = caeserCipher.cipher(startingString, shift);
  expect(result).toBe(shiftedString);
})

it('Wraps your shift to be case-sensitive (e.g. capital shifts to another capital)', () => {
  const startingString = 'ZeuS';
  const shift = 15;
  const shiftedString = 'OtjH';
  const result = caeserCipher.cipher(startingString, shift);
  expect(result).toBe(shiftedString);
})

it('Ignores punctuation when shifting', () => {
  const startingString = 'Hello!';
  const shift = 4;
  const shiftedString = 'Lipps!';
  const result = caeserCipher.cipher(startingString, shift);
  expect(result).toBe(shiftedString);
})

it('Shifts and wraps when given negative integers', () => {
  const startingString = 'bazar';
  const shift = -4;
  const shiftedString = 'xwvwn';
  const result = caeserCipher.cipher(startingString, shift);
  expect(result).toBe(shiftedString);
})

it('Ignores decimals, shifting with the rounded down value instead', () => {
  const startingString = 'FOO';
  const shift = 3.14159265359;
  const shiftedString = 'IRR';
  const result = caeserCipher.cipher(startingString, shift);
  expect(result).toBe(shiftedString);
})
