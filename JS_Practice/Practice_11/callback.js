function sum(a, b){
    console.log(a + b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}

calculator(10, 10, sum);  // Do not pass the callback with parenthesis, it will show error.


calculator(10, 10, (a, b) => {
    console.log(a + b);
});  // Passing an arrow function as callback.