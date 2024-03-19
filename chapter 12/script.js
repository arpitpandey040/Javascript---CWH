// IIFE => imediately invoked function expressions

// let a = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(345)
//         }, 4000);
//     })
// } 
    
// (async()=>{
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// })()

// destructering

// let arr = [3,5,8,12,15, 0, 98, 162]
// no need to do this
// let a= arr[0]
// let b = arr[1]

// let [a,b,c, ...rest] = arr

// console.log(a,b,c,rest)

// let [a, , , b, ,...rest] = arr
// console.log(a, b, rest)


// let {a, b} = {a:1, b:5}
// console.log(a, b)

// spread operator

// let arr1 = [12, 19, 23]
// let obj1 = {...arr1}

// console.log(obj1)

// function sum(v1, v2, v3){
//     return v1 + v2 + v3
// }

// console.log(sum(...arr1))

// let obj2 ={
//     name : "Arpit",
//     company : "apple",
//     address : "vns"
// }

// console.log({...obj2, name : "Harry"})
// console.log({name : "Harry", ...obj2}) // this prints obj2 object without changing any value

// local and global scope 
// block scope
// {
//     let a = 8 // let and const are only block level
// }

// console.log(a) // this gives an error
// global scope
// let p = 5
// function scope
// function ax(){
//     let a = 8 
//     console.log(a)
//     console.log(p)
// }
// ax()
// console.log(p)
// console.log(a)

// hoisting

// following two lines will run successfully due to hoisting
// console.log(a)
// greet()

// function greet(){
//     console.log("Good Morning")
// }

// var a = 9; // declaration hoisted to the top but intializaton is not


// closure in javascript

// message = "Good global"

// function hello() {
//     let message = "Good Morning"
//     {
//         let message = "Good Afternoon"
//         console.log("Hello 1 " + message)
//     }
//     // console.log("Hello 1 " + message)
//     let c = function hello2() {
//         console.log("I am c " + message)
//     }
//     return c
// }
// let c = hello()
// c()

// function returnfun(){
//     const x = () => {
//         let a = 1
//         console.log(a)
//         const y = () => {
//             // let a = 2
//             console.log(a)
//             const z = () => {
//                 // let a = 3
//                 console.log(a)
//             }
//             z()
//         }
//         a = 999
//         y()
//     }
//     return x
// }
// let a = returnfun()
// a()

// arrow function

// const sayHello = (name, greeting) => console.log(greeting+ " " + name)
// // sayHello("harry", "Good Afternoon")

// const x = {
//     name : "harry",
//     role : "Js developer",
//     exp : "12 years",
//     show : function() {
//         // let that = this
//         // console.log(this)
//         // setTimeout(function() {
//         //     console.log(`the name is ${that.name} and the role is ${that.role}`)            
//         // }, 4000);
//         setTimeout(() => {
//             console.log(`the name is ${this.name} and the role is ${this.role}`)            
//         }, 4000);
//     }
// }
// // console.log(x.name, x.exp)
// x.show()

// practise chapter 12

// 1.Write a javascript program to print the following after 2 seconds of delay
// Hello
// world
// const a = async(text) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)            
//         },2000)
//     })
// }

// (
//     async() => {
//         let text = await a("Hello")
//         console.log(text)
//         text = await a("World")
//         console.log(text)
        
//     }
// )()
// 2.Write a javascript program to find average of numbers in an array using spread syntax

// function average(a, b, c, d, n){
//     return (a + b + c + d)/n;
// }
 
// let x =[1, 3, 5, 15]
// console.log(average(...x, x.length))

// 3. Write a javascript function which resovles a Promise 
// after n seconds. the function takes n as the parameter . 
// Use an IIFE to execute the functions with different value of n

const b = async (text, n=2) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(text)
        }, 1000*n)
    })
}

(
    async()=>{
        let text = await b("I am resolve after 5 seconds", 5 )
        console.log(text)
        text = await b("I am resolve after 2 seconds", 2 )
        console.log(text)
    }
)()
 
// 4.Writa a simple interest calculator using javascript

function SimpleInterest(p, r, t){
    return (p*r*t)/100;
}

console.log(SimpleInterest(1000, 5, 2));