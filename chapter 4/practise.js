
// 1. what wil tge following print in js?
// console.log("var\".length")
let name = "Har\""
console.log(name.length)

// 2. Explore the includes, start with & end with 
// function of a string
 // str.includes() =>returns true if a string contains that word


const sentence = 'the quick brown fox jumps over the lazy dog';
const word = 'fox';
console.log(sentence.includes(word));

console.log(`The word " ${word}" ${sentence.includes(word) ? 'is' : 'is not' } in the sentence`);


const sentence1 = 'the quick brown fox jumps over the lazy dog';
const word1 = 'fox2';
console.log(sentence.includes(word1));

console.log(`The word " ${word1}" ${sentence1.includes(word1) ? 'is' : 'is not' } in the sentence`);

// complete this two
// starts with
// ends with   

// 3.Write a program to convert a given stirng to lowercase

console.log(name.toLowerCase());
// 4.Extract the amoutn outof theis string 
// "Please give Rs 1000"

let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice("Please give Rs ".length))
console.log(amount)

// 5. Try to change 4th character 
// of a given string were you able to do it?
str[4] = 'p'//this is not possible beacaue string in JS is immutable
console.log(str);

