import greetES6 from "./single-export.mjs";
import { add, subtract, multiply, divide } from "./multiple-export.mjs";

console.log(greetES6("Umakanth"));

console.log(add(20, 1)); // 21
console.log(subtract(20, 1)); // 19
console.log(multiply(4, 5)); // 20
console.log(divide(8, 5)); // 1.6
console.log(divide(3, 0)); // "Cannot divide by zero"
