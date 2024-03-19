// class RailwayForm {
//     // constructor
//     constructor(givenName, trainNo, address){
//         console.log("constructor called... "+ givenName+ " " + trainNo)
//         this.name = givenName
//         this.trainNo = trainNo
//         this.address = address
//     }
//     preview() {
//         alert(this.name + " your form is submitted for train no : "+ this.trainNo + " your address is " + this.address) 
//     }
//     submit(){
//         alert( this.name + " Form submitted")
//     }

//     cancel() {
//         alert(this.name + " 's form is cancelled")
//         this.trainNo = 0
//     }
// }

// let harry = new RailwayForm("Harry", 12898, "239, Pecific ocean ")
// harry.preview()
// harry.submit()
// harry.cancel()
// harry.preview()


// inheritance && "extends" keyword

// class Animal{
//     constructor(name, color){
//         this.name = name
//         this.color = color
//     }
//     run(){
//         console.log(this.name + " is running")
//     }
//     shout(){
//         console.log(this.name + " is shouting") 
//     }
// }

// class Monkey extends Animal {
//     eatBanana(){
//         console.log(this.name + " is eating banana")
//     }
// }

// let ani = new Animal("Bruno", "White")
// let mon = new Monkey("chimpu", "Brown")

// ani.shout()
// mon.eatBanana()
// mon.shout()

// method overriding

// class Employee{
//     constructor(name){
//         console.log(`${name }- Employee's constructor is here`)
//     }
//     login(){
//         console.log(`Employee has logged in`)
//     }

//     logout(){
//         console.log(`Employee has logged out`)
//     }

//     requestLeave(leaves){
//         console.log(`Employee has requested for ${leaves} leaves - auto approve`)
//     }
// }

// class programmer extends Employee {  
//     // constructor(...args){   // if there is no constructor in the child class, this is created automatically
//     //     super(...args)
//     // }    
//     constructor(name){
//         super(name)
//         console.log(`this is newly written constructor`)
//     }
//     requestCoffee(x){
//         console.log(`Emploayee has request ${x} coffess`)
//     }
//     // method overriding
//     requestLeave(leaves){
//         super.requestLeave(5)
//         console.log(`one extra is granted`)
//         // console.log(`Employee has requested ${leaves + 1} leaves(one extra)`)
//     }
// }

// let e = new programmer("Arpit")
// e.login()
// e.requestLeave(5)


// static method

// class Animal{
//     constructor(name){
//         this.name = name
//     }

//     walk(){
//         console.log("Animal, " + Animal.capitalize(this.name)+ " is walking")
//     }
//     static capitalize(name){
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length)
//     }
// }

// let j = new Animal("jack")
// j.walk()

// getter setter
// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     fly(){
//         console.log("mai ud rha hu")
//     }

//     get name() {
//         return this._name
//     }    
//     set name(newName) {
//         this._name = newName
//     }    
// }
// class Rabbit extends Animal{
//     eatCarrot(){
//         console.log("Eating carrot")
//     }
// }

// // let a = new Animal("Jack")
// let a = new Rabbit("Jack")

// a.fly()
// a.name = "bruno" // using setter
// console.log(a.name) // using getter
// let c = 56

// console.log(a instanceof Animal)
// console.log(a instanceof Rabbit)
// console.log(c instanceof Animal)


// practise chapter 11

/*1.create a javascript class to create a complex number. 
create a constuructor to set the real and the complex part
2. Write a method to add two complex numbers in  the above class.
3. Create a class student from a class Human override a method & use changes
4. See if student is an instance of Human using instanceof Keyword
5. Use getter and setters ot set and get the real and imaginary part of the complex numbers
*/

class complex{
    constructor(real, imaginary){
        this.real = real
        this.imaginary = imaginary
    }
    add(num){
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
}

console.log("hi")
let a = new complex(3,4)
let b = new complex(9,5)

a.add(b)
console.log(`${a.real} + ${a.imaginary}i`)
