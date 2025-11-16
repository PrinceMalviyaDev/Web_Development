// global or function scope:

{
    var num1 = 10;
}

console.log(num1)  // Allowed : num1 has a global scope


function hello(){
    var x = 10;
}

//console.log(x);  // Not Allowed : "x" has a function-level scope



// block level scope:

{
    let num2 = 10;
    const num3 = 10;
}

// console.log(num2)  // can't be accessed outside the block (ReferenceError)
// console.log(num3)     // can't be accessed outside the block (ReferenceError)


// Redeclarations:

var a;          // declared (value is undefined)
var a = 10;     // redeclared + initialized (first value assigned)
var a = 20;     // redeclared + reassigned (NOT reinitialized)
a = 30;         // reassigned (NOT redeclared)


let b;          // declared (value is undefined)
//let b = 10;   // ❌ redeclaration of "let" is NOT allowed
b = 20;         // initialized (first assignment)
b = 30;         // reassigned (second assignment)


// const c;     // const declarations must be initialized
const c = 10;   // declared + initialized (first value assigned)
//const c = 20; // ❌ redeclaration NOT allowed
//c = 20;       // reassignment not allowed