const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

//exporting a multiple function using common js
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
