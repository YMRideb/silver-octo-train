// Unary Operators in JavaScript
// Unary operators work on a single operand (value)

// 1. Unary Plus (+)
// Converts a value to a number
const str = "42";
const num = +str;
console.log(num); // 42 (number)

// 2. Unary Minus (-)
// Negates a number or converts and negates
const positive = 5;
const negative = -positive;
console.log(negative); // -5

// 3. Logical NOT (!)
// Inverts a boolean value
const isTrue = true;
const isFalse = !isTrue;
console.log(isFalse); // false

// 4. Bitwise NOT (~)
// Inverts all bits of a number
const num1 = 5; // Binary: 0101
const inverted = ~num1;
console.log(inverted); // -6

// 5. typeof
// Returns the type of a value as a string
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"

// 6. Increment (++) and Decrement (--)
let counter = 5;

// Pre-increment: increments then returns the new value
console.log(++counter); // 6, counter = 6

// Post-increment: returns the current value then increments
console.log(counter++); // 6, counter = 7
console.log(counter); // 7

// Pre-decrement: decrements then returns the new value
console.log(--counter); // 6, counter = 6

// Post-decrement: returns the current value then decrements
console.log(counter--); // 6, counter = 5

// 7. void
// Evaluates an expression and returns undefined
const result = void 0;
console.log(result); // undefined

// 8. delete
// Removes a property from an object
const obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj); // { name: "John" }


// Bitwise Operators
// These operators work on the binary representations of numbers

// 1. Bitwise AND (&)
// Returns 1 only if both bits are 1
console.log(5 & 3); // 1 (Binary: 0101 & 0011 = 0001)

// 2. Bitwise OR (|)
// Returns 1 if at least one bit is 1
console.log(5 | 3); // 7 (Binary: 0101 | 0011 = 0111)

// 3. Bitwise XOR (^)
// Returns 1 if bits are different
console.log(5 ^ 3); // 6 (Binary: 0101 ^ 0011 = 0110)

// 4. Left Shift (<<)
// Shifts bits left, filling with zeros on the right
console.log(5 << 1); // 10 (Binary: 0101 << 1 = 1010, same as 5 * 2)

// 5. Right Shift (>>)
// Shifts bits right, preserving the sign bit
console.log(5 >> 1); // 2 (Binary: 0101 >> 1 = 0010, same as 5 / 2)

// 6. Unsigned Right Shift (>>>)
// Shifts bits right, filling with zeros
console.log(-5 >>> 1); // 2147483645 (fills with zeros from left)