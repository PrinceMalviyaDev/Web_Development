/*
    node.append(e)  --> append at the end of node
    node.prepend(e) --> insert at the beggining of node
    node.before(e)  --> insert before node
    node.after(e)   --> insert after node
    node.replaceWith(e)  --> replaces node with the given node
*/


// {1} Create the a div element and append it inside the container.

let div = document.createElement("div");  //create a div element.

div.setAttribute("class", "created"); //set its attribute i.e., class.

div.innerHTML = "I am an appended div, created by <b>Prince</b>";  //put some HTML code inside the div i.e., text.

document.querySelector(".container").append(div);  //finally append the div inside the container.


// {2} Create a div element and prepend it inside the container.

let pdiv = document.createElement("div");

pdiv.setAttribute("class", "created");

pdiv.innerHTML = "I am a prepended div";

document.querySelector(".container").prepend(pdiv);


// {3} Create a div element and add it before the container.

let bdiv = document.createElement("div");

bdiv.setAttribute("class", "created");

bdiv.innerHTML = "I am added before the container";

document.querySelector(".container").before(bdiv);


// {4} Create a div element and add it after the container.

let adiv = document.createElement("div");

adiv.setAttribute("class", "created");

adiv.innerHTML = "I am added after the container";

document.querySelector(".container").after(adiv);


// {5} Replace the first div inside the container with another div.

document.querySelector(".box").replaceWith(div);