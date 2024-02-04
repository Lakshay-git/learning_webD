function printText(){
    console.log("hello");
}

printText.areYouAnObject = true;

let a = 2;

let person = {
    firstName:"Lakshay",
    lastName:"Soni",
    getName : function(){
        console.log(this);
        return this.firstName + " " + this.lastName
    }
}


console.log(this.a);
console.log(person.getName());

function greetPerson(){
    console.log("Namaste",this.getName)
}

greetPerson(){
    onslotchange.log("Namaste",this.getName());
}

greetPerson();

// blind

greetPerson.bind()