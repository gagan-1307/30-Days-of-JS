// Activity 1: Objects
// Task 1: Create an object representing a book
let bookDetails = {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 1997
};
console.log(bookDetails); // {title: "Harry Potter", author: "JK Rowling", year: 1997}

// Task 2: Access and log the title and author properties
console.log(bookDetails.title);  // Harry Potter
console.log(bookDetails.author); // JK Rowling

// Activity 2: Object Methods
// Task 3: Add a method to return the book's title and author
bookDetails.getDetails = function() {
    return `${this.title} by ${this.author}`;
};
console.log(bookDetails.getDetails()); // Harry Potter by JK Rowling

// Task 4: Add a method to update the book's year property
bookDetails.updateYear = function(year) {
    this.year = year;
};
bookDetails.updateYear(2000);
console.log(bookDetails); // {title: "Harry Potter", author: "JK Rowling", year: 2000}

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library
let library = {
    name: "Gagan's Library",
    books: [
        {
            title: "Harry Potter",
            author: "JK Rowling",
            year: 1997
        },
        {
            title: "Lord of the Rings",
            author: "JRR Tolkien",
            year: 1954
        }
    ]
};
console.log(library);
// {
//     name: "Gagan's Library",
//     books: [
//         { title: 'Harry Potter', author: 'JK Rowling', year: 1997 },
//         { title: 'Lord of the Rings', author: 'JRR Tolkien', year: 1954 }
//     ]
// }

// Task 6: Access and log the name of the library and the titles of all the books
console.log(library.name); // Gagan's Library
console.log(library.books[0].title); // Harry Potter
console.log(library.books[1].title); // Lord of the Rings

// Activity 4: The this Keyword
// Task 7: Add a method to return the book's title and year
bookDetails.bookYear = function() {
    return `${this.title} was written in ${this.year}`;
};
console.log(bookDetails.bookYear()); // Harry Potter was written in 2000

// Activity 5: Object Iteration
// Task 8: Use a for ... in loop to iterate over the properties of the book object
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};
for (let key in book) {
    console.log(key, book[key]);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object
const keys = Object.keys(book);
console.log("Keys:", keys); // ["title", "author", "year"]

const values = Object.values(book);
console.log("Values:", values); // ["The Great Gatsby", "F. Scott Fitzgerald", 1925]
