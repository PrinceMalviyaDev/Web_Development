document.cookie = "name=prince";  // set call
console.log(document.cookie);
document.cookie = "name=srishti";
console.log(document.cookie);

let key = prompt("Enter your Key");
let value = prompt("Enter your Value");

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

console.log(document.cookie);