document.addEventListener("DOMContentLoaded",function(){
document.querySelector("form").addEventListener("submiit",function(event){
        event.preventDefault();
        const form = event.target
        console.log(form.username.value);
        console.log(form.email.value);
        const mobileNumber = parseInt(form.mobile.value);
        if(mobileNumber == NaN ){
            alert("you have enterd invalid number")
        }
        console.log("the mobile number is "+ mobileNumber)

    })
    document.addEventListener("click", function(){
        console.log(document.getElementById("outside").value);
})
    })
    



