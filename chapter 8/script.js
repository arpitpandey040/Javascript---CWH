// // some peice of the code might not work in vs code but it run in browser fine 👍

// console.log(document.getElementsByTagName('div')[0])
// // returns as a object with its properties
// console.dir(document.getElementsByTagName('div')[0]);

// console.log(document.body.firstChild.nodeName) 
// console.log(document.body.firstElementChild.nodeName)



//attributes and their methods
let first = document.getElementById("first");
// get =>  method to get the value of the attribute
// let a = first.getAttribute("class")
// console.log(a);

// // has => method to check existance of an attribute
// console.log(first.hasAttribute("class"));
// console.log(first.hasAttribute("style"));


// set => method to used to set the value of an attribute

// first.setAttribute("hidden", "true")

// first.setAttribute("class", "true sachin");

// remove => removes attribue 
// first.removeAttribute("class");


// console.log(first.attributes);


// console.log(first.dataset);
// console.log(first.dataset.game);
// console.log(first.dataset.player);

//insertion methods

// let a = document.getElementsByTagName('div')[0];

// a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';

// let div = document.createElement('div');
// div.innerHTML = '<h1>Hello World</h1>'
// a.appendChild(div)// puts in the last
// a.prepend(div)// puts in starting of element

// a.before(div)//puts before outside the container
// a.after(div); // puts after outside the container
// a.replaceWith(div)



// insert adjcent html

// first.insertAdjacentHTML('beforebegin', '<div class= "test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend', '<div class= "test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div class= "test">afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div class= "test">afterend</div>');

//node removal

// first.remove();



// changing html classes
// first.className = "red text-black"
// first.classList.remove("red");

// first.classList.add("yellow");
// first.classList.toggle("yellow");
// console.log(first.classList.contains("yellow"));
// console.log(first.classList.contains("red"));
// console.log(first.classList.contains("text-black"));


// set interval 

// document.write("hello i am this page")

// const sum =(a, b) =>{
// console.log("yes i am running " + (a+b));
// }


// setTimeout(sum, 1000, 1, 2);
// let a = setTimeout(() => {
//     alert("i am inside of settimeout.")
// }, 5000);

// let b = prompt("do you want to run the settimeout ? (y/n)");
// if("n"==b){
//     clearTimeout(a);
// }

// // clearTimeout(a); // to clear timeout
// console.log(a);



// set time-out

// let  a= setInterval(() => {
//     alert("setinterval")
// }, 3000);

// clearInterval(a)


// browser event

// let a = document.getElementsByClassName("container")[0];

// a.onclick = () =>{
//     let b = document.getElementsByClassName("container")[0];
//     b.innerHTML = "hello world";
// }


// add eventlistener and remove eventlistener
 
let x = function(e){ // e is event object
    console.log(e.target);
    console.log(e.type, e.clientX, e.clientY);
    
    // alert("hello world1!");
}
// let y = function(e){
//     alert("hello world2!");
// }
// add eventlister
btn.addEventListener('click', x);
// btn.addEventListener('click', y);


// let a = prompt("What is your favourite number ?");
// // remove eventListener
// if(a == 12){
//     btn.removeEventListener('click', x); // never write  fucntion here. enter the value of that funciton instead of writing the same fucntion because it does not work.
// }