// Day 13 : Modules
// Activity 1: Creating and Exporting Modules
// . Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import { add,myDetails } from "./modules.mjs";
console.log(add(3,4));//output: 7

// . Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script
console.log(myDetails.name);//output: Gagan
console.log(myDetails.age);//output: 18
myDetails.printDetails();
// output
// Name: Gagan
// Age: 18


// Activity 2: Named and Default Exports
// . Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { sub,mul } from "./modules.mjs";
console.log(sub(5,2));//output: 3
console.log(mul(5,2));//output: 10

// . Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import div from "./modules.mjs";
console.log(div(10,2));//output: 5


// Activity 3: Importing Entire Modules

// . Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as myPlant from "./plantCare.mjs"
console.log(myPlant.plant.name);//output: "Tomato"
console.log(myPlant.plant.needsWater());//output: "I need to water my plant"

// Activity 4: Using Third-Party Modules

// . Task 6: Install a third-party module (e.g., lodash ) using npm. Import and use a function from this module in a script.
import pkg from 'lodash';
const { chunk } = pkg;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = chunk(numbers, 3);
console.log(chunkedArray); 
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]


// . Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
import axios from 'axios';
async function fetchData() {
  try {
    const response = await axios.get('https://api.github.com/users/gagan-1307');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();
