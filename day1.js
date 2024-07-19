// Day1 of 30 days of js
// Activity 1: Variable Declaration
// Task 1: 

var num = 13;
console.log(num); // Output: 13

// Task 2: 
let str_ = "Day1 of 30 days of js";
console.log(str_); // Output: Day1 of 30 days of js

// Activity 2: Constant Declaration
// Task 3:
const pi = 3.14;
console.log(pi); // Output: 3.14

// Activity 3: Data Types
// Task 4: 
let roll = 7; 
let str = "Gagan"; 
let booleanVar = false;
let obj = {
           subject : "JS",
           interested : true
        }; 
let games = ['cricket','badminton','football']; 

console.log(typeof roll); // Output: number
console.log(typeof str); // Output: string
console.log(typeof booleanVar); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof games); // Output: object

// Activity 4: Reassigning Variables
// Task 5: 
let modified_var = true;
console.log(modified_var); // Output: true
modified_var = "assigned";
console.log(modified_var); // Output: assigned

// Activity 5: Understanding `const`
// Task 6: 
const value = "13";
console.log(value); // Output: 13
// value = "myName"; // TypeError: Assignment to constant variable.


// Feature Request:
// 1. Variable Types Console Log: 
// String
let myString = "Hello, World!";
console.log("Value:", myString, "Type:", typeof myString);

// Number
let myNumber = 42;
console.log("Value:", myNumber, "Type:", typeof myNumber);

// Boolean
let myBoolean = true;
console.log("Value:", myBoolean, "Type:", typeof myBoolean);

// Null
let myNull = null;
console.log("Value:", myNull, "Type:", typeof myNull); // Note: typeof null is an object 

// Undefined
let myUndefined;
console.log("Value:", myUndefined, "Type:", typeof myUndefined);

// Object
let myObject = { name: "Gagan" };
console.log("Value:", myObject, "Type:", typeof myObject);

// Array
let myArray = [1, 2, 3];
console.log("Value:", myArray, "Type:", typeof myArray);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.
let strValue = "13";
console.log(strValue); // Output: 13
strValue = "new strValue";
console.log(strValue); // Output: new strValue

const eVal = 2.71;
eVal = 2.72; // TypeError: Assignment to constant variable.