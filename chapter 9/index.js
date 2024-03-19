// Synchornous programming

// let a =  prompt("What is your name ?");
// let b =  prompt("What is your age ?");
// let c =  prompt("What is your favourite colour ?");

// console.log(a + " is "  + b + " years old and has "+ c +" favourite colour.")

// ASynchornous programming

// console.log("Start");
// setTimeout(() => {
//     console.log("hey that guy is a genius");
// }, 3000);

// console.log("End"); 

//callbacks

// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("Loaded srcipt with SRC: " + src);
//         callback(null, src);
//     }

//     script.onerror = function(){
//         console.log("Error loading script with src : "+ src);
//         callback(new Error("src got some error"));
//     }
//     document.body.appendChild(script);
// } 

// function hello(error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("Hello World" + src);
// }
// function goodMorning(error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("Good Morning" + src);
// }




// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello)
// loadScript("https://cdn.jsdelivr.net/mm   pm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodMorning)


//pyramid of doom

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src){
//     if(error){
//         console.log(error);
//         sendEmergencyMessageToCeo();
//         return;
//     }
//     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodMorning(error, src){
//         function goodMorning(error, src){
//             if(error){
//                 console.log(error);
//                 sendEmergencyMessageToCeo();
//                 return;
//             }
//             loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodMorning(error, src){function goodMorning(error, src){
//                 if(error){
//                     console.log(error);
//                     sendEmergencyMessageToCeo();
//                     return;
//                 }
//                 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodMorning(error, src){function goodMorning(error, src){
//                     if(error){
//                         console.log(error);
//                         sendEmergencyMessageToCeo();
//                         return;
//                     }
//                     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodMorning(error, src){function goodMorning(error, src){
//                         if(error){
//                             console.log(error);
//                             sendEmergencyMessageToCeo();
//                             return;
//                         }
//                         loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodMorning(error, src){
//                             function goodMorning(error, src){
//                                 if(error){
//                                     console.log(error);
//                                     sendEmergencyMessageToCeo();
//                                     return;
//                                 }
//                                 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodMorning(error, src){function goodMorning(error, src){
//                                     if(error){
//                                         console.log(error);
//                                         sendEmergencyMessageToCeo();
//                                         return;
//                                     }
//                                     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodMorning(error, src){})})
//                         })})})})
//     })
// })


// promises

// let promise = new Promise(function(resolve, reject){
//     alert("I am in Promise")
//     resolve(56);
// })

// console.log("hello one");
// setTimeout(() => {
//     console.log("hello two in 2 secs")
// }, 2000);
// console.log("hello three");

// console.log(promise)


// why use promise ==> promise is used for parallel execution
// fetch google.com homepage
// fetch pictures form the server
// fetch data from api
// print downloading
// rest of the script


// promise .then() && .catch()

// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     setTimeout(() => {
//         // console.log("i am a promise and i am resolved")
//         resolve(true);
//     }, 5000);
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     setTimeout(() => {
//         // console.log("i am a promise and i am rejected")
//         reject(new Error("i am an error"))
//     }, 5000);
// })

// console.log(p1, p2) 
// to get the value
// p1.then((value)=>{
//     console.log(value);
// })
// to catch the error
// p2.catch((error)=>{
//     console.log("some error occurred in p2");
// })

// p2.then((value) =>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })


// promise chainning
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("resolved after two seconds")
//         resolve(56)
//     }, 2000);
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("promise 2")            
//         }, 2000);
//     })
//     return p2;
// }).then((value)=>{
//     console.log("we are done");
//     return 2;
// }).then((value)=>{
//     console.log("now we are pakka done")
// })


// rewrite the laodscript function

// const loadScript = (src) =>{
//     return new Promise((resolve, reject) =>{
//         let script = document.createElement("script")
//         script.type = "text/javascript"
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             resolve("script has been loaded sir")
//         }
//         script.onerror = ()=>{
//             reject(0)
//         }
//     })
// }


// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")
// p1.then((value)=>{
//     console.log(value)
// }).then((value)=>{
//     console.log("second script ready")
// }).catch((eror)=>{
//     console.log("We are sorry but wea re having problems loading this script")
// })


// attacting multiple handlers


// let p1 = new Promise((resolve, reject)=>{
//     console.log(" Hey i am not resolved")
//     setTimeout(() => {
//         resolve(1)
//     }, 2000);
// })
// p1.then((value)=>{ // do not confuse this with promise chainning
//     console.log("Congratulations this promise has been resolved")

// })

// p1.then((value)=>{
//     console.log("Hurray")
// })


// promise api

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("vlaue 1")
//     }, 1000);
// })

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("vlaue 2")
        
//     }, 2000);
// })

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("vlaue 3")
        
//     }, 3000);
// })
// let p4 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject(new Error("error"))
        
//     }, 100);
// })

// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
//     console.log(value)
// })
// p3.then((value)=>{
//     console.log(value)
// })


// let promise_all = Promise.all([p1, p2, p3]) 
// let promise_all = Promise.allSettled([p1, p2, p3, p4]) 
// let promise_all = Promise.race([p1, p2, p3, p4]) 
// let promise_all = Promise.any([p1, p2, p3, p4]) 
// let promise_all = Promise.resolve(6) 
// let promise_all = Promise.reject("hey") 


// promise_all.then((value)=>{
//     console.log(value)
// })




// async await


// async function harry(){
//     let delhiWeather = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("27 deg")
//         }, 5000);
//     })
    
//     let bangloreWeather = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("21 deg")
//         }, 10000);
//     })
//     // return 5;
//     // delhiWeather.then(alert)
//     // bangloreWeather.then(alert)

//     console.log("fetching delhi weather please wait")
//     let delhiW = await delhiWeather
//     console.log("fetched delhi weather: " + delhiW)
//     console.log("fetching  banglore weather please wait")
//     let bangloreW = await bangloreWeather
//     console.log("fetched banglore weather: " + bangloreW)
//     return [delhiW, bangloreW]

// }

// // harry().then((value)=>{
// //     alert(value)
// // })

// const cherry = async()=>{
//     console.log("hey i am cherry and i am waiting")
// }


// // console.log(a)

// const main= async()=>{
    
//     console.log("welcome to weather control room")
//     let a = await harry()
//     let b = await cherry()
//     // a.then((value)=>{
//     //     console.log(value)
//     // })

// }

// main()



// error handaling try catch

// setTimeout(() => {
//     console.log("Hacking wifi.... please wait...")    
// }, 1000);


// // console.log(rahul) // throws an error and rest of code does not work

// try{
//     console.log(rahul)
// }
// catch(error){
//     console.log(error)
// }
// setTimeout(() => {
//     console.log("fetching username and password.... please wait...")
// }, 2000);

// setTimeout(() => {
//     console.log("hacking Rahul's facebook id.... please wait...")
// }, 3000);

// setTimeout(() => {
//     console.log("username and password of Rahul(+9157533285289) fetched.... please wait...")    
// }, 4000);




//error object
// try{
//     let age = prompt("enter your age")
//     age = Number.parseInt(age)
//     if(age > 150){
//         throw new ReferenceError("this is probably not true")
//     }
// // try{
// //     console.log(harry)
// //     // throw new Error("harry is not good")
// //     throw new ReferenceError("harry is not good")
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }

// console.log("this script is still running")

// finally

// try{
//     let a = 0;
//     console.log(program)
//     console.log("Program ran successfully");
// }catch(err){
//     console.log("this is an error");
//     console.log(p)
// }
// finally{            // why finally ?   => finally is executed no matter what. finally is used for clean up file
//     // close the file
//     // exit the loop
//     // write to the log file
//     console.log("i am a good boy")
// }

const f = () =>{
    
    try{
        let a = 0;
        // console.log(program)
        console.log("Program ran successfully");
        return;
    }catch(err){
        console.log("this is an error");
        console.log(p)
    }
    finally{            // why finally ?   => finally is executed no matter what. finally is used for clean up file
        // close the file
        // exit the loop
        // write to the log file
        console.log("i am a good boy")
    }

}

f()
console.log("end") 