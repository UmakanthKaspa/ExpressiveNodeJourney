import greetES6 from "./es6-single-export.mjs";

console.log(greetES6("Umakanth"))


import {  add,subtract,multiply,divide} from "./es6-multiple-export.mjs";
console.log(add(20, 1)); // 21
console.log(subtract(20, 1));     // 19
console.log(multiply(4, 5));     // 20
console.log(divide(8, 5));       // 1.6
console.log(divide(3, 0));       // cannot divide by zero
