const dynamicContent = document.getElementById("dynamic-text")
console.log(dynamicContent)

// const phrases = ["software engineer... ","mentort...","human being..."]


// let phraseIndex = 0;

// let letterIndex = 0;
// const typingSpeed = 150;
// const erasingSpeed = 75;
// function printLetters(phrase){

//     if(letterIndex = phrase.length){
//         //clear letter which have been typed
//         clearLetters();
//     }



//     else if(letterIndex < phrase.length){
//         dynamicContent.textContent += phrase.charAt(letterIndex);
//     letterIndex += 1;
//     setTimeout(function(){
//         printLetters(phrase)
//     },typingSpeed)
    
     
//     }
    
// }

// function clearLetters(){
//     if(letterIndex = -1){
//         phraseIndex = (phraseIndex*1) % phrases.length
//         letterIndex = 0
//         printLetters(phrases[phraseIndex])
//     }
//     else if(letterIndex > -1){
//         let updatePhrase = "";
//         for(let index =0; index < letterIndex; index++){
//           updatePhrase +=  phrases[phraseIndex].charAt(index);
//         }
//         console.log(updatePhrase)
//         dynamicContent.textContent = updatePhrase;
//         letterIndex -= 1;
//         setTimeout(clearLetters,erasingSpeed)
//     }
// }
// printLetters(phrases[phraseIndex])

const phrases = ["Aspiring engineer.. ","Student...","human being..."];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 75;

function printLetters(phrase) {
    if (letterIndex === phrase.length) {
        // clear letters that have been typed
        clearLetters();
    } else if (letterIndex < phrase.length) {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex += 1;
        setTimeout(function() {
            printLetters(phrase);
        }, typingSpeed);
    }
}

function clearLetters() {
    if (letterIndex === -1) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
    } else if (letterIndex > -1) {
        let updatePhrase = phrases[phraseIndex].substring(0, letterIndex);
        dynamicContent.textContent = updatePhrase;
        letterIndex -= 1;
        setTimeout(clearLetters, erasingSpeed);
    }
}

printLetters(phrases[phraseIndex]);
//making portfolio 