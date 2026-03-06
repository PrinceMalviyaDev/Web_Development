// Type Narrowing in TypeScript

// Type narrowing is the process of refining the type of a variable within a specific scope based on certain conditions or checks. This allows TypeScript to provide better type safety and autocompletion features.

function getChai(kind: string | number) {
    if (typeof kind === "string"){
        return `You ordered a ${kind} chai.`;  // TypeScript knows 'kind' is a string here
    }
    return `You ordered ${kind} cups of chai.`;  // TypeScript knows 'kind' is a number here
}


// Example of type narrowing with union types
function serveChai(msg? : string){
    if (msg) {
        console.log(msg);  // TypeScript knows 'msg' is a string here
    } else {
        console.log("You ordered a chai.");  // 'msg' is undefined here
    }
} 

// Type narrowing with custom types (string literals)

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small"){
        return "You ordered a small chai.";  // TypeScript knows 'size' is "small" here
    }
    if (size === "medium" || size === "large"){
        return `You ordered a ${size} chai.`;  // TypeScript knows 'size' is "medium" or "large" here
    }
    return `You ordered ${size} cups of chai.`;  // TypeScript knows 'size' is a number here
}


class KulhadChai{
    serve(){
        return 'Serving chai in a kulhad!';
    }
}

class CuttingChai{
    serve(){
        return 'Serving Cutting chai!'; 
    }
}

// Type narrowing with classes and instanceof operator

function serverChai(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai){
        return chai.serve();  // TypeScript knows 'chai' is an instance of 'KulhadChai' here
    }
    return chai.serve();  // TypeScript knows 'chai' is an instance of 'CuttingChai' here
}


type ChaiOrder = {
    type: string;
    sugar: number;
}


// Type narrowing with type predicates

function isChaiOrderValid(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}


// Using the type predicate function to narrow the type of 'item' in the 'serveChaiOrder' function

function serveChaiOrder(item : ChaiOrder | string) {
    if (isChaiOrderValid(item)){
        return `Serving a ${item.type} chai with ${item.sugar} spoons of sugar.`;  // TypeScript knows 'item' is a 'ChaiOrder' here
    }
    return `Serving a default chai: ${item}`;  // 'item' is a string here
}


// Type narrowing with discriminated unions

// Discriminated unions are a powerful way to narrow types based on a common property (the discriminant). In this example, we have different types of chai orders, each with a 'type' property that serves as the discriminant.

type MasalaChai = {type: "masala", spiceLevel: number};
type GingerChai = {type: "ginger", gingerStrength: number}; 
type ElaichiChai = {type: "elaichi", elaichiIntensity: number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Making a masala chai with spice level ${order.spiceLevel}.`;
            break;
        case "ginger":
            return `Making a ginger chai with ginger strength ${order.gingerStrength}.`;
            break;
        case "elaichi":
            return `Making an elaichi chai with elaichi intensity ${order.elaichiIntensity}.`;
            break;
    }
}


// Type narrowing with the 'in' operator

function brew(order: MasalaChai | GingerChai ){
    if ("spiceLevel" in order){
        return `Brewing a masala chai with spice level ${order.spiceLevel}.`;  // TypeScript knows 'order' is a 'MasalaChai' here
    }
    return `Brewing a ginger chai with ginger strength ${order.gingerStrength}.`;  // TypeScript knows 'order' is a 'GingerChai' here
}


// Type narrowing with type predicates

function isStringArray(arr: unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === "string");
}

function serveChaiWithToppings(toppings: string[] | number) {
    if (isStringArray(toppings)){
        return `Serving chai with toppings: ${toppings.join(", ")}.`;  // TypeScript knows 'toppings' is a string array here
    }
    return `Serving chai with ${toppings} toppings.`;  // 'toppings' is a number here
}
