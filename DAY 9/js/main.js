
// var a = 2;
// function printMe(){
//     console.log(a);
// }
// printMe();
// console.log(a);

/* the above thing in lexicul enviroment */
// execution context 
// 1 global object 
// 2 this
// 3 reference to outer enviroment

//hoisting
// var somevariable = "devnest"; //decleration
// console.log(somevariable); //undefined 


// function someFunction(){
//     console.log("from somefunction",somevariable)
// }

// someFunction();
// someFunction();

// console.log(somevariable)

// execution context created 
// 2 phrases  

// creation phase 
// loads variables and function in memory 

// execution the statements line by line 


var myName = "lakshay";
function printName(){
    console.log(myName);
    printAnotherName();

}

function printAnotherName(){
    var myName = "navneet";
    console.log(myName);
    printSomeOtherName();

}

function printSomeOtherName(){
    var myName = "yuvraj";
    console.log(myName);
}

console.log(myName);
printName();