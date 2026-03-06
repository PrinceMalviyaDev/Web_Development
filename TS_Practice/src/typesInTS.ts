// Type Inference in TypeScript

let drink = "coffee";   // TypeScript infers the type of 'drink' as 'string'

let cups = Math.random() > 0.5 ? 2 : '2';  // TypeScript infers the type of 'cups' as 'string | number' (union type)




// Type Annotations in TypeScript

let tea: string = "green tea";  // Explicitly annotating the type of 'tea' as 'string'

let count: number = 5;  // Explicitly annotating the type of 'count' as 'number'

let isHot: boolean = true;  // Explicitly annotating the type of 'isHot' as 'boolean'