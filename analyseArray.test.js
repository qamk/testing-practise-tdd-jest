const analyser = require('./analyseArray.js');

it('Returns the mean, min max and length correctly', () => {
  const data = [1, 2, 3, 4, 5, 6];
  const result = analyser().run(data);
  const resultMean = result.mean;
  expect(resultMean).toBeCloseTo(3.5)
  expect(result).toHaveProperty('min', 1);
  expect(result).toHaveProperty('max', 6);
  expect(result).toHaveProperty('length', 6);
})

it('Returns NaN for each stat if an empty array is passed', () => {
  const data = [];
  const result = analyser().run(data);
  const resultValues = Object.values(result)
  for ( let value of resultValues ) expect(value).toBeNaN();
})

it('Returns the mean to up to 2 decimal places', () => {
  const data = [5, 75, 32];
  const result = analyser().run(data);
  const resultMean = result.mean;
  expect(resultMean).toBeCloseTo(37.33);
})

it('Returns the correct property values when negative numbers are passed', () => {
  const data = [-1, -2, 1004, -4, 74, -6];
  const result = analyser().run(data);
  const resultMean = result.mean;
  expect(resultMean).toBeCloseTo(177.5)
  expect(result).toHaveProperty('min', -6);
  expect(result).toHaveProperty('max', 1004);
  expect(result).toHaveProperty('length', 6);
})

it('Returns the same number for each stat if only one number is passed', () => {
  const data = [100];
  const result = analyser().run(data);
  const resultMean = result.mean;
  expect(resultMean).toBeCloseTo(100)
  expect(result).toHaveProperty('min', 100);
  expect(result).toHaveProperty('max', 100);
  expect(result).toHaveProperty('length', 1);
})

it('Ignores values that cannot be converted into an integer, returning these values in another property', () => {
  const data = [5, '1', 19, 'alphabet', -1, '-----4'];
  const result = analyser().run(data);
  const resultMean = result.mean;
  expect(resultMean).toBeCloseTo(6)
  expect(result).toHaveProperty('min', -1);
  expect(result).toHaveProperty('max', 19);
  expect(result).toHaveProperty('length', 4);
  expect(result).toHaveProperty('ignored', [
    'alphabet',
    '-----4'
  ]);
})
