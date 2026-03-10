interface Chai {
    flavour: string,
    price: number,
    milk?: boolean
}

const masala: Chai = {
    flavour : "masala",
    price: 30,
};

interface Shop {
    readonly id: number,
    name: string
}

const s: Shop = {
    id: 1,
    name: "ChaiCode Cafe"
}

interface DiscountCalculator{
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine{
    start():void;
    stop():void;
}

const machine: TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}


// index signatures

interface ChaiRating {
    [flavor: string] : number
}

const ratings: ChaiRating = {
    green: 5,
    ginger: 4,
    black: 6,
    tulsi:3
}


// Interface Merger:

interface User {
    name: string
}

interface User {
    age: number
}

const u: User = {
    name:"Prince",
    age:22
}

// equivalent to 👇

interface A {a: string};
interface B {b: string};

interface C extends A, B {}
