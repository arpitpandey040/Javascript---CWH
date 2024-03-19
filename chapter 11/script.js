// prototype
// let a ={
//     name :"Arpit",
//     language: "Javascript",
//     run: ()=>{
//         alert("self run")
//     }
// }
// console.log(a)

// let p = {
//     run: ()=>{
//         alert("run")
//     }
// }

// p.__proto__= {
//     name2 : "jackie"
// }

// a.__proto__ = p
// a.run()

// console.log(a.name)



// classes and objects

class RailwayForm {
    // constructor
    constructor(givenName, trainNo){
        console.log("constructor called... "+ givenName+ " " + trainNo)
    }

    submit(){
        alert( this.name + " Form submitted")
    }

    cancel() {
        alert(this.name + " 's form is cancelled")
    }
    // fill(name){ // no need
    //     this.name = name
    // }
}

// let harry = new RailwayForm("Harry", 12321)
// harry.fill("Harry") // constructor can easily complete the job
// let Arpit = new RailwayForm()
// Arpit.fill("Arpit")

// harry.submit()
// Arpit.submit()
// Arpit.cancel()


  