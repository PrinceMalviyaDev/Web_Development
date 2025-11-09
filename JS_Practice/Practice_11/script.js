console.log("one");
console.log("two");
console.log("three");

// The code will not for the setTimeout function to write hello.(Asynchronous JS)
setTimeout(() => {    
    console.log("hello");
}, 2000);

console.log("four");
console.log("five");

// Output: 
// one
// two
// three
// four
// five
// hello

// With the help of setTimeout(), we are performing "Asynchronous JS", the program didn't wait for the callback to write "hello".