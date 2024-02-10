let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(10_000); //kept my promise
        reject(new Error("i lied, you'r not getting your money back "))
    }, 3000)//represent two days
});

promise
    .then((money) => {
        if (money === 10_000) {
            console.log("Yay!, I got my money back ");
        }


    }).catch(error => {
        console.error("☹️", error.message)
    })


// fulfilled state - successful outcome
// rejected state - error
// pending state - neither fullfilled nor rejected 
// setteled state - it represents -fulfilled state / rejected state 
