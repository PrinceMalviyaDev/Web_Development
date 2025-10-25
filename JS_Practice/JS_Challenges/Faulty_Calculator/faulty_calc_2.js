const readline = require('readline');

function askQuestion(query){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(query, answer => {
            rl.close();
            resolve(answer);
        });
    });
;}

async function main(){
    let num1 = Number(await askQuestion("Enter first number: "));
    let num2 = Number(await askQuestion("Enter second number: "));
    let operator = await askQuestion("Choose Operator: ");

    let result = faulty_calc(num1, num2, operator);
    console.log(`Result : ${result}`);
}

main();

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