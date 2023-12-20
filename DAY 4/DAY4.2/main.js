let secondnumber = 5;
let firstnumber = 10;
// if (num2 > num1){
//     console.log(num2 + "is greater than"+ num1);

// }else if (num2 < num1){
//     console.log(num2 + "is less than "+ num1);

// }else{
//     console.log("both the numbers are equal");
//     console.log("this is another statement");

// }
// num1 = 10;
// num2 = 5;
// if (num2 > num1){
//     console.log(num2 + "is greater than"+ num1);

// }else if (num2 < num1){
//     console.log(num2 + "is less than "+ num1);

// }else{
//     console.log("both the numbers are equal");
//     console.log("this is another statement");

// }

function compareNumber(firstnumber, secondnumber){
    if (firstnumber > secondnumber){
            console.log(firstnumber + "is greater than"+ secondnumber);
        
        }else if (firstnumber < secondnumber){
            console.log(firstnumber + "is less than "+ secondnumber);
        
        }else{
            console.log("both the numbers are equal");
            console.log("this is another statement");
        
        }
    }

    compareNumber(4, 9);

function multiplynumber(num1,num2){
    return(num1*num2);
}

const result =  multiplynumber(9,5)
console.log(result)


//anonymous function
const subtract = function(firstnumber, secondnumber){
    return firstnumber - secondnumber

}
//invoking
console.log(subtract(3,5))

const person ={
    firstname : "john",
    lastname : "doe",
    print: function() {
        console.log("this function is a property of an object ")
    }
};

person.print();

//coding conventions in js

//camelCase
//