// Day 3: Control Structures

// Activity 1: If-Else Statements

// . Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let number = 7;
if(number === 0){
    console.log("number is zero");
}
else if (number>0) {
    console.log("number is positive");
}
else{
    console.log("number is negative");
}

// . Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
function check_voter(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}

check_voter(20);  // Output: The person is eligible to vote.
check_voter(16);  // Output: The person is not eligible to vote.


// Activity 2: Nested If-Else Statements
// . Task 3: Write a program to find the largest of three numbers using nested if-else statements.
function findLargestNumber(a, b, c) {
    let largest;
    
    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }
    
    console.log("The largest number is: " + largest);
}

findLargestNumber(10, 20, 30);  // Output: The largest number is: 30


// Activity 3: Switch Case
// . Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
function getDayName(dayNumber) {
    let day;

    switch(dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day number";
    }

    console.log(day);
}

getDayName(1);  // Output: Monday
getDayName(5);  // Output: Friday

// . Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.
function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 85 && score <= 100):
            grade = 'A';
            break;
        case (score >= 75 && score < 85):
            grade = 'B';
            break;
        case (score >= 65 && score < 75):
            grade = 'C';
            break;
        case (score >= 40 && score < 65):
            grade = 'D';
            break;
        case (score >= 0 && score < 40):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    console.log("The grade is: " + grade);
}

getGrade(95);  // Output: The grade is: A
getGrade(75);  // Output: The grade is: B

// Activity 4: Conditional (Ternary) Operator
// . Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
function checkOddEven(num) {
    (num%2==0)?console.log("Even"):console.log("Odd");
}

checkOddEven(7); // Output: Odd


// Activity 5: Combining Conditions
// . Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function checkLeapYear(year) {
    let isLeapYear;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    if (isLeapYear) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

checkLeapYear(2024);  // Output: 2024 is a leap year.

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
function checkNumber(num) {
    if (num > 0) {
        console.log(num + " is a positive number.");
    } else if (num < 0) {
        console.log(num + " is a negative number.");
    } else {
        console.log(num + " is zero.");
    }
}

checkNumber(10);  // Output: 10 is a positive number.
checkNumber(-5);  // Output: -5 is a negative number.
checkNumber(0);   // Output: 0 is zero.

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("The person is eligible to vote.");
    } else {
        console.log("The person is not eligible to vote.");
    }
}

checkVotingEligibility(20);  // Output: The person is eligible to vote.
checkVotingEligibility(16);  // Output: The person is not eligible to vote.

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
function getDayName(dayNumber) {
    let day;

    switch(dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day number";
    }

    console.log(day);
}

getDayName(1);  // Output: Monday
getDayName(5);  // Output: Friday

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 85 && score <= 100):
            grade = 'A';
            break;
        case (score >= 75 && score < 85):
            grade = 'B';
            break;
        case (score >= 65 && score < 75):
            grade = 'C';
            break;
        case (score >= 40 && score < 65):
            grade = 'D';
            break;
        case (score >= 0 && score < 40):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }

    console.log("The grade is: " + grade);
}

getGrade(35);  // Output: The grade is: F
getGrade(55);  // Output: The grade is: D

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
function checkLeapYear(year) {
    let isLeapYear;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    if (isLeapYear) {
        console.log(year + " is a leap year.");
    } else {
        console.log(year + " is not a leap year.");
    }
}

checkLeapYear(2024);  // Output: 2024 is a leap year.
checkLeapYear(1900);  // Output: 1900 is not a leap year.
checkLeapYear(2000);  // Output: 2000 is a leap year.
checkLeapYear(2021);  // Output: 2021 is not a leap year.


