let moneyLended = 10_000;
let promise = new Promise((resolve, reject) => {
    console.log("in first prmosie");
    setTimeout(() => {
        console.log("resolving...")
         //kept my promise
        resolve(10_000);
        // resolve(16_000);
        // resolve(8_000);
        //reject(new Error("i lied, you'r not getting your money back "))
    }, 3000)//represent two days
});

promise
    .then((money) => {
        console.log("in first then");
        console.log(money);
        if (money >= moneyLended) {
            console.log("Yay!, I got my money back ");
        }
        return money;
    }).then(moneyReceived).
    then(extraMoney => {
        if (extraMoney) {
            console.log("wow my friend is generous, now i can buy some cars")
        }
        console.log("deposite the lended amount back to the back");

    }).catch(error => {
        console.error("☹️", error.message)
    })


// fulfilled state - successful outcome
// rejected state - error
// pending state - neither fullfilled nor rejected 
// setteled state - it represents -fulfilled state / rejected state 


function moneyReceived(amountRecieved) {
    return new Promise((resolve, reject) => {
        console.log("in money received");
        console.log(amountRecieved);
        if (amountRecieved > moneyLended) {
            resolve(amountRecieved - moneyLended);

        } else if (amountRecieved < moneyLended) {
            reject(new Error("oh wait, i have recieved the entire amount "))
        } else {
            console.log("resolving....")
            resolve(0);
        }
    })
}

