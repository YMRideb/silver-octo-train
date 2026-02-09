let firstResult = 5 + "10";
console.log(`5 + 10 = ${firstResult}`);

let secondResult = "Eight" - 5;
console.log(`8 - 5 = ${secondResult}`);

let thirdResult = true + 5;
console.log(`1 + 5 = ${thirdResult}`);

let fourthResult = false + 8;
console.log(`0 + 8 = ${fourthResult}`);

let fifthResult = "10" * 2;
console.log(`10 * 2 = ${fifthResult}`);

let sixthResult = null + 22;
console.log(`0 + 22 = ${sixthResult}`);
//These examples demonstrate how JavaScript handles type coercion in arithmetic operations. When a string is involved in addition, it concatenates instead of performing numeric addition. In subtraction and multiplication, JavaScript attempts to convert strings to numbers, resulting in NaN if the conversion fails. Boolean values are treated as 1 (true) and 0 (false), while null is treated as 0 in numeric contexts.

const firstResultA = 5 + 10;
console.log(`5 + 10 = ${firstResultA}`);

const secondResultA = 8 - 5;
console.log(`8 - 5 = ${secondResultA}`);

const thirdResultA = 1 + 5;
console.log(`1 + 5 = ${thirdResultA}`);

const fourthResultA = 0 + 8;
console.log(`0 + 8 = ${fourthResultA}`);

const fifthResultA = 10 * 2;
console.log(`10 * 2 = ${fifthResultA}`);

const sixthResultA = 0 + 22;
console.log(`0 + 22 = ${sixthResultA}`);
// In this corrected version, all operations are performed with numeric values, resulting in expected arithmetic outcomes without type coercion issues.