# Working with the Number Data Type

JavaScript's `Number` type includes integers, floating-point numbers, `Infinity`, and `NaN`.

- Floating-point numbers are numbers with a decimal point.
- `Infinity` is a number greater than any other number.
- `-Infinity` is a number smaller than any other number.
- `NaN` (Not a Number) represents an invalid numeric value like the string `"Jessica"`.

## Common Arithmetic Operations

- **Addition Operator** `+`: calculates the sum of two or more numbers.
- **Subtraction Operator** `-`: calculates the difference between two numbers.
- **Multiplication Operator** `*`: calculates the product of two or more numbers.
- **Division Operator** `/`: calculates the quotient between two numbers.
- **Division By Zero**: dividing by zero returns `Infinity` in JavaScript.
- **Remainder Operator** `%`: returns the remainder of a division.
- **Exponentiation Operator** `**`: raises one number to the power of another.

## Calculations with Numbers and Strings

When you use the `+` operator with a number and a string, JavaScript coerces the number into a string and concatenates the values.

When you use `-`, `*`, or `/` with a string and number, JavaScript coerces the string into a number and the result is a number.

For `null` and `undefined`, JavaScript treats `null` as `0` and `undefined` as `NaN` in mathematical operations.

```js
const result = 5 + '10';
console.log(result); // "510"
console.log(typeof result); // string

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
```

## Operator Precedence

Operator precedence determines the order in which operations are evaluated in an expression. Operators with higher precedence are evaluated before those with lower precedence. Values inside parentheses are evaluated first, and multiplication/division have higher precedence than addition/subtraction.

If operators have the same precedence, JavaScript uses associativity.

```js
const result = (2 + 3) * 4;
console.log(result); // 20

const result2 = 10 - 2 + 3;
console.log(result2); // 11

const result3 = 2 ** 3 ** 2;
console.log(result3); // 512
```

### Associativity

Associativity defines the direction in which an expression is evaluated when multiple operators of the same type exist.

- Left-to-right: most operators.
- Right-to-left: exponentiation `**`.

```js
const result4 = 5 ** 4 ** 1;
console.log(result4); // 625
```

## Increment and Decrement Operators

- **Increment Operator** increases a value by one.
  - Prefix: `++num` increments first, then returns the new value.
  - Postfix: `num++` returns the current value first, then increments.

```js
let x = 5;
console.log(++x); // 6
console.log(x); // 6

let y = 5;
console.log(y++); // 5
console.log(y); // 6
```

- **Decrement Operator** decreases a value by one.
  - Prefix and postfix work like increment.

```js
let num = 5;
console.log(--num); // 4
console.log(num--); // 4
console.log(num); // 3
```

## Compound Assignment Operators

- `+=` Addition assignment
- `-=` Subtraction assignment
- `*=` Multiplication assignment
- `/=` Division assignment
- `%=` Remainder assignment
- `**=` Exponentiation assignment

## Booleans and Equality

A boolean is a data type with only two values: `true` or `false`.

- `==` Equality operator: uses type coercion.
- `===` Strict equality operator: no type coercion, types and values must match.
- `!=` Inequality operator: uses type coercion.
- `!==` Strict inequality operator: no type coercion.

```js
console.log(5 == '5'); // true
console.log(5 === '5'); // false
```

## Comparison Operators

- `>` Greater than
- `>=` Greater than or equal to
- `<` Less than
- `<=` Less than or equal to

## Unary Operators

- **Unary plus** `+`: converts its operand into a number.

```js
const str = '42';
const num = +str;
console.log(num); // 42
console.log(typeof num); // number
```

- **Unary negation** `-`: negates the operand.

```js
const num = 4;
console.log(-num); // -4
```

- **Logical NOT** `!`: flips the boolean value of its operand.

## Bitwise Operators

- `&` Bitwise AND
- `&=` Bitwise AND assignment
- `|` Bitwise OR
- `|=` Bitwise OR assignment
- `^` Bitwise XOR
- `~` Bitwise NOT
- `<<` Left shift
- `>>` Right shift

## Conditional Statements, Truthy Values, Falsy Values, and the Ternary Operator

An `if` statement evaluates a condition and runs a block of code if that condition is truthy. If the condition is false, it moves to `else if`. If none of the conditions are true, it executes `else`.

Truthy values evaluate to true in a Boolean context. Falsy values evaluate to false.

```js
const score = 87;

if (score >= 90) {
  console.log('You got an A');
} else if (score >= 80) {
  console.log('You got a B'); // You got a B
} else if (score >= 70) {
  console.log('You got a C');
} else {
  console.log('You failed! You need to study more!');
}
```

- **Ternary operator**: a shorter way to write `if/else`.

```js
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';
console.log(`It's a ${weather} day!`); // It's a sunny day!
```

## Binary Logical Operators

- `&&` Logical AND: returns the second value if both operands are true, otherwise returns the first falsy value.
- `||` Logical OR: returns the first truthy value or the last value if none are truthy.
- `??` Nullish coalescing: returns the right-hand value only if the left-hand value is `null` or `undefined`.

```js
const result = true && 'hello';
console.log(result); // hello

const userSettings = {
  theme: null,
  volume: 0,
  notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
```

## The Math Object

- `Math.random()` returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
- `Math.max()` returns the maximum value of a set of numbers.
- `Math.min()` returns the minimum value of a set of numbers.
- `Math.ceil()` rounds a value up to the nearest integer.
- `Math.floor()` rounds a value down to the nearest integer.
- `Math.round()` rounds a value to the nearest integer.

```js
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
```

- `Math.trunc()` removes the decimal part of a number without rounding.
- `Math.sqrt()` returns the square root of a number.
- `Math.cbrt()` returns the cube root of a number.
- `Math.abs()` returns the absolute value of a number.
- `Math.pow()` raises a number to the power of another number.

## Common Number Methods

- `isNaN()`: determines whether a value is `NaN`. The global `isNaN()` coerces the value first.
- `Number.isNaN()`: a more reliable check for `NaN` values without type coercion.

```js
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN('NaN'));      // false
console.log(Number.isNaN(undefined));  // false
```

- `parseFloat()`: parses a string and returns a floating-point number.
- `parseInt()`: parses a string and returns an integer; stops parsing at the first non-digit character.
- `toFixed()`: formats a number using fixed-point notation and returns a string with the specified number of digits after the decimal point.
