function displayMember(id:number, name:string, email?:string):void{
    console.log(`Hello ${name}, your id is ${id}`);
    email ? console.log(email) : console.log("Email not provided");
}

displayMember(1, "Srishti");

function calculateFines(...fines:number[]):number{
    let total: number = 0;
    for(let fine of fines) total += fine;
    return total;
}

console.log(`Total Fine: ${calculateFines(200, 300, 400, 500)}`);

function memberShipFee(price:number, discountRate: number = 0.1):number{
    let discount: number = discountRate * price;
    return discount;
}

let price = 10000;
console.log(`Your discounted price is ${price - memberShipFee(price)}`);


function greetVisitor(visitor: string, greet: (name: string) => void){
    greet(visitor);
}

function greet(name: string): void{
    console.log(`Hello ${name}`);
}

greetVisitor("Srishti", greet);


function factorial(num: number): number {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

let n: number = 5;
console.log(`Factorial of ${n} is ${factorial(n)}`);

function generateReport(data: object[]):string;
function generateReport(data: object[], format:"json"):string;
function generateReport(data: any[], format?:string):string{
    if (format === "json"){
        return JSON.stringify(data, null, 2);
    }
    return JSON.stringify(data, null, 2);
}

let data: object[] = [
    {name: "Prince", age: 22},
    {name: "Srishti", age: 19},
    {name: "Tinkaa", age: 17}
]

console.log(generateReport(data));
console.log(generateReport(data, "json"));