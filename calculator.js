const calculator = (() => {

  const calculate = ({vals = [], operator}) => {
    const operations = {
      '+': add,
      '-': subtract,
      '/': divide,
      '*': multiply,
    }
    return vals.reduce( ( total, current ) => operations[operator](total, current) )
  }
  
  const add = (a, b) => {
    return a + b;
  }

  const subtract = (a, b) => {
    return a - b;
  }

  const multiply = (a, b) => {
    return a * b;
  }

  const divide = (a, b) => {
    return a / b;
  } 

  return { calculate };
})();

module.exports = calculator;