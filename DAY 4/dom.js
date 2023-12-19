const para = document.createElement("p");
para.textContent = "this is created using DOM API";

const span = document.createElement("span"); //dom model
span.id = "span-id";
span.className = "blue";
span.innerHTML = " this is span created using <em> dom.createElement</em>";
span.style.backgroundColor = "yellow";

para.appendChild(span);

// console.log(window.document.title);

const span2 = document.createElement("span"); //dom model
span2.id = "span2-id";
span2.className = "blue";
span2.textContent = " this is span2 created using dom.createElement";
span2.style.backgroundColor = "yellow";
para.appendChild(span2);

const data = document.getElementsByClassName("blue");

console.log(data);
document.body.appendChild(para);

const hobbies = ["watching movies", "studing", "coding"];
const list = document.createElement("ul");

for (let hobby of hobbies) {
  list.innerHTML += "<li class='blue'>" + hobby + "</li>";
}
document.body.appendChild(list);

// get the element
// console.log(document.getElementById("span-id"));
// console.log(document.getElementsByClassName(""));
// console.log(document.querySelector("p").textContent);
// console.log(document.querySelectorAll("p"));
// console.log(document.querySelector(".blue"));
// console.log(document.querySelector("#span2-id"));