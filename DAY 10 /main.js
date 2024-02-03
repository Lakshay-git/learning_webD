function add(firstNum){
    return function(secondNum){
        return firstNum + secondNum;
    }
}

let addWith = add(5);
console.log(addWith(2));
console.log(addWith(7));
console.log(addWith(12));


//

// document.addEventListener("click",function(){

// })

// calback function

// document.addEventListener("DOMContentLoaded",function(){
//     console.log("this function gets called back when the event occurs")
// })

function callMeOnceDone(fn){
    console.log("i am done");
    fn();
}

function printText(){
    console.log("hello");
}
callMeOnceDone(printText);

function printTextWithDelay(text){
    setTimeout(function (){
        console.log(text);
    },3000)
}
printTextWithDelay("i am printed with a delay ")