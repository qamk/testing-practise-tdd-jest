const calculator = require('./calculator.js');

it('Adds two whole numbers', () => {
  const result = calculator.sum(3, 4);
  expect(result).toBe(7);
});

it('Subtracts two whole numbers', () => {
  const result = calculator.subtract(10, 6);
  expect(result).toBe(4);
});

it('Divides two whole numbers', () => {
  const result = calculator.divide(5, 2);
  expect(result).toBe(2.5);
});

it('Multiplies two whole numbers', () => {
  const result = calculator.multiply(3, 9);
  expect(result).toBe(27);
});

it('Returns the number if one number is given', () => {
  const result = calculator.add(1);
  expect(result).toBe(1);
});

it('Can perform operations on more than two numbers', () => {
  const sumResult = calculator.sum(4, 2);
  const subtractResult = calculator.subtract(4, 2);
  const multiplyResult = calculator.multiply(4, 2);
  const divideResult = calculator.divide(4, 2);
});