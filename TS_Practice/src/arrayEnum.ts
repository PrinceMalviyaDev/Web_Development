const chaiFlavours: string[] = ["Prince", "Malviya"];

const chaiPrice: number[] = [10, 20];

const rating : Array<number> = [4.5, 5.0];


type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "Green", price: 40},
    {name: "Adrak", price: 20}
];

menu.push({name: "Black", price:10});  // allowed


const cities: readonly string[] = ["Delhi", "Jaipur"];

// cities.push("Pune");   // not allowed


const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];



let chaiTuple: [string, number];

chaiTuple = ["Masala", 20];  // exact sequence required

// chaiTuple = [20, "Green"]  // not allowed


let userInfo: [string, number, boolean?];

userInfo = ["Prince", 22, true];

const location: readonly [number, number] = [28.66, 38.44];



// Named Tuple:  More preferred

const chaiItems: [name: string, price: number] = ["masala", 30];

console.log(chaiItems[0]) // console.log(chaiItems.name)   // not allowed, no property access on tuples


// enum: a way to define a set of named constants, can be numeric or string values. 
// Enums provide a way to organize and manage related values, making code more readable and maintainable.
// Numeric Enums: By default, enums are numeric, where each member is assigned a numeric value starting from 0. You can also specify custom numeric values.
// String Enums: Enums can also be string-based, where each member is assigned a string value. This can be useful for better readability and debugging.

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size: CupSize = CupSize.MEDIUM;

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}


enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER);

enum RandomEnum {
    ID = 1,     // not a good practice to have mixed types in enum
    NAME = "chai"
}

const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
} // const enum is inlined during compilation, no object created for enum at runtime

const s = Sugar.MEDIUM;  // inlined as 2 during compilation, no object created for enum at runtime

let t: [string, number] = ["Tea", 10];  // tuple type
t.push("Green");  // allowed, tuples are arrays with fixed types, but can have additional elements added // However, this can lead to unexpected behavior, as the tuple is defined to have only two elements (string and number), but now it has three elements (string, number, and string).
console.log(t);  // Output: ["Tea", 10, "Green"] // However, accessing t[2] would be undefined, as it's not part of the defined tuple structure 