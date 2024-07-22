// Day 4: Loops
// Activity 1: For Loop
// . Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i=1;i<=10;i++){
    console.log(i); 
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// . Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i=1;i<=10;i++){
    console.log(`${5} x ${i}=${5*i}`);
}
// Output:
// 5 x 1=5
// 5 x 2=10
// 5 x 3=15
// 5 x 4=20
// 5 x 5=25
// 5 x 6=30
// 5 x 7=35
// 5 x 8=40
// 5 x 9=45
// 5 x 10=50


// Activity 2: While Loop
// . Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while (i<=10) {
    sum = sum + i;
    i++;
}
console.log(sum);
// Output: 55

// . Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let num = 10;
while(num>=1){
    console.log(num);
    num--;
}
// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do ... While Loop
// . Task 5: Write a program to print numbers from 1 to 5 using a do ... while loop.
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);
// Output:
// 1
// 2
// 3
// 4
// 5

// . Task 6: Write a program to calculate the factorial of a number using a do ... while loop.
let fact = 1;
let n = 5;
do {
    fact = fact * n;
    n--;
} while (n > 1);
console.log(fact);
// Output: 120

// Activity 4: Nested Loops
// . Task 7: Write a program to print a pattern using nested for loops:
let rows = 5;
let string = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < i; j++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
/*
Output:
* 
* * 
* * * 
* * * * 
* * * * * 
The next star is for comment 😊
*/

// Activity 5: Loop Control Statements
// . Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// . Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
