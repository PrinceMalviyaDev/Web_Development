let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed");
}

let x = 1;
function main() {
    try {
        console.log("Sum is ", a + b * x);
        return true;
    }
    catch (error) {
        console.log("Error aa gaya bhai..");
        return false;
    }
    finally {
        console.log("all files are being closed and all the db connections are being closed.")
    }
}

let c = main();