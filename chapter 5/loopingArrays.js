let num = [34, 22, 73, 92, 12, 35]
// for loop
// for(let i= 0; i<num.length; i++){
//     console.log(num[i])
// }


// for each loop
// num.forEach((Element) => {
//     console.log(Element)
// })

// Array.from => is used to convert html collection into array
// let name = 'harry';
// let arr= Array.from(name);
// console.log(arr);

// // for of loop
// for(let i of num){
//     console.log(i);
// }

// // for in 
// for (const key in num) {
//     console.log(num[key]);
// }
 

// // let num = [34, 22, 73, 92, 12, 35]

// console.log(num);

// // map is used when we need a new array 
// let a = num.map((value, index, array)=>{  // map create a new array // if we want we can use all three aurgements or use one or two
//     console.log(value, index,array); // in similar way we can also operate with for each loop
//     return value+5;
// })
// console.log(a);


// filter =>

// let a2= num.filter((key)=>{
    
//     // console.log(key);
//     return key>50;
// })
// console.log(a2);

// reduce method

let a3 = num.reduce((a, b)=>{
    return a/b;
})
console.log(a3);
