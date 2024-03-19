// let p = fetch("https://goweather.herokuapp.com/weather/ny")

// p.then((response)=>{
//     return ((response)=>{
//         ()=>{
//             return response.jason()
//         }
//     })
// }).then((response)=>{
//     console.log(response)
// })

// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     console.log(response.headers)
//     return response.json()
// }).then((value2)=>{
//     console.log(value2)
// })


// sending post requet with fetch API

// const createtodo = async()=>{
//     let options = {
//         method : "POST",
//         headers : {
//             "Content-type" : "application/json"
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           })
//     }
    
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response

// }


// const gettodo = async(id) =>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     let r = await response.json()
//     return r
// }
// const mainFunc = async()=>{
//     let todo = await createtodo()
//     console.log(todo)
//     console.log(await gettodo(101))
// }

// mainFunc()
 
// let options = {
//     method : "POST",
//     headers : {
//         "Content-type" : "application/json"
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       }),
// }
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));



// console.log(document.cookie)
// document.cookie = "name = Harry"
// document.cookie = "name2 = Harry2"
// document.cookie = "name = Harry bhai"

// let key = prompt("Enter your key")
// let value = prompt("Enter your value")
// // document.cookie = `${key} = ${value}`
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}` 
// console.log(document.cookie)



// local storage

// let key = prompt("Enter your key ")
// let value = prompt("Enter your value ")

// localStorage.setItem(key, value)

// console.log(`The valye at ${key} is ${localStorage.getItem(key)}`)

// if(key =="red" || key == "blue"){
//     localStorage.removeItem(key)
// }


// if(key == "0"){
//     localStorage.clear()
// }


// session storage

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "laddu")
// sessionStorage.removeItem("name")



// storage Event

window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}

