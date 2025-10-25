let num = 0;

let factArray = [];
if(num == 0){
    console.log(1);
    return;
}
for(let i = num; i > 0; i--){
    factArray.push(i);
}

factorial = factArray.reduce((accumulator, currentVal) => {
    return accumulator*currentVal;
}, 1);

console.log(factorial);