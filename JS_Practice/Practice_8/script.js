console.log(document.querySelector(".box"));
console.dir(document.querySelector(".box"));

console.log(document.querySelector(".box").innerHTML);   // Hey I am a box.

console.log(document.querySelector(".box").innerText);  // Hey I am a box.

console.log(document.querySelector(".container").innerHTML);  // returns the html code inside the container.

console.log(document.querySelector(".container").innerText);  //"Hey I am a box."(for one div child), and "Hey I am a box.\nHeyI am a box."(for 2 div childs with same texts)

console.log(document.querySelector(".container").outerHTML);  // returns the container code as well as inside childs also in text format



console.log(document.querySelector(".container").tagName);

console.log(document.querySelector(".container").nodeName);


console.log(document.querySelector(".container").textContent);


console.log(document.querySelector(".container").hidden);  //returns false because the container is not hidden.

document.querySelector(".container").hidden = true;  // It hides the element.

document.querySelector(".container").hidden = false;  // Unhide the element.


document.querySelector(".box").innerHTML = "Hey I am Prince.";   //changes the inner HTML of first box.

(document.querySelectorAll(".box"))[0].innerHTML = "Hey I am Prince.";  //changes the inner html of first box
(document.querySelectorAll(".box"))[1].innerHTML = "Hey I am Prince.";  //changes the inner html of second box.


console.log(document.querySelector(".box").hasAttribute("style"));  //returns true because the box has the attribute named style


console.log(document.querySelector(".box").getAttribute("style"));  //returns the style i.e.,display:flex

document.querySelector(".box").setAttribute("style", "display:grid");  //changes the style to display:grid

console.log(document.querySelector(".box").getAttribute("style"));  //returns the style i.e., display:grid

document.querySelector(".box").removeAttribute("style");   //removes the style attribute.


console.log(document.querySelector(".box").dataset);   //returns all the data attributes of the element