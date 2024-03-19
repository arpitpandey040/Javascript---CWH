console.log("var vs let, const")
//var is globally scoped => change in any block will 
// be the value of the variable .
var a = "arpit"
console.log(a);
{
    a = "pandey"
    console.log(a);
}
a = "NIT JSR"
console.log(a);


// let is scope variable. any change within a
//  block does not affect the value of that 
//  variable outside the block. 
let b = "abc"
console.log(b);
{
    let b = "pandey"
    console.log(b);
}
console.log(b);

const author = "Steve"
author = "jobs" // throws error because cosnt cannot be after once