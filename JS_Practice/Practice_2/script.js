console.log("Hello Everyone!");

var a = 10;  //var has global or function scope
let d = 15;  //let has block scope


a = a + 5;  //Allowed since 'a' is declared with var
var b = 20;


var c = "Srishti";  //Allowed
var _c = "Hello";  //Allowed
var $c = "World";  //Allowed
var c1 = "JS";   //Allowed


// var 1c = "Python";  //Not Allowed - cannot start with a number
// var @c = "Java";    //Not Allowed - cannot start with special character except _ and $


console.log(a + b);
console.log("Welcome " + c);


console.log(typeof a, typeof b, typeof c);


const pi = 3.14;
// pi = 3.14159; // This will throw an error since 'pi' is a constant



let x = 50;
{
    let x = 100;  // This 'x' is different from the outer 'x'
    console.log("Inner let x:", x);
}
console.log("Outer let x:", x);



var y = 5;
{
    var y = 10;  // This 'y' is the same as the outer 'y'
    console.log("Inner var y:", y);
}
console.log("Outer var y:", y);



function testScope() {
    var z = "ECMAScript";  // This 'z' is different from the outer 'z'
    console.log("Inner var z:", z);
}
testScope();
// console.log("Outer var z:",z); // This will throw an error since 'z' is not defined in this scope


let m;  //Initialized with undefined
console.log(m);

var n;  //Initialized with undefined
console.log(n);

// const p;  not allowed, const must be initialized