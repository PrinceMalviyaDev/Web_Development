console.log(document);   // It will show the html code on devtools' console.

console.dir(window.document); //It will show the complete document object of the window object
console.dir(document);   // It is same as the line above.

console.dir(document.body);  //Prints Body object on console.

console.log(document.body);  //Prints the html code of the body.

console.dir(document.body.childNodes[1]);  //Prints the div object i.e., the first child of the body.

document.body.childNodes[3].style.backgroundColor = "green";   //Change the design on the runtime.
document.body.childNodes[3].style.color = "white";   

document.body.childNodes[3].innerText = "Changed heading using JS!";   //Changed the heading