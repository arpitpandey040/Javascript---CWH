// 7 types of primitive data typeo
// N - null
// N - Number
// S- String
// S - Symbol
// B - BigInt
// B - Boolean
// U - undefined

let a = null;
let b = 234;
let c = true; // can also be false
let d = BigInt("74712943") + BigInt("732734");
let e = "harry";
let f = Symbol("i am a nice symbol")
let g = undefined;
// console.log(a,b,c,d,e,f,g);

// to find out of the data type of a value

// console.log(typeof d);
// console.log(typeof f);
// console.log(typeof c);
// console.log(typeof a);

// non-premitive data type

//objects => to create key value pairs
// ab object is created as follows

const item = {
    "harry" : true,
    "subh" : false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Rohan"]);
