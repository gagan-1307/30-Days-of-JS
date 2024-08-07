// Day 15: Closures
// Activity 1: Understanding Closures

// Task 1: Function returning another function with outer scope variable access
function outerFunction() {
    let outerVariable = 'Hello, World!';
    return function innerFunction() {
        return outerVariable;
    };
}
const innerFunc = outerFunction();
console.log(innerFunc()); // Output: Hello, World!

// Task 2: Closure with a private counter
function createCounter() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}
const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // Output: 1
counter.increment();
console.log(counter.getValue()); // Output: 2

// Activity 2: Practical Closures

// Task 3: Function to generate unique IDs
function uniqueIDGenerator() {
    let lastID = 0;
    return function() {
        lastID++;
        return lastID;
    };
}
const generateID = uniqueIDGenerator();
console.log(generateID()); // Output: 1
console.log(generateID()); // Output: 2

// Task 4: Closure capturing a user's name
function createGreeter(name) {
    return function() {
        return `Hello, ${name}!`;
    };
}
const greetGagan = createGreeter('Gagan');
console.log(greetGagan()); // Output: Hello, Gagan!

// Activity 3: Closures in Loops

// Task 5: Loop creating an array of functions
function createFunctions() {
    let functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}
const funcs = createFunctions();
funcs[0](); // Output: 0
funcs[1](); // Output: 1
funcs[2](); // Output: 2
funcs[3](); // Output: 3
funcs[4](); // Output: 4

// Activity 4: Module Pattern

// Task 6: Simple module using closures
const itemModule = (function() {
    let items = [];
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            items = items.filter(i => i !== item);
        },
        listItems: function() {
            return items;
        }
    };
})();
itemModule.addItem('apple');
itemModule.addItem('banana');
console.log(itemModule.listItems()); // Output: ['apple', 'banana']
itemModule.removeItem('apple');
console.log(itemModule.listItems()); // Output: ['banana']

// Activity 5: Memoization

// Task 7: Function that memoizes another function
function memoize(fn) {
    let cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(2, 3)); // Output: 5
console.log(memoizedAdd(2, 3)); // Output: 5 (cached)

// Task 8: Memoized factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached)
