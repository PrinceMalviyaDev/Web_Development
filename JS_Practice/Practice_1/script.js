alert("Hello! Welcome to JS Practice.");

console.log("Hello! Welcome to JS Practice.");

var a = prompt("Enter your name:");
console.log("Your name is " + a);

var isTrue = confirm("Are you sure you want to leave this page and blast your computer?");

if(isTrue){
    console.log("Computer is blasting");
} else {
    console.log("Computer is not blasting");
}

document.title = "JS Practice 1";

document.body.style.backgroundColor = "lightblue"; //It adds inline css to the element