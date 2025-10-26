console.log("Hello World!");

console.dir(document.body.childNodes);

let container = document.body.childNodes[1];

console.log(container);

console.log(container.firstChild);
console.log(container.lastChild);

console.log(container.childNodes[1]);
console.dir(container.childNodes[1]);

console.dir(container.childNodes[1].childNodes);

console.dir(container.firstElementChild);
console.log(container.firstElementChild);

container.lastElementChild.style.color = "red";
container.lastElementChild.style.backgroundColor = "yellow";

console.log(container.firstElementChild.parentElement);

console.log(document.body.firstElementChild);

console.dir(document.body.firstElementChild.children);
console.dir(document.body.firstElementChild.children[3]);

console.log(container.children[3].previousElementSibling);

console.dir(document.body.children[1].rows);