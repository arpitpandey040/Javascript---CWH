let marks = [81, 33, 43, 59, null, "not given"];

console.log(marks);
console.log(marks.length);
console.log(marks[1]);
console.log(marks[2]);
// accessing that elements does not exist.
console.log(marks[7]);
// adding new element
marks[7] = "fail"
console.log(marks[7]);
//  update marks
marks[7] = 75;
console.log(marks[7]);

//array methods

// toString. => convert into string
let num = [4,5,2, 6];
console.log(typeof(num));
let b = num.toString()


// join method =>

let c = num.join("_");
console.log(num);
console.log(c, typeof(c));

let d = num.join(" and ");
console.log(d, typeof(d));


// pop()method => removes last element
num.pop();
console.log(num);

// push method => add elements 
num.push(5);
console.log(num);

// shift method=> removes first element

let r = num.shift();
console.log(r);
console.log(num);

// unshift =>add a new element in the beginning
let p = num.unshift(67);
console.log(p);
console.log(num);

// delete => not a method , it's a operator 
delete num[0]; // does not change array lengh
console.log(num);

// concat => to join more than one array

let num2 = [23, 45, 54, 89, 93, 30];
let num3 = [ 89, 93, 30, 23, 45, 5];
// let new_num = num.concat(num2, num3);
// console.log(new_num)

// sort => sort array alphabethically
num[0] = 37
console.log(num)
num.sort()
console.log(num)
//  to sort in ascending or decending order
const compare = (a, b)=>{
    return a-b
}
console.log(num) 
num.sort(compare)
console.log(num)

//  reverse => reverse the array
num.reverse()
console.log(num)

// splice 
let splice_val = num.splice(2, 3, 1000, 323, 433, 544 ) // splice (start, end, add elements...)
console.log(num)
console.log(splice_val)

// slice => same as string but does not change the original array

