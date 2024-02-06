// object literal syntax

// let person = {
//     firstName : "Lakshay",
//     lastName : "Soni"
// }

let anotherPerson = new Object();
anotherPerson.firstName = "Pradeep";
anotherPerson.lastName = "kumar";
console.log(anotherPerson)

//function constructor 

function person(){
    this.firstName = "lakshay";
    this.lastName = "soni";

}

let lakshay = new person();
console.log(lakshay)
