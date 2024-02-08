// ECMAScript ES6 

// template literal syntax 

// const firstName = "john";
// const age = "28";

// console.log("hi my name is " +name + " and my age is "+ age);
// console.log(`hi my name is ${name}  and my age is ${age}`);

//shorthand property

// let person = {firstName, age };
// console.log(person);

//destructing 

let anotherPerson = {
    firstName: "foo", lastName: "bar",
    address: {
        city: "Pune",
        state: " Maharashtra "
    }
}


let { firstName } = anotherPerson;
console.log(firstName);

const fruits = ["Apple", "Kiwi", "Orange"]

console.log(fruits[0])

const [, , Orange] = fruits;
console.log(`coming from destru array ${Orange}`);

//alias

// let{firstName: name} = anotherPerson;
// console.log("alias as name", givename);

//rest operator  -.... => ellipsis notation 

const { firstName: name, ...rest } = anotherPerson;
console.log(name, rest);

console.log(name, rest);
const [apple, ...rem] = fruits;
console.log(apple, rem);




const anotherListofFruits = ["strawberry", "pineapple"];

const moreFruits = [...fruits, ...anotherListofFruits];
console.log(moreFruits);


//arrow function 

function sum(firstNum, secondNum){
    return firstNum + secondNum;
}

let sumArrow = (firstName,secondNum) => firstNum + secondNum; 
