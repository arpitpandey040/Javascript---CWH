//1. create a variable ot type string and try 
// to add a number to it.

let a = "arpit";
let b = 6;
console.log(a+b);

// 2. use typeof operator to find the
//  datatype of the string in last question
console.log(typeof(a+b));
// 3. create a const object in javascript. 
// Can you change it to hold a number later ?
const obj = { //obj is a reference to this object
    name : "arpit",
    section : 1,
    isPrincipal : false
}
// obj = "harry"; // no we cannot change it to hold another variable


// 4. tyr to add a new key to the const object in problem 3. 
// Were you able to do it?
obj['friend'] = "shubham";
console.log(obj)

// 5. Write a JS program to create a word 
// meaning dictionary of 5 words.

const dict ={
    appreciate: "recognize the full worth of",
    atarxia : "a state of freedom from emotional disturbance and anxiety", 
    yakka : "work, especially hard work."

}
console.log(dict.yakka);
