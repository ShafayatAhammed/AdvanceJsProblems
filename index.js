// // Question 1 Start

// function scopeTest() {
//   if (true) {
//     var varVariable = "I am var";
//     let letVariable = "I am let";
//     const constVariable = "I am const";
//   }
//   console.log(varVariable);
//   console.log(letVariable);
//   console.log(constVariable);
// }

// scopeTest();

// // Answer to the question no 1

// // in this code we make a function name scopeTest and inside this function we have a if statement, where we are telling if true then declare variable with var, let and const. after that we assign a value to them with string. then in the main function body after the if outside the if statement block we console log them. i have asked to tell what will be the output of the code and why, the answer is after running the function the first time that will throw an error for the letVariable : letVariable is not defined, because let is block scoped, variables defined with let also become block scoped so it can't be accessed from outside of the block. that also happens in the case of const too, so that after we remove the letVariable from console log we will see again the same error just the error name will be : constVariable is not defined. but also if we remove this we will get an output of I am var in the console. because the console log varVariable. so now the question can be why we can't see any error like let,const in the case of var. the answer is var is global scoped. because of this is global,so that it can be accessed from anywhere from it's scope. like we defined varVariable in the if block, but it can be accessed outside the if block, that is not happening in the case of let and const. that means variables defined with var will global to it's scope. like the varVariable is global to it's function scope scopeTest, so that we can access the variable from anywhere in the scopeTest function, but i can't be accessed from outside of the function, because it is global to it's function scope not to the whole document. (End).

// // Question 1 End

// // Question 2 Start

// // Answer to the question no 2

// const greet = (name,greet = "Hello")=>{
//     return `${greet}, ${name}!`;
// }

// console.log(greet("Alice"));
// console.log(greet("Bob", "Good morning"));

// // Question 2 End

// // Question 1 Start

// // Answer to the question no 3

// const sum = (...numbers)=>{
//     return numbers.reduce((theSum,theNumber)=> theSum + theNumber,0);
// }

// console.log(sum(1, 2, 3));
// console.log(sum(10, 20, 30, 40));
// console.log(sum(5));

// // Question 3 End

// // Question 4 Start

// // Answer to the question no 4

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const mergedArray = [...array1,...array2,...array3];

// console.log(mergedArray);

// // Question 4 End

// // Question 5 Start

// Answer to the question no 5

// const person = {
//     name : "John",
//     age : 30,
//     greet : function(){
//         return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
//     }
// }

// console.log(person.greet());

// // Question 5 End

// // Question 6 Start

// // Answer to the question no 6

// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// // Question 6 End

// // Question 7 Start

// // Answer to the question no 7

// const name = "Alice";
// const age = 25;

// const message = `My name is ${name} and I am ${age} years old.`;
// console.log(message);

// // Question 7 End

// // Question 8 Start

// // Answer to the question no 8

// const students = [
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 85 },
//     { name: "Charlie", grade: 92 }
//   ];

// for (const student of students) {
//     console.log(`Student name is ${student.name} and his grade is ${student.grade}`);
// }

// // Question 9 Start

// // Answer to the question no 9

// const nestedArrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

// for (const array of nestedArrays) {
//     console.log(array.reduce((sum,number)=> {return sum + number},0));
// }

// // Question 9 End

// // Question 10 Start

// // Answer to the question no 10

// const a = 5;
// const b = 10;

// const result = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(result);

// // Question 10 End
