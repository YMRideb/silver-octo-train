// JavaScript String Manipulation Methods

// ===== CASE CONVERSION =====
const str = "Hello World";
console.log(str.toUpperCase());        // "HELLO WORLD"
console.log(str.toLowerCase());        // "hello world"

// ===== SEARCHING & INDEXING =====
console.log(str.indexOf("o"));         // 4
console.log(str.lastIndexOf("o"));     // 7
console.log(str.includes("World"));    // true
console.log(str.startsWith("Hello"));  // true
console.log(str.endsWith("World"));    // true
console.log(str.search("World"));      // 6

// ===== EXTRACTING SUBSTRINGS =====
console.log(str.charAt(0));            // "H"
console.log(str.charCodeAt(0));        // 72
console.log(str.substring(0, 5));      // "Hello"
console.log(str.slice(0, 5));          // "Hello"
console.log(str.slice(-5));            // "World"
console.log(str.substr(0, 5));         // "Hello" (deprecated)

// ===== SPLITTING & JOINING =====
console.log(str.split(" "));           // ["Hello", "World"]
console.log(str.split(""));            // ['H', 'e', 'l', 'l', 'o', ...]

// ===== TRIMMING WHITESPACE =====
const spaces = "  hello  ";
console.log(spaces.trim());            // "hello"
console.log(spaces.trimStart());       // "hello  "
console.log(spaces.trimEnd());         // "  hello"

// ===== REPLACING =====
console.log(str.replace("World", "JavaScript"));     // "Hello JavaScript"
console.log(str.replaceAll("l", "L"));              // "HeLLo WorLd"

// ===== REPEATING & PADDING =====
console.log("ha".repeat(3));           // "hahaha"
console.log("5".padStart(3, "0"));     // "005"
console.log("5".padEnd(3, "0"));       // "500"

// ===== PATTERN MATCHING =====
console.log(str.match(/o/g));          // ["o", "o"]
console.log(str.matchAll(/l/g));       // Iterator of matches

// ===== STRING COMPARISON =====
console.log(str.localeCompare("Hello")); // 1 (comparison result)

// ===== CONCATENATION =====
console.log(str.concat(" ", "2024")); // "Hello World 2024"
console.log(str + " 2024");            // "Hello World 2024"

// ===== TEMPLATES =====
const name = "JavaScript";
console.log(`Hello ${name}`);          // "Hello JavaScript"