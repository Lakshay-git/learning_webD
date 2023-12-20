const para = document.createElement("p");
para.textContent = "this is created using DOM API";
para.classList.add("one")
para.classList.add("second-class")


para.classList.remove("second-class")
para.setAttribute("id","js-para");
console.log(para.getAttribute("id"))

const span = document.createElement("span")
span.id = "span-id";
span.className = "blue";
span.innerHTML = "this is span created using <em>dom.createElement<em>"
span.style.backgroundColor = "yellow"

para.appendChild(span)
document.body.appendChild(para);

const hobbies = ["coding", "swimming", "jogging"];

const list = document.createElement("ul");

for (let hobby of hobbies) {
    list.innerHTML += "<li class='blue'>" + hobby + "</li>";
}

document.body.appendChild(list);

//get the elements 

console.log(document.getElementById("first-para").textContent)

console.log(document.getElementsByClassName("blue"));

console.log(document.querySelector("ul"));




