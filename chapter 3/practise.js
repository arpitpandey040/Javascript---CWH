// 1. write a program to print the marks of a
//  student in an object using for loop 
// obj = { harry: 98, rohan : 70, aakash : 7}

const marks ={
    harry : 98,
    rohan : 70,
    aakash : 65,
    monika : 49 
}

for (let index = 0; index < Object.keys(marks).length; index++) {
    console.log("the marks of " + Object.keys(marks)[index] + " are " + marks[Object.keys(marks)[index]]);
}


// 2. write the program in Q1 using for in loop

for(let key in marks){
    console.log("marks of " + key + " are " + marks[key] );
}

// 3. Write a program to print "try again" utnil
//  the user enters the correct number

// let correctNum = 4;
// let i ;
// while(i != correctNum){
//     i = prompt("Enter the correct number");
//     console.log("Try Again");
// }
// console.log("you have entered a correct no");

// 4. Write a fucntion to find mean of 5 numberss

const mean = (a, b, c, d)=>{
    return (a+b+c+d)/4;
}
let res = mean(4,5,6,7);
console.log(res);
