// Conditional Statements in JavaScript
// Conditional statements allow your code to make decisions and execute different blocks based on conditions

// ===== IF STATEMENT =====
// The if statement executes a block of code if a condition is true
let age = 18;
if (age >= 18) {
    console.log("You are an adult"); // This will execute
}

// ===== IF...ELSE STATEMENT =====
// The if...else statement executes one block if true, another if false
let score = 45;
if (score >= 50) {
    console.log("You passed");
} else {
    console.log("You failed"); // This will execute
}

// ===== IF...ELSE IF...ELSE STATEMENT =====
// Use else if to test multiple conditions
let grade = 75;
if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C"); // This will execute
} else {
    console.log("Grade: F");
}

// ===== SWITCH STATEMENT =====
// Switch statements are useful when you have many conditions to check
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // This will execute
        break;
    default:
        console.log("Unknown day");
}

// ===== TERNARY OPERATOR =====
// A shorthand for if...else in one line: condition ? valueIfTrue : valueIfFalse
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote: " + canVote); // "Yes"

// ===== LOGICAL OPERATORS =====
// AND (&&) - both conditions must be true
if (age >= 18 && score >= 50) {
    console.log("You qualify"); // Won't execute (score is 45)
}

// OR (||) - at least one condition must be true
if (age >= 18 || score >= 50) {
    console.log("At least one condition is true"); // Will execute (age is 18)
}

// NOT (!) - reverses the condition
if (!(score >= 50)) {
    console.log("Score is less than 50"); // Will execute
}