// let num2 = 10;
// if (num2 > num1) {
//   console.log(num2 + "is greater than" + num1);
// } else if (num2 < num1) {
//   console.log(num2 + "is smaller than" + num1);
// } else {
//   console.log("both the numbers are equal");
//   console.log("this is another statement");
// }
// num1 = 10;
// num2 = 5;
// if (num2 > num1) {
//     console.log(num2 + "is greater than" + num1);
//   } else if (num2 < num1) {
//     console.log(num2 + "is smaller than" + num1);
//   } else {
//     console.log("both the numbers are equal");
//     console.log("this is another statement");
//   }
function compare(firstNumber, secondNumber) {
    if (secondNumber > firstNumber) {
      console.log(secondNumber + " is greater than " + firstNumber);
    } else if (secondNumber < firstNumber) {
      console.log(secondNumber + " is smaller than " + firstNumber);
    } else {
      console.log(" both the numbers are equal ");
    }
  }
  
    compare(5,10
      )
      compare(10,5)
      compare(10,10)
  
  
     function print() {
      console.log("this is printed in the console")
     } 
     print();
  // function expression suntax
  
     const add = function addnumber(firstNumber,secondNumber) {
     return firstNumber + secondNumber;
     }
        const result = add(10,6);
      console.log(result)
  
      // ananymous function 
       const subtract = function( firstNumber, secondNumber) {
          return firstNumber - secondNumber
       }
  
       console.log(subtract (11,4))
  
  
       const person = {
          firstname: "dustin",
          lastname: " beber",
          print: function (){
              console.log(" this function is a property of an object ")
          }
       };
  
       person.print();
  
  
  // coding conventions
  // use meaningfull names
  // use camel case
      