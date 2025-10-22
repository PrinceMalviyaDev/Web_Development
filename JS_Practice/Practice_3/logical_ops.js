// learn logical operators

let a = false;
let b = true;

console.log(a || a);  // false
console.log(a || b);  // true
console.log(b || a);  // true
console.log(b || b);  // true

console.log(a && a);  // false
console.log(a && b);  // false
console.log(b && a);  // false
console.log(b && b);  // true

console.log(a);  //false
console.log(!a);  //true