const capitalise = require('./capitalise.js');

it('Capitalises the first letter of a string', () => {
  const lowerCaseString = 'i am capitalised';
  const result = capitalise(lowerCaseString);
  expect(result).toBe('I am capitalised');
});

it('Does not change a capitalised string', () => {
  const capitalisedString = 'I am already capitalised';
  const result = capitalise(capitalisedString);
  expect(result).toBe('I am already capitalised');
});