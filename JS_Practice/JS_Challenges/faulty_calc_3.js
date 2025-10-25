function faulty_calc(a, b, op){
    if(Math.random() < 0.1){
        if(op == '+'){
            return a - b;
        }else if(op == '-'){
            return a * b;
        }else if(op == '*'){
            return a / b;
        }else{
            return a + b;
        }
    }else{
        if(op == '+'){
            return a + b;
        }else if(op == '-'){
            return a - b;
        }else if(op == '*'){
            return a * b;
        }else{
            return a / b;
        }
    }
};

let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");

let operator = prompt("Choose the Operator (+ , - , * , /): ");

console.log(`First Number is ${num1}`);
console.log(`Second Number is ${num2}`);
let result = faulty_calc(Number(num1), Number(num2), operator);
console.log(`The result is ${result}.`);