// JavaScript Boolean Functions and Examples

// Boolean() - Converts a value to its boolean equivalent
console.log(Boolean(1));           // true (non-zero numbers are true)
console.log(Boolean(0));           // false (0 is false)
console.log(Boolean(""));          // false (empty string is false)
console.log(Boolean("hello"));     // true (non-empty string is true)
console.log(Boolean(null));        // false (null is false)
console.log(Boolean(undefined));   // false (undefined is false)

// Logical AND (&&) - Returns true if both operands are true
console.log(true && true);         // true
console.log(true && false);        // false
console.log(5 > 3 && 10 > 5);      // true

// Logical OR (||) - Returns true if at least one operand is true
console.log(true || false);        // true
console.log(false || false);       // false
console.log(5 > 10 || 10 > 5);     // true

// Logical NOT (!) - Inverts the boolean value
console.log(!true);                // false
console.log(!false);               // true
console.log(!(5 > 3));             // false

// Comparison operators that return booleans
console.log(5 === 5);              // true (strict equality)
console.log(5 !== 3);              // true (not equal)
console.log(5 > 3);                // true (greater than)
console.log(5 < 3);                // false (less than)
console.log(5 >= 5);               // true (greater than or equal)
console.log(5 <= 3);               // false (less than or equal)

// typeof operator - Check if value is boolean type
console.log(typeof true);          // "boolean"
console.log(typeof false);         // "boolean"

// Truthy and Falsy values
let falsy = [0, "", null, undefined, NaN, false];  // All falsy values
let truthy = [1, "text", {}, [], true];            // All truthy values