// Basic Arithmetic Operations
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const modulo = (a, b) => a % b;
const exponentiation = (a, b) => a ** b;

// Math Object Methods
const absoluteValue = (n) => Math.abs(n);
const ceiling = (n) => Math.ceil(n);
const floor = (n) => Math.floor(n);
const round = (n) => Math.round(n);
const squareRoot = (n) => Math.sqrt(n);
const power = (base, exp) => Math.pow(base, exp);
const maximum = (...nums) => Math.max(...nums);
const minimum = (...nums) => Math.min(...nums);
const random = () => Math.random();
const sine = (n) => Math.sin(n);
const cosine = (n) => Math.cos(n);
const tangent = (n) => Math.tan(n);
const logarithm = (n) => Math.log(n);
const logarithm10 = (n) => Math.log10(n);
const naturalExponent = (n) => Math.exp(n);
const sign = (n) => Math.sign(n);
const trunc = (n) => Math.trunc(n);

// Examples
console.log(addition(5, 3)); // 8
console.log(modulo(10, 3)); // 1
console.log(floor(4.7)); // 4
console.log(squareRoot(16)); // 4
console.log(maximum(1, 5, 3)); // 5
// Compound Assignment Operators
let x = 10;
x += 5; // x = x + 5 = 15
console.log(x); // 15

x -= 3; // x = x - 3 = 12
console.log(x); // 12

x *= 2; // x = x * 2 = 24
console.log(x); // 24

x /= 4; // x = x / 4 = 6
console.log(x); // 6

x %= 4; // x = x % 4 = 2
console.log(x); // 2

x **= 3; // x = x ** 3 = 8
console.log(x); // 8