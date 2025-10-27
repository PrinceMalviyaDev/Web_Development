let Boxes = document.getElementsByClassName("box");  //returns an html collection

for(let i = 0; i < 5; i++){
    Boxes[i].style.color = "white";
}

// boxes[3].style.backgroundColor = "red";
// boxes[3].style.color = "white";


let redBox = document.getElementById("red");
console.log(redBox);

// redBox.style.backgroundColor = "red";
// redBox.style.color = "white";


document.querySelector(".box").style.backgroundColor = "green";


console.log(document.querySelectorAll(".box"));  //returns a node list, you can not style a list
document.querySelectorAll(".box")[2].style.backgroundColor = "red";  //you have to use the elements one at a time

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "red";
});  //you can use loop for selecting all the elements


e = document.getElementsByTagName("div");
console.log(e); //returns an html collection


console.log(e[3].matches("#red"));  //returns true
console.log(e[4].matches("#red"));  //returns false


console.log(e[2].closest(".container"));
console.log(e[3].closest("#red"));

console.log(e[4].closest("html"));


console.log(document.querySelector(".container").contains(e[3]));  //returns true

console.log(document.querySelector(".container").contains(document.querySelector("body")));   //returns false

console.log(document.querySelector("body").contains(document.querySelector(".container")));   //returns true