// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's myName and age, and log the string to the console.
let myName = "Gagan";
let age = 18;
console.log(`Hi ${myName}, you are ${age} years old.`);
// Output: Hi Gagan, you are 18 years old.

// Task 2: Create a multi-line string using template literals and log it to the console.
const multilineStr = `Hi I am ${myName}.
I am ${age} years old.
I am learning JavaScript.`;
console.log(multilineStr);
// Output:
// Hi I am Gagan.
// I am 18 years old.
// I am learning JavaScript.

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const nums = [1, 2, 3];
const [first, second] = nums;
console.log(first, second); // Output: 1 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 1997
};
const { title, author } = book;
console.log(title, author); // Output: Harry Potter JK Rowling

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const fruits = ["Apple", "Banana", "Cherry"];
const moreFruits = ["Orange", "Mango", "Pineapple"];
const newFruits = [...fruits, ...moreFruits];
console.log(newFruits);
// Output: [ 'Apple', 'Banana', 'Cherry', 'Orange', 'Mango', 'Pineapple' ]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(num1, num2 = 1) {
    return num1 * num2;
}
console.log(product(5, 2)); // Output: 10
console.log(product(5)); // Output: 5

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const gameName = "Simon";
const score = 100;
const gameLevel = 5;

const game = {
  gameName,
  score,
  gameLevel,
  
  displayDetails() {
    console.log(`Game Name: ${this.gameName}`);
    console.log(`Score: ${this.score}`);
    console.log(`Level: ${this.gameLevel}`);
  },
  
  updateScore(newScore) {
    this.score = newScore;
    console.log(`Updated Score: ${this.score}`);
  },
};

console.log(game);
game.displayDetails();
game.updateScore(120);
// Output:
// { gameName: 'Simon', score: 100, gameLevel: 5, displayDetails: [Function: displayDetails], updateScore: [Function: updateScore] }
// Game Name: Simon
// Score: 100
// Level: 5
// Updated Score: 120

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const user = {
  [propName1]: "John",
  [propName2]: "Doe",
  [propName3]: 30,
  
  displayUser() {
    console.log(`First Name: ${this[propName1]}`);
    console.log(`Last Name: ${this[propName2]}`);
    console.log(`Age: ${this[propName3]}`);
  }
};

console.log(user);
user.displayUser();
// Output:
// { firstName: 'John', lastName: 'Doe', age: 30, displayUser: [Function: displayUser] }
// First Name: John
// Last Name: Doe
// Age: 30
