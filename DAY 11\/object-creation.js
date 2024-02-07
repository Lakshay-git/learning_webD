// object literal syntax

// let person = {
//     firstName : "Lakshay",
//     lastName : "Soni"
// }

//using the object 
let anotherPerson = new Object();
anotherPerson.firstName = "Pradeep";
anotherPerson.lastName = "kumar";
console.log(anotherPerson)

//function constructor 

function person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}

let lakshay = new person("lakshay","soni");
console.log(lakshay)

let pradeep = new person("pradeep","kumar");
console.log(pradeep)

// person.prototype.printName = function (){
//     return this.firstName+ "..."+ this.lastName;
// }
// console.log(lakshay.firstName.tostring());
// console.log(jane.printName());

//prototype inheritance in js

let firstSet = [1,3,5,8,10];
let anotherSet = [2,6,9,12,45,30,27];

console.log(firstSet,anotherSet);

Array.prototype.evenNumbers = function() {
    return this.filter(function(item){
        return item % 2 === 0
    })
}


// call by values && call by reference 


//agr tum object mai a = 4 karoge too b bhi 4 ho jaega kyuki dono same memory location hai 
// par niche wale mai a = 4 bhi karoge too b = 2 hi rahega 
// kyuki ye dono different memory location hai 



let a = 2 ;
let b = a ;

// object.create

let org = {org:"devnest"};
let  newPersonForOrg = Object.create(org, {name:{value:"foo"}});
console.log(newPersonForOrg );

org.location = "Kota";
console.log(newPersonForOrg);

Object.hasOwn(newPersonForOrg, "name");

//object.assign()

let someP = {name:"lakshay"};
let carP = {car:"someCar"};

console.log(Object.assign({}, someP, carP ))

console.log(Object.assign({}, newPersonForOrg, {car: " BMW"}));  

//class

class shape {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
}

let rectangle = new shape(10,20);
console.log(rectangle);

class square extends shape{
    constructor(dimension){
        super(dimension,dimension)
    }
}
console.log(new square(10).area())