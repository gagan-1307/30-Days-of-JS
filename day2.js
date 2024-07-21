// Day 2: Operators
// Tasks/Activities:


// Activity 1: Arithmetic Operations
// . Task 1: Write a program to add two numbers and log the result to the console.
let num1 = 3;
let num2 = 4;
let sum = num1+num2;
console.log(sum); // output : 7

// . Task 2: Write a program to subtract two numbers and log the result to the console.
let difference = num1 - num2;
console.log(difference); // output : -1

// . Task 3: Write a program to multiply two numbers and log the result to the console.
let product = num1 * num2;
console.log(product) // output : 12

// . Task 4: Write a program to divide two numbers and log the result to the console.
let quotient = num1/num2;
console.log(quotient); //output : 0.75

// . Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let remainder = num1%num2;
console.log(remainder);//output : 3


// Activity 2: Assignment Operators
// . Task 6: Use the += operator to add a number to a variable and log the result to the console.
num1 += num2;
console.log(num1); //output : 7

// . Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
num1 -= num2;
console.log(num1);//output : 3


// Activity 3: Comparison Operators
// . Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log(num2>num1); //output := true
console.log(num2<num1); //output := false

// . Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let num3 = 3;
console.log(num1>=num3);//output := true
console.log(num1>=num2);//output := false
console.log(num2>=num3);//output := true
console.log(num2<=num3);//output := false

// . Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let strNum = '3';
console.log(num1==strNum);//output := true
console.log(num1===strNum);//output := false


// Activity 4: Logical Operators
// . Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if(num1<=num2 && num1<=num3){
    console.log(num1 ,'is smallest number');
}
else{
    console.log(num1 ,'is not the smallest number');
}
// . Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
let age = 20;
let hasPermission = false;

if (age >= 18 || hasPermission) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

// . Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("User is not logged in.");
} else {
    console.log("User is logged in.");
}

// Activity 5: Ternary Operator
// . Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let result = (num1 >= 0) ? "The number is positive." : "The number is negative.";
console.log(result);

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let number1 = 10;
let number2 = 5;

let addition = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let rem = number1 % number2;

console.log("Addition:", addition);         // 15
console.log("Subtraction:", subtraction);   // 5
console.log("Multiplication:", multiplication); // 50
console.log("Division:", division);         // 2
console.log("Remainder:", remainder);       // 0

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the
// results.
let a = 8;
let b = 12;

let isEqual = (a == b);
let isNotEqual = (a != b);
let isGreaterThan = (a > b);
let isLessThan = (a < b);
let isGreaterThanOrEqual = (a >= b);
let isLessThanOrEqual = (a <= b);

console.log("Is Equal:", isEqual);                     // false
console.log("Is Not Equal:", isNotEqual);              // true
console.log("Is Greater Than:", isGreaterThan);        // false
console.log("Is Less Than:", isLessThan);              // true
console.log("Is Greater Than or Equal:", isGreaterThanOrEqual); // false
console.log("Is Less Than or Equal:", isLessThanOrEqual); // true

let logicalAnd = (a < 10 && b > 10);
let logicalOr = (a < 10 || b > 10);
let logicalNot = !(a == b);

console.log("Logical AND:", logicalAnd);   // true
console.log("Logical OR:", logicalOr);     // true
console.log("Logical NOT:", logicalNot);   // true

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let number = -3;

let ans = (number >= 0) ? "The number is positive." : "The number is negative.";
console.log(ans);  // The number is negative.
