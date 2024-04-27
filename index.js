"use strict";
//JavaScript String Methods:
Object.defineProperty(exports, "__esModule", { value: true });
// toUpperCase(): Converts all characters to uppercase.
// toLowerCase(): Converts all characters to lowercase.
// charAt(): Returns the character at a specified index.
// indexOf(): Returns the index of the first occurrence of a specified value.
// lastIndexOf(): Returns the index of the last occurrence of a specified value. or  Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
// slice(): Extracts a section of a string and returns it as a new string.
// substring(): Returns the part of the string between two indexes.
// replace(): Replaces a specified value with another value in a string.
// split(): Splits a string into an array of substrings based on a separator.
// startsWith(): Checks if a string starts with a specified value.
// trim(): Removes whitespace from both ends of a string.
// concate():
// endsWith: Determines whether a string ends with the characters of a specified string, returning true or false.
// includes: Determines whether a string contains the characters of a specified string, returning true or false.
// These methods are incredibly useful for string manipulation and are fundamental in JavaScript programming.
let studentName = "  huMa mOhSin  ";
console.log("Upper Case:", studentName.toUpperCase());
console.log("Lower Case:", studentName.toLowerCase());
console.log("Character or Letter At Index:", studentName.charAt(7));
console.log("Index Of Character:", studentName.indexOf("O"), studentName.indexOf("mOhSin"));
console.log("last Index Of character:", studentName.lastIndexOf("z")); // Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
console.log("last Index Of character:", studentName.lastIndexOf("M"));
console.log(`Take slice from ${studentName}:`, studentName.slice(0, 9)); //Extracts a section of a string and returns it as a new string.
console.log(`Substring Of ${studentName}:`, studentName.substring(2, 5)); //to start from  and  to end -index given for substring.
console.log(`Substring Of ${studentName}:`, studentName.substring(5)); //// Returns a new string containing the characters from startIndex up to, but not including, endIndex.
console.log("Replaced:", studentName.replace("u", "y")); //Returns a new string with some or all matches of a pattern replaced by a replacement.
//or
console.log("Replaced:", studentName.replace("mOhSin", "MOHSIN"));
console.log(`split ${studentName}:`, studentName.split("")); // Splits a string into an array of substrings.
//or
console.log(`split ${studentName}:`, studentName.split(" "));
console.log("check startswith:", studentName.startsWith("h")); // Determines whether a string begins with the characters of a specified string, returning true or false.
//or
console.log("check startswith:", studentName.startsWith("m"));
console.log("check startswith:", studentName.startsWith("huMa"));
console.log(`Trim ${studentName}:`, studentName.trim());
console.log("concate:", studentName.concat("candidate")); //joins string together
console.log(`Ends With: ${studentName}`, studentName.endsWith("n"));
console.log(`Ends With: ${studentName}`, studentName.endsWith("mOhSin "));
console.log(`Includes:`, studentName.includes("u", 1)); // find u at index 1
//Author- Huma Mohsin
