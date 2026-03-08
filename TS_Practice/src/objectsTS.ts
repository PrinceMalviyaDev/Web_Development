const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// Behind the scenes Inferred types :

// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }


// Declaring object types:

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}


type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}


// Duck Typing / Structural Typing:

// When we assign an object literal, The TS performs the "excess property checking" to catch possible mistakes such as typos.

// But when we assign a an object variable, TS performs "Structural Typing or Duck typing"

type Cup = {size: string};

let smallCup: Cup = {size: "200ml"};

// let bigCup: Cup = {size: "500ml", material: "ceramic"}   // not allowed because material property does not exist in type Cup 

let bigCup = {size: "500ml", material: "ceramic"};

smallCup = bigCup;

type Brew = {brewTime: number};

const coffee = {brewTime:5, beans: "Arabic"}

const chaiBrew: Brew = coffee;  // Allowed because of structural typing, even though coffee has an extra property "beans" which is not in Brew type.


type User = {
    username: string;
    password: string;
}

const u1 : User = {
    username: "john_doe",   // required property
    password: "securepassword123"  // required property
}

type Item = {
    name: string;
    quantity: number;
}

type Address = {street: string, pin: number};

type Order = {
    id: string;
    items: Item[];
    address: Address;
}


// Partial: Make all properties in T optional

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai = (updates: Partial<Chai>) => {   
    console.log("Updating chai with", updates)
}

const fullChai = (chai: Chai) => {
    console.log(chai);
}

updateChai({price: 25});
updateChai({isHot: false});
updateChai({});

// fullChai({price: 25, name: "green tea", isHot: true});


// Required:  Make all properties in the T required

type ChaiOrder = {
    name?: string,
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 10
});



// Pick: From T, pick a set of properties whose keys are in the union K

type Sutta = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicSuttaInfo = Pick<Chai, "name" | "price">

const chaiInfo : BasicSuttaInfo = {
    name: "American Clove",
    price: 30
}



// Ommit : Construct a type with the properties of T except for those in type K.

type ChaiNew = {
    name: string,
    price: number,
    isHot: boolean,
    secretIngredients: string[]  
}

type PublicChai = Omit<ChaiNew, "secretIngredients">

const publicChai: PublicChai = {
    name: "Chai",
    price: 62,
    isHot: true,
    // secretIngredients: ["hello"]     // not allowed
}