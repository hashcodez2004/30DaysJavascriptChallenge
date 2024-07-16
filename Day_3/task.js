/*
Day 3: Control Structures

Activity 1: If-Else Statements
Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

Activity 2: Nested If-Else Statements
Task 3: Write a program to find the largest of three numbers using nested if-else statements.

Activity 3: Switch Case
Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

Activity 4: Conditional (Ternary) Operator
Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

Activity 5: Combining Conditions
Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
*/

// Activity-1
let a=99;
if(a>0) console.log("+ve");
else if(a<0) console.log("-ve");
else console.log("zero");

let age=15;
if(age>=18) console.log("eligible");
else console.log("not eleigible");

// Activity-2
let x=34,y=89,z=1;
if(x>=y){
    if(x>=z) console.log("1st is largest");
    else console.log("3rd is largest");
}
else if(y>=z) console.log("2nd is largest");
else console.log("3rd is largest");

// Activity-3
let week=3;
switch (week) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break; 
    case 7:
        console.log("Sunday");
        break;    
    default:
        console.log("Enter a valid Input");
        break;
}

// Activity-4
let isEven=18;
(isEven%2)?(console.log("Even")):(console.log("Odd"));

// Activity-5
let year=2004;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}