let arr = [10, 20, 30, 40];

function sum(a, b, c){
    return a + b + c;
}

console.log(...arr);  // 10 20 30 40

console.log(sum(...arr));  // 60



let obj = {...arr}   // spreads the array into index : value pairs and puts it into object.

console.log(obj);   // { '0': 10, '1': 20, '2': 30, '3': 40 }