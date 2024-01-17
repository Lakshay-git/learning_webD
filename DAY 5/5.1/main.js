document.addEventListener("DOMContentLoaded",function(){
    function handleMouseOver (event){
        console.log(event);
    }
    //event = contains information about the event 
    
    
    
    document.getElementById("start").addEventListener("click",function handClick(){
        document.addEventListener("mouseover" ,handleMouseOver)
    })
    
    document.getElementById("stop").addEventListener("click",function handClick(){
        document.removeEventListener("mouseover" , handleMouseOver )
    })
    
    
    document.addEventListener("keydown" , function(e){
        console.log("keypress")
        console.log(e.key)
        if (e.key == "2"){
            e.preventDefault();
        }
    })
    
    
    
    
    document.addEventListener("keydown" , function(e){
        console.log("keypdown")
        console.log(e.key)
        if (e.key == "2"){
            e.preventDefault();
        }
    })
    
    document.addEventListener("keypup" , function(e){
        console.log("keyup")
        console.log(e.key)
        if (e.key == "2"){
            e.preventDefault();
        }
    })
    
    document.getElementById("username").addEventListener("focus",function(event){
        console.log("focus event happend ")
    })
    
    document.getElementById("username").addEventListener("blur",function(event){
        console.log("blur event happend ")
    })
    //events 
    document.querySelector(".parent").addEventListener("click", function(event){
        console.log("parent clicked ");
    },true)
    
    document.querySelector(".child").addEventListener("click",function(event){
        console.log("child clicked");
        
    },true)
    
    document.getElementById("subchild").addEventListener("click", function (event) {
        console.log("subchild clicked");
        //event.stopPropagation(); // Corrected typo here
    }, true);
    
})

//difference between loaded and dom content loaded 
