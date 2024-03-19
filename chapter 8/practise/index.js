
// 1.Write a program to show different alerts when different buttons are clicked
// completed in index.html

// 2. Create a website which is capable of storing bookmarks fo your favourite websites  using href 
// completed in index.html

// 3. Repeat question 2 using event listerers
// document.getElementById("google").addEventListener('click', function(){
//     window.location = "https://www.google.com";
//     window.focus();
// })
// document.getElementById("fb").addEventListener('click', function(){
//     window.location = "https://www.fb.com";
//     window.focus();
// })
// document.getElementById("twitter").addEventListener('click', function(){
//     window.location = "https://www.twitter.com";
//     window.focus();
// })


// 4. Write a javascript program to keep fetching contents of a website(Every 5 seconds)

// const fetchContent = async(url) =>{
//     con = await fetch(url);
//     let a = await con.json();
//     return a;
// }

// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url));
// }, 3000)

// 5. Create a glowing bulb effect using classlist toggle method in javascript

setInterval(async function(){
    document.querySelector('#bulb').classList.toggle("bulb")
}, 300)



