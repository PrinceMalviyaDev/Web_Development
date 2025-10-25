const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1, num2, operator;

rl.question("Enter first number: ", (input1) => {
    num1 = Number(input1);
    rl.question("Enter second number: ", function(input2){
        num2 = Number(input2);
        rl.question("Enter operator (+, -, *, /): ",function(op){
            operator = op;
            const result = faulty_calc(num1, num2, operator);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});

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