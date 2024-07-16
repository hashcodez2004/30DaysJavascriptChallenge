/*
Day 4: Loops
Activity 1: For Loop
Task 1: Write a program to print numbers from 1 to 10 using a for loop.
Task 2: Write a program to print the multiplication table of 5 using a for loop.

Activity 2: While Loop
Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
Task 4: Write a program to print numbers from 1 to 10 using a while loop.

Activity 3: Do...While Loop
Task 5: Write a program to print numbers from 1 to 10 using a do...while loop.
Task 6: Write a program to calculate the factorial of a number using a do...while loop.
Activity 4: Nested Loops
Task 7: Write a program to print a pattern using nested for loops:
* 
* * 
* * * 
* * * * 
* * * * * 

Activity 5: Loop Control Statements
Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
*/

// Activity 1: For Loop
// Task 1: Print numbers from 1 to 10 using a for loop
console.log("Task 1:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Print multiplication table of 5 using a for loop
console.log("\nTask 2:");
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}

// Activity 2: While Loop
// Task 3: Calculate the sum of numbers from 1 to 10 using a while loop
console.log("\nTask 3:");
let sum = 0;
let j = 1;
while (j <= 10) {
    sum += j;
    j++;
}
console.log("Sum:", sum);

// Task 4: Print numbers from 1 to 10 using a while loop
console.log("\nTask 4:");
let k = 1;
while (k <= 10) {
    console.log(k);
    k++;
}

// Activity 3: Do...While Loop
// Task 5: Print numbers from 1 to 10 using a do...while loop
console.log("\nTask 5:");
let m = 1;
do {
    console.log(m);
    m++;
} while (m <= 10);

// Task 6: Calculate factorial of a number using a do...while loop
console.log("\nTask 6:");
let num = 5;
let factorial = 1;
let n = 1;
do {
    factorial *= n;
    n++;
} while (n <= num);
console.log(`Factorial of ${num} is:`, factorial);

// Activity 4: Nested Loops
// Task 7: Print a pattern using nested for loops
console.log("\nTask 7:");
for (let row = 1; row <= 5; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements
// Task 8: Print numbers from 1 to 10, skipping number 5 using continue statement
console.log("\nTask 8:");
for (let p = 1; p <= 10; p++) {
    if (p === 5) {
        continue;
    }
    console.log(p);
}

// Task 9: Print numbers from 1 to 10, stop the loop when number is 7 using break statement
console.log("\nTask 9:");
for (let q = 1; q <= 10; q++) {
    if (q === 7) {
        break;
    }
    console.log(q);
}
