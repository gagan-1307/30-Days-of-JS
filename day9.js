// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements

// . Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("heading").innerHTML = "Hello, World!";

// . Task 2: Select an HTML element by its class and change its background color.
document.getElementsByClassName("list")[0].style.backgroundColor = "red";

// Activity 2: Creating and Appending Elements

// . Task 3: Create a new div element with some text content and append it to the body.
const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element with some text content.";
document.body.appendChild(newDiv);

// . Task 4: Create a new li element and add it to an existing ul list.
const newLi = document.createElement("li");
newLi.innerHTML = "<em>new List element</em>"
document.querySelector("ul").appendChild(newLi);

// Activity 3: Removing Elements

// . Task 5: Select an HTML element and remove it from the DOM.
document.querySelector("hr").remove();

// . Task 6: Remove the last child of a specific HTML element.
document.querySelector(".buttons").lastElementChild.remove();

// Activity 4: Modifying Attributes and Classes

// . Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let currAttr = document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://google.com");

// . Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector("h1").classList.add("invisible");
document.querySelector("h1").classList.remove("invisible");

// Activity 5: Event Handling

// . Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector("button");
button.addEventListener("click",()=>{
    document.querySelector("p").innerHTML = "You clicked the button!";
});

// . Task 10: Add a mouseover event listener to an element that changes its border color.
const heading = document.querySelector("h1");
heading.addEventListener("mouseover",()=>{
    heading.style.borderColor = "red";
    // heading.style.backgroundColor = "pink";
})