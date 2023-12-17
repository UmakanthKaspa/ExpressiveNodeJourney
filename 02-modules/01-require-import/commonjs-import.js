//importing a single using Common JS Module Expor
const greet = require('./commonjs-single-export.js.js')

console.log(greet('umakanth'))



const {add,subtract,multiply,divide }= require('./commonjs-multiple-exports.js');
console.log(add(20, 1)); // 21
console.log(subtract(20, 1));     // 19
console.log(multiply(4, 5));     // 20
console.log(divide(8, 5));       // 1.6
console.log(divide(3, 0));       // cannot divide by zero
