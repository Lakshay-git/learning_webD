document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("menu-button").addEventListener("click" , showMenu)
    document.getElementById("menu-button-ka-lund").addEventListener("click" , lundMenu)
    document.getElementById("close-menu").addEventListener("click" , closeMenu)

})

function lundMenu() {
    const menu = document.querySelector("section.menu");
    const lund = document.querySelector("#menu-button-ka-lund");
    menu.style.display = "block";
    lund.style.display = "none";
}

function showMenu(){
    const menu = document.querySelector("section.menu");
    menu.style.height = "100%";

}

function closeMenu(){
    const menu = document.querySelector("section.menu");
    const lund = document.querySelector("#menu-button-ka-lund");
    menu.style.display = "none";
    lund.style.display = "block";
}