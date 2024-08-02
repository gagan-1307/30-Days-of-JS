// Day 11: Promises and Async/Await
// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
function hello() {
    return new Promise((resolve) => {
        console.log("waiting...");
        setTimeout(() => {
            console.log("Hello Gagan");
            resolve("hello");
        }, 2000);
    });
}

hello().then(data => console.log(data));

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
function rejectPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Error: Operation failed after 2 seconds");
        }, 2000);
    });
}

rejectPromise().catch(error => console.log(error));

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData(step, delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data from step ${step}`), delay);
    });
}

fetchData(1, 1000)
    .then(result => {
        console.log(result);
        return fetchData(2, 2000);
    })
    .then(result => {
        console.log(result);
        return fetchData(3, 1500);
    })
    .then(result => {
        console.log(result);
        console.log("All data fetched in sequence.");
    })
    .catch(error => console.log(error));

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function fetchSequentialData() {
    console.log("fetching data 1...");
    console.log(await fetchData(1, 2000));
    console.log("fetching data 2...");
    console.log(await fetchData(2, 2000));
    console.log("fetching data 3...");
    console.log(await fetchData(3, 2000));
}

fetchSequentialData();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
function fetchDataWithError() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Error: Data fetching failed"), 2000);
    });
}

async function handleError() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

handleError();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchApiData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}

fetchApiData();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
function resolvePromise(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data from API ${id}`), 2000);
    });
}

const promise1 = resolvePromise(1);
const promise2 = resolvePromise(2);
const promise3 = resolvePromise(3);

Promise.all([promise1, promise2, promise3])
    .then(values => console.log(values))
    .catch(error => console.log('Error:', error));

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promise1, promise2, promise3])
    .then(value => console.log(value))
    .catch(error => console.log('Error:', error));
