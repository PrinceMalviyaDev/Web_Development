let NUMBER = Number(prompt("Enter a number: "));

function factorial(num){
    let arr = Array.from(Array(num).keys());  //returns an array having numbers 0 to num
    
    let result = arr.reduce((accumulator, currentVal) => {
        return (accumulator * (currentVal+1));
    }, 1);
    console.log(`Factorial of ${num} is ${result}.`);
}

factorial(NUMBER);