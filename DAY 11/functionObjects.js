function printText() {
    console.log("hello");
}

printText.areYouAnObject = true;

let a = 2;

let person = {
    firstName: "Lakshay",
    lastName: "Soni",
    getName: function () {
        console.log(this);
        return this.firstName + " " + this.lastName
    }
}


console.log(this.a);
console.log(person.getName());

function greetPerson(greeting) {
    console.log(greeting, this.getName)
}

// greetPerson(){
//     onslotchange.log("Namaste",this.getName());
// }

greetPerson();

// blind
//create a new copy of the function that we calling bind
// let greetLakshay = greetPerson.bind(person)
// console.log(greetLakshay());

//call
//doesn't create a copy 

greetPerson.call(person, "Namaste")

// apply 

// arguments

function sum() {
    let total = 0;
    // let total = x+y+z+f;

    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];
    }

    return total;
}

console.log(sum(2, 3, 4, 5, 5))


//apply

greetPerson.apply(person, ["hello"]);

//function borrowing

let doctor = {
    firstName: "manthan",
    lastName: "soni"

}
console.log(person.getName.call(doctor))

//function currying

function logData(date, data) {
    console.log(date, data);
}

logData(new Date(), "this data to be logged")


let logNow = logData.bind(null, new Date());
logNow("this is another info to be logged  ")
logNow("some other data ")

//

// function add(firstNum){
//     return function (secondNum){
//         console.log(firstNum + secondNum)
//         return firstNum + secondNum;
//     }
// }


// add(5)(2)
// add(5)(7)
// add(6)(9)

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

let doubleTheNumber = multiply.bind(null, 2);
console.log(doubleTheNumber(2))
console.log(doubleTheNumber(3));

// default values for params

function printSomeText(text = " devnest"){
    console.log(text);
}
printSomeText();