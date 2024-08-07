// Day 16: Recursion
// Activity 1: Basic Recursion

// Task 1: Recursive factorial function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1

// Task 2: Recursive Fibonacci function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55

// Activity 2: Recursion with Arrays

// Task 3: Recursive sum of array elements
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30
console.log(sumArray([])); // Output: 0

// Task 4: Recursive maximum element in an array
function maxArray(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], maxArray(arr.slice(1)));
}
console.log(maxArray([1, 5, 3, 9, 2])); // Output: 9
console.log(maxArray([7, 4, 8, 2])); // Output: 8
console.log(maxArray([-3, -1, -4, -2])); // Output: -1

// Activity 3: String Manipulation with Recursion

// Task 5: Recursive string reversal
function reverseString(str) {
    if (str === '') return '';
    return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString('hello')); // Output: 'olleh'
console.log(reverseString('world')); // Output: 'dlrow'
console.log(reverseString('abcde')); // Output: 'edcba'

// Task 6: Recursive palindrome check
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, str.length - 1));
}
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('level')); // Output: true

// Activity 4: Recursive Search

// Task 7: Recursive binary search
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
}
console.log(binarySearch([1, 3, 5, 7, 9], 7)); // Output: 3
console.log(binarySearch([2, 4, 6, 8, 10], 5)); // Output: -1
console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2

// Task 8: Recursive count occurrences
function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: 3
console.log(countOccurrences([5, 6, 7, 8], 9)); // Output: 0
console.log(countOccurrences([3, 3, 3, 3], 3)); // Output: 4

// Activity 5: Tree Traversal (Optional)

// Task 9: Recursive in-order traversal of binary tree
function inOrderTraversal(node) {
    if (!node) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}
const tree = {
    value: 4,
    left: {
        value: 2,
        left: { value: 1 },
        right: { value: 3 }
    },
    right: {
        value: 6,
        left: { value: 5 },
        right: { value: 7 }
    }
};
inOrderTraversal(tree); // Output: 1, 2, 3, 4, 5, 6, 7

// Task 10: Recursive depth of binary tree
function depthOfTree(node) {
    if (!node) return 0;
    return 1 + Math.max(depthOfTree(node.left), depthOfTree(node.right));
}
console.log(depthOfTree(tree)); // Output: 3
const shallowTree = { value: 1, left: { value: 2 } };
console.log(depthOfTree(shallowTree)); // Output: 2
