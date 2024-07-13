//Activity-1
var a = 20;
// console.log(a);

let b = 30;
// console.log(b);

//Activity-2
const c = true;
// console.log(c);


/*
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers, it was used earlier only.
6. You cannot re-declare a variable declared with let or const.
7. Scope of a variable defined with let is limited to the block in which it is declared while variable declared with var has the global scope. With var, you 
can redeclare a variable within the same scope without encountering an error. However, with let, attempting to redeclare a variable within the same scope will
 result in a syntax error. This is because let is block-scoped, meaning it is limited to the block (enclosed by curly braces) in which it is defined, whereas 
 var is function-scoped or globally scoped, depending on where it is declared. This distinction helps in preventing unintended variable redeclarations and 
 makes the code easier to reason about.
*/

//Activity-3
const accountId = 234;
let myName = "Harsh";
let isIndian = true;
const names = ["Harsh","Ashi","Ayush","Anurag","Akshika","Harshit"];
const harsh = {identity:"Harsh", place:"meerut", age:23};

/*
If you Understand Objects, you Understand JavaScript.
Objects are containers for Properties and Methods.
Properties are named Values.
Methods are Functions stored as Properties.
Properties can be primitive values, functions, or even other objects.
*/

console.log(typeof(accountId), typeof(myName), typeof(names), typeof(isIndian), typeof(harsh));

//Activity-4
myName = "Sharma";
// console.log(myName);

//Activity-5
accountId = 345; //cannot be re-assigned