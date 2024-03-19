// const changeBodyRed = () =>{
//     document.body.firstElementChild.style.background = "powderblue"
// }

// let b= document.body;

// console.log("first child of b is : ", b.firstChild) // can give anything
// // gives only element
// console.log("first element child of b is : ", b.firstElementChild) 

// let t = document.body.firstElementChild.firstElementChild;
// console.log(t);
// console.log(t.rows);
// console.log(t.caption);

// console.log(t.tHead.firstElementChild);
// console.log(t.tFoot);



// matches

let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");

console.log(id1); 
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

 
// closest => returns closest ancester
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));

// contains => returns true an elelments a contains b otherwise return false

console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));






