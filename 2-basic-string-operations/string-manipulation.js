

//  ##  String Manipulation

//  - Make upper and lower case
const text = "Hello, World!";
const upperCased = text.toUpperCase(); // "HELLO, WORLD!"
const lowerCased = text.toLowerCase(); // "hello, world!"


// Split a string into an array
const sentence = "This is a sample sentence";
const words = sentence.split(" ");
console.log(words); // ["This", "is", "a", "sample", "sentence"]

// Check for a specific sequence
const str = "JavaScript is awesome";
const containsAwesome = str.includes("awesome");
console.log(containsAwesome); // true

// Check if a string starts or ends with a specific sequence
const url = "https://example.com";
const startsWithHttps = url.startsWith("https");
const endsWithCom = url.endsWith(".com");
console.log(startsWithHttps, endsWithCom); // true true

// Reverse a string
const originalString = "Hello, World!";
const reversedString = [...originalString].reverse().join("");
console.log(reversedString); // "!dlroW ,olleH"

// Pad a string to a specific length
const num = "42";
const paddedNum = num.padStart(5, "0");
console.log(paddedNum); // "00042"

// Check for substring presence
const phrase = "The quick brown fox jumps over the lazy dog";
const hasQuick = phrase.includes("quick");
console.log(hasQuick); // true

// Modify a string using replace method
const originalPhrase = "I like apples";
const modifiedPhrase = originalPhrase.replace("apples", "bananas");
console.log(modifiedPhrase); // "I like bananas"

// Extract a substring
const longString = "JavaScript is a powerful language";
const subString = longString.substring(0, 10);
console.log(subString); // "JavaScript"
