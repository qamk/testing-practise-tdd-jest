const calculator = require('./calculator.js');

it('Adds two whole numbers', () => {
  const result = calculator.calculate({
    vals: [3, 4],
    operator: '+',
  });
  expect(result).toBe(7);
});

it('Subtracts two whole numbers', () => {
  const result = calculator.calculate({
    vals: [10, 6],
    operator: '-',
  });
  expect(result).toBe(4);
});

it('Divides two whole numbers', () => {
  const result = calculator.calculate({
    vals: [5, 2],
    operator: '/',
  });
  expect(result).toBe(2.5);
});

it('Multiplies two whole numbers', () => {
  const result = calculator.calculate({
    vals: [3, 9],
    operator: '*',
  });
  expect(result).toBe(27);
});

it('Returns the number if one number is given', () => {
  const result = calculator.calculate({
    vals: [1],
    operator: '+',
  });
  expect(result).toBe(1);
});

it('Can perform operations on more than two numbers', () => {
  const sumResult = calculator.calculate({
    vals: [4, 2, 10],
    operator: '+',
  });
  const subtractResult = calculator.calculate({
    vals: [4, 2, 1],
    operator: '-',
  });
  const multiplyResult = calculator.calculate({
    vals: [4, 2, 2, 3],
    operator: '*',
  });
  const divideResult = calculator.calculate({
    vals: [16, 2, 4, 2],
    operator: '/',
  });
  expect(sumResult).toBe(16);
  expect(subtractResult).toBe(1);
  expect(multiplyResult).toBe(48);
  expect(divideResult).toBe(1);
});