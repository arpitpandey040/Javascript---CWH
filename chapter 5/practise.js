
// 1. create an array of numbers and take input
//  form the user to add numbers to this array

let num = [34, 22, 73, 90, 12, 130];
// let a = prompt("enter the number");
// a = Number.parseInt(a);
// num.push(a);


// 2.keep adding number to the array in (1) 
// until 0 is added to the array


// while(a != 0){
//     let a = prompt("Enter the num");
//     a= Number.parseInt(a);
//     num.push(a);
// }

// 3. filter for numbers divisible by 10 from a 
// given array

// let a = num.filter((a)=>{
//     return (a%10 == 0);
// })
// console.log(a);

// 4. create an array of square of given numbers.
let squares = num.map((val)=>{
    return val*val;
})
// console.log(squares);
// 5. use reduce to calculate factorial of a given
//  number from an array of first n natural number
//   forman array of first n natual numbers (n being
//      the number whose factorial need to be calcualted)
let n = [1,2,3,4,5,6, 7]

let res = n.reduce((x, y)=>{ 
    return x * y;
}) 
console.log(res); 