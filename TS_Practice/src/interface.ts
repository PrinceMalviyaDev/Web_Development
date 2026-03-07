type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order : ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}


interface TeaRecipe {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

// type CupSize = "small" | "large";

// class Chai implements CupSize {  // not allowed

// }

interface CupSize {
    size: "small" | "large"
} 

class Chai implements CupSize {
    size: "small" | "large" = "large";
}


// type Response = {
//     ok: true;
// } | {
//     ok: false;
// }

// class myRes implements Response{
//     ok : true = true;
// }



// Literal Types

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType){
    console.log(t);
}


// Intersection 

type BaseChai = {teaLeaves: number};
type Extra = {masala: number};

type SpicyChai = BaseChai & Extra;

const cup: SpicyChai = {
    teaLeaves: 2,
    masala: 1
}


// optional values

type User = {
    username: string;
    bio?: string;
}

const u1: User = {username : 'Prince'}
const u2: User = {username : 'Srishti', bio : 'Full Stack Web developer'}


// read-only

type Config = {
    readonly appName: string;
    version : number;
}

const cfg: Config = {
    appName : "BTBuddy",
    version : 1
}

// cfg.appName = 'Prince';   // cannot assign since it is read only