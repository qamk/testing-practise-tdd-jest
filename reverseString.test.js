const reverseString = require('./reverseString.js');

it('Reverses a string', () => {
  const baseString = 'hello';
  const result = reverseString(baseString);
  expect(result).toBe('olleh');
});